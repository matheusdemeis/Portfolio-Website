import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  number?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, number, children, className = '' }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={`home-section ${className}`} tabIndex={-1}>
      <header className="section-heading">
        <h2 id={`${id}-heading`}>{number && <span aria-hidden="true">{number} / </span>}{title}</h2>
      </header>
      {children}
    </section>
  );
}
