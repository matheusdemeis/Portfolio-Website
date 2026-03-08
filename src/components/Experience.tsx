import type { ReactElement } from 'react';
import type { ExperienceItem } from '../types';

interface ExperienceProps {
  items: ExperienceItem[];
}

export default function Experience({ items }: ExperienceProps): ReactElement {
  return (
    <div className="space-y-8">
      {items.map((item) => (
        <article
          key={item.id}
          className="grid gap-4 border-t border-slate-800 pt-5 md:grid-cols-[96px_1fr] md:gap-6"
        >
          <p className="text-sm tracking-[0.12em] text-stone-500">{item.year}</p>
          <div>
            <h2 className="text-lg font-medium text-white">{item.role}</h2>
            <p className="mt-1 text-sm text-stone-300">{item.title} · {item.timeline}</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-stone-300">
              {item.impacts.map((impact) => (
                <li key={impact} className="flex gap-2">
                  <span className="mt-[0.5rem] h-1 w-1 rounded-full bg-primary" aria-hidden="true" />
                  <span>{impact}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs uppercase tracking-[0.12em] text-stone-500">
              Tech: {item.tech.join(' · ')}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
