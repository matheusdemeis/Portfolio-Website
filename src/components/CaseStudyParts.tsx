import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { Project } from '../types';

export interface StudyDecision { title: string; problem: string; decision: string; value: string }
export function StudyLink({ href, children }: { href: string; children: ReactNode }) {
  return <a className="text-action" href={href} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={16} aria-hidden="true" /></a>;
}
export function StudyTopbar({ label }: { label: string }) {
  return <div className="vibe-topbar"><Link className="text-action" to="/"><ArrowLeft size={16} aria-hidden="true" />Back to portfolio</Link><p className="eyebrow">{label}</p></div>;
}
export function StudyMetadata({ items }: { items: [string, string][] }) {
  return <dl className="study-metadata">{items.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>;
}
export function StudyNavigation({ chapters }: { chapters: [string, string][] }) {
  return <nav className="vibe-contents" aria-label="Case study chapters">{chapters.map(([id, label], index) => <a key={id} href={`#${id}`}>{String(index + 1).padStart(2, '0')} {label}</a>)}</nav>;
}
export function StudyChapter({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return <section id={id} className="vibe-chapter" tabIndex={-1} aria-labelledby={`${id}-heading`}><header><span className="eyebrow">{number}</span><h2 id={`${id}-heading`}>{title}</h2></header>{children}</section>;
}
export function StudyDecisions({ items }: { items: StudyDecision[] }) {
  return <div className="vibe-decisions">{items.map(item => <article key={item.title}><h3>{item.title}</h3><dl><dt>Problem</dt><dd>{item.problem}</dd><dt>Decision</dt><dd>{item.decision}</dd><dt>Why it matters</dt><dd>{item.value}</dd></dl></article>)}</div>;
}
export function StudyClosing({ project, next, nextLabel }: { project: Project; next: string; nextLabel: string }) {
  return <footer className="vibe-closing"><div><p className="eyebrow">Continue exploring</p><h2>From the story to the source.</h2><StudyLink href={project.link}>Explore the repository</StudyLink></div><Link className="text-action" to={next}>{nextLabel} →</Link></footer>;
}
