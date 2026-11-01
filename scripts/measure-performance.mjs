import { chromium } from '@playwright/test';
import { writeFile } from 'node:fs/promises';
// Run against npm run preview. Unthrottled local lab samples, not field CWV.
const browser = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});
const results = [];
try {
  for (const path of ['/', '/projects/VibePlay', '/projects/tandem', '/projects/InsurFlow']) {
    const runs = [];
    for (let n = 0; n < 3; n++) {
      const context = await browser.newContext({ viewport: { width: 390, height: 900 }, reducedMotion: 'reduce' });
      const page = await context.newPage();
      await page.addInitScript(() => {
        globalThis.portfolioLab = { lcp: 0, cls: 0 };
        new PerformanceObserver(list => { for (const entry of list.getEntries()) globalThis.portfolioLab.lcp = entry.startTime; }).observe({ type: 'largest-contentful-paint', buffered: true });
        new PerformanceObserver(list => { for (const entry of list.getEntries()) if (!entry.hadRecentInput) globalThis.portfolioLab.cls += entry.value; }).observe({ type: 'layout-shift', buffered: true });
      });
      await page.goto('http://127.0.0.1:4173' + path);
      await page.waitForTimeout(1200);
      const result = await page.evaluate(() => ({ ...globalThis.portfolioLab, resources: performance.getEntriesByType('resource').map(resource => ({ name: resource.name.split('/').pop(), bytes: resource.encodedBodySize, type: resource.initiatorType })) }));
      for (const figure of await page.locator('.project-media').all()) {
        await figure.scrollIntoViewIfNeeded();
        await figure.locator('img').evaluate(image => image.decode());
      }
      result.allImages = await page.evaluate(() => performance.getEntriesByType('resource').filter(resource => resource.initiatorType === 'img').reduce((sum, resource) => sum + resource.encodedBodySize, 0));
      runs.push(result);
      await context.close();
    }
    results.push({ path, runs });
  }
  await writeFile(process.argv[2] ?? 'docs/qa/phase-4/performance-final.json', JSON.stringify(results, null, 2) + '\n');
  console.log(results.map(result => ({ path: result.path, lcp: result.runs.map(run => run.lcp), cls: result.runs.map(run => run.cls), images: result.runs[0].allImages })));
} finally { await browser.close(); }
