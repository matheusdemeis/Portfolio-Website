import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { pageMetadata } from './lib/seo';

export function render(path: string) {
  return { markup: renderToString(<StaticRouter location={path}><App /></StaticRouter>), metadata: pageMetadata(path) };
}
