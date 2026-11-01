import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { updateMetadata } from '../lib/seo';

export default function RouteEffects() {
  const { pathname, hash } = useLocation();
  const previousPath = useRef(pathname);
  useEffect(() => {
    updateMetadata(pathname);
    let frame: number | undefined;
    if (previousPath.current !== pathname) {
      frame = requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : document.querySelector('main h1');
      if (target instanceof HTMLElement) {
        target.tabIndex = -1;
        target.focus({ preventScroll: true });
      }
      if (hash && target) target.scrollIntoView();
      else window.scrollTo({ top: 0, behavior: 'instant' });
      });
    }
    previousPath.current = pathname;
    return () => { if (frame !== undefined) cancelAnimationFrame(frame); };
  }, [pathname, hash]);
  return null;
}
