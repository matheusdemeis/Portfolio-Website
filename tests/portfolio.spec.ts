import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import metadata from '../src/data/seo.json' with { type: 'json' };
import { mkdir } from 'node:fs/promises';
const widths = [320, 375, 390, 768, 1024, 1440];

for (const [path, meta] of Object.entries(metadata)) {
  for (const width of widths) {
    test(`${path} at ${width}px`, async ({ page }, info) => {
      await page.setViewportSize({ width, height: 900 });
      const errors: string[] = [];
      page.on('pageerror', error => errors.push(error.message));
      page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('main')).toHaveCount(1);
      await expect(page).toHaveTitle(meta.title);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://www.matheusdemeis.com' + path);
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', meta.title);
      for (const image of await page.locator('.project-media img').all()) {
        await image.scrollIntoViewIfNeeded();
        await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)).toBe(true);
        expect(await image.getAttribute('alt')).toBeTruthy();
      }
      for (const anchor of await page.locator('.vibe-contents a').all()) {
        const href = await anchor.getAttribute('href');
        await anchor.click();
        expect(new URL(page.url()).hash).toBe(href);
        await expect(page.locator(href!)).toBeVisible();
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
      for (const link of await page.locator('a[target="_blank"]').all()) {
        expect(await link.getAttribute('rel')).toContain('noopener');
      }
      if (width === 390 || width === 1440) {
        const scan = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
        expect(scan.violations).toEqual([]);
        if (info.project.name === 'chromium') {
          await page.evaluate(() => { if (document.activeElement instanceof HTMLElement) document.activeElement.blur(); scrollTo(0, 0); });
          await mkdir('docs/screenshots/phase-4', { recursive: true });
          await page.screenshot({ path: `docs/screenshots/phase-4/${path.split('/').pop() || 'home'}-${width}.png`, fullPage: true });
        }
      }
      await page.reload();
      await expect(page).toHaveTitle(meta.title);
      expect(errors).toEqual([]);
    });
  }
  test(`${path} crawler HTML without JavaScript`, async ({ browser, request }) => {
    const response = await request.get(path);
    const html = await response.text();
    expect(html).toContain(`<title>${meta.title}</title>`);
    expect(html).toContain('property="og:description"');
    expect(html).toContain('<h1');
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto('http://127.0.0.1:4173' + path);
    await expect(page.locator('h1')).toBeVisible();
    await context.close();
  });
}

for (const width of widths) test(`missing routes at ${width}px`, async ({ page }) => {
  await page.setViewportSize({ width, height: 900 });
  for (const path of ['/projects/unknown', '/unknown', '/PROJECTS/tandem', '/projects/vibeplay']) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(404);
    await expect(page.locator('h1')).toHaveText('This page could not be found.');
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex,follow');
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.getByRole('link', { name: 'Back to portfolio' }).click();
    await expect(page).toHaveTitle(metadata['/'].title);
  }
});

test('primary navigation, focus, history, anchors, and media fallback', async ({ page, request }, info) => {
  // Safari on macOS uses Option-Tab for links unless full keyboard access is enabled.
  const tab = info.project.name === 'webkit' && process.platform === 'darwin' ? 'Alt+Tab' : 'Tab';
  await page.goto('/');
  await expect(page.locator('.project-identity h3')).toHaveText(['VibePlay', 'Tandem', 'InsurFlow']);
  await page.keyboard.press(tab);
  await expect(page.locator('.skip-link')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#projects')).toBeFocused();
  for (const slug of ['VibePlay', 'tandem', 'InsurFlow']) {
    const link = page.locator(`a.project-detail-link[href="/projects/${slug}"]`);
    await link.focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('main h1')).toBeFocused();
    await page.keyboard.press(tab);
    expect(await page.locator(':focus').evaluate(e => getComputedStyle(e).outlineStyle)).toBe('solid');
    await page.locator('.vibe-topbar a').click();
    await expect(page.locator('main h1')).toBeFocused();
  }
  await page.locator('a.project-detail-link').first().click();
  await expect(page.locator('main h1')).toBeFocused();
  await page.goBack(); await expect(page.locator('main h1')).toBeFocused();
  await page.goForward(); await expect(page).toHaveTitle(metadata['/projects/VibePlay'].title);
  await page.goto('/projects'); await expect(page).toHaveURL('http://127.0.0.1:4173/');
  for (const path of Object.keys(metadata)) {
    await page.route('**/images/projects/**', route => route.abort());
    await page.goto(path);
    for (const figure of await page.locator('.project-media').all()) {
      await figure.scrollIntoViewIfNeeded(); await expect(figure.locator('.media-fallback')).toBeVisible();
    }
    await page.unroute('**/images/projects/**');
  }
  expect((await request.get('/robots.txt')).status()).toBe(200);
  const sitemap = await (await request.get('/sitemap.xml')).text();
  for (const path of Object.keys(metadata)) expect(sitemap).toContain(`https://www.matheusdemeis.com${path}</loc>`);
});

test('text scaling and normal motion preference', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 900 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  for (const path of Object.keys(metadata)) {
    await page.goto(path);
    // Double computed text sizes, including the design's pixel-based typography.
    await page.evaluate(() => {
      const elements = [...document.querySelectorAll<HTMLElement>('main *')];
      const sizes = elements.map(element => parseFloat(getComputedStyle(element).fontSize));
      elements.forEach((element, index) => { element.style.fontSize = `${sizes[index] * 2}px`; });
    });
    const overflow = await page.evaluate(() => [...document.querySelectorAll('main *')].filter(element => element.getBoundingClientRect().right > innerWidth + 1).map(element => ({ tag: element.tagName, class: element.className, right: element.getBoundingClientRect().right })));
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), JSON.stringify({ path, overflow })).toBe(true);
    expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('smooth');
  }
});
