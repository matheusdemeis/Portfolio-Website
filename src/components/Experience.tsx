import type { ReactElement } from 'react';
import type { ExperienceItem } from '../types';

interface ExperienceProps {
  items: ExperienceItem[];
}

export default function Experience({ items }: ExperienceProps): ReactElement {
  return (
    <div className="experience-list">
      {items.map((item) => (
        <article
          key={item.id}
          className="experience-entry"
        >
          <p className="text-sm tracking-[0.12em] text-stone-400">{item.year}</p>
          <div>
            <h3 className="text-xl font-medium text-white">{item.role}</h3>
            <p className="mt-2 text-sm leading-relaxed text-primary">{item.title} · {item.timeline}</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-stone-300">
              {item.impacts.map((impact) => (
                <li key={impact} className="flex gap-2">
                  <span className="mt-[0.5rem] h-1 w-1 rounded-full bg-primary" aria-hidden="true" />
                  <span>{impact}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs leading-relaxed tracking-[0.04em] text-stone-400">
              Tech: {item.tech.join(' · ')}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
