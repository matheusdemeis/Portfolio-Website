import { useEffect, useMemo, useState, type ReactElement } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import type { Project } from '../types';

export default function ProjectDetail(): ReactElement {
  const { slug } = useParams<{ slug: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = useMemo(
    () => projects.find((item: Project) => item.slug === slug),
    [slug],
  );

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [slug]);

  if (!project) {
    return (
      <div className="pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Project not found</h2>
          <p className="text-slate-300 mb-8">Try heading back to the projects list.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition"
          >
            <ArrowLeft size={18} /> Back
          </Link>
        </div>
      </div>
    );
  }

  const projectLinks = (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={project.link}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-2 text-primary transition hover:text-primary/80 sm:min-h-0 sm:justify-start sm:border-none sm:bg-transparent sm:px-0 sm:py-0"
      >
        GitHub Repository <ExternalLink size={16} />
      </a>
      {project.liveUrl && (
        <>
          <span className="hidden text-slate-500 sm:inline" aria-hidden="true">
            |
          </span>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-2 text-primary transition hover:text-primary/80 sm:min-h-0 sm:justify-start sm:border-none sm:bg-transparent sm:px-0 sm:py-0"
          >
            View Live App <ExternalLink size={16} />
          </a>
        </>
      )}
    </div>
  );
  const caseStudy = project.caseStudy;
  const displayStack = (project.stack && project.stack.length > 0 ? project.stack : project.tags).join(
    ', ',
  );
  const imageCount = project.images?.length ?? 0;
  const activeImage = imageCount > 0 ? project.images?.[currentImageIndex % imageCount] : undefined;

  return (
    <section className="overflow-x-clip bg-slate-800/50 px-4 pb-20 pt-24 sm:px-6 sm:pt-28">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-primary transition hover:text-primary/80 sm:text-base"
        >
          <ArrowLeft size={18} /> Back
        </Link>

        <header className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-300">Project</span>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ backgroundColor: project.brand.accent, color: '#0f172a' }}
              >
                {project.brand.name}
              </span>
            </div>
            <h2 className="mb-3 break-words text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              {project.title}
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {project.description}
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-3 text-sm text-slate-200 sm:grid-cols-2 lg:max-w-xl">
            <div className="min-w-0 rounded-lg bg-slate-900/50 p-4">
              <p className="text-slate-400">Role</p>
              <p className="break-words font-semibold">{project.role}</p>
            </div>
            {project.team && (
              <div className="min-w-0 rounded-lg bg-slate-900/50 p-4">
                <p className="text-slate-400">Team</p>
                <p className="break-words font-semibold">{project.team}</p>
              </div>
            )}
            <div className="min-w-0 rounded-lg bg-slate-900/50 p-4">
              <p className="text-slate-400">Timeline</p>
              <p className="font-semibold">{project.timeline}</p>
            </div>
            <div className="min-w-0 rounded-lg bg-slate-900/50 p-4">
              <p className="text-slate-400">Year</p>
              <p className="font-semibold">{project.year}</p>
            </div>
            <div className="min-w-0 rounded-lg bg-slate-900/50 p-4">
              <p className="text-slate-400">Brand tone</p>
              <p className="break-words font-semibold">{project.brand.tone}</p>
            </div>
            {caseStudy && (
              <div className="min-w-0 rounded-lg bg-slate-900/50 p-4">
                <p className="text-slate-400">Stack</p>
                <p className="break-words font-semibold">{displayStack}</p>
              </div>
            )}
          </div>
        </header>

        {caseStudy ? (
          <article className="mt-10 space-y-10">
            <div
              className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5 sm:p-6"
              style={{
                backgroundImage: `linear-gradient(120deg, ${project.brand.accent}1f, rgba(15, 23, 42, 0.55))`,
              }}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-slate-300">Impact</p>
              <p className="mt-2 text-base leading-relaxed text-slate-100 sm:text-lg">{caseStudy.impact}</p>
            </div>

            <section>
              <h3 className="mb-3 text-xl font-semibold sm:text-2xl">Problem</h3>
              <p className="max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
                {caseStudy.problem}
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-semibold sm:text-2xl">Goal</h3>
              <p className="max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
                {caseStudy.goal}
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-semibold sm:text-2xl">Approach</h3>
              <p className="max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
                {caseStudy.approach}
              </p>
            </section>

            <section>
              <h3 className="mb-4 text-xl font-semibold sm:text-2xl">Solution</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                {caseStudy.solution.map((item: string, index: number) => (
                  <li key={`${item}-${index}`} className="flex min-w-0 gap-3">
                    <span
                      className="mt-2 h-2 w-2 rounded-full"
                      style={{ backgroundColor: project.brand.accent }}
                    />
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {project.demoUrl && (
              <section>
                <h3 className="mb-4 text-xl font-semibold sm:text-2xl">Solution in Practice</h3>
                <p className="mb-5 max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  {caseStudy.demoCaption}
                </p>
                <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-4 sm:p-6">
                  <div className="mx-auto flex justify-center">
                    <div
                      className="w-full max-w-[402px] overflow-hidden rounded-[2rem] border-[10px] border-gray-800 bg-gray-800 shadow-2xl sm:rounded-[2.5rem] sm:border-[14px]"
                      style={{ aspectRatio: '402 / 874' }}
                    >
                      <iframe
                        src={project.demoUrl}
                        className="h-full w-full"
                        title={`${project.brand.name} App`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                      />
                    </div>
                  </div>
                  {!!caseStudy.demoCallouts?.length && (
                    <ul className="mt-5 space-y-2 text-sm text-slate-300">
                      {caseStudy.demoCallouts.map((item: string, index: number) => (
                        <li key={`${item}-${index}`} className="flex min-w-0 gap-3">
                          <span
                            className="mt-2 h-2 w-2 rounded-full"
                            style={{ backgroundColor: project.brand.accent }}
                          />
                          <span className="break-words">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            )}

            <section>
              <h3 className="mb-4 text-xl font-semibold sm:text-2xl">Technical Build</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                {caseStudy.technicalBuild.map((item: string, index: number) => (
                  <li key={`${item}-${index}`} className="flex min-w-0 gap-3">
                    <span
                      className="mt-2 h-2 w-2 rounded-full"
                      style={{ backgroundColor: project.brand.accent }}
                    />
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="max-w-full break-words rounded-full bg-slate-900/60 px-3 py-1 text-sm text-slate-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="mb-4 text-xl font-semibold sm:text-2xl">Challenges</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                {caseStudy.challenges.map((item: string, index: number) => (
                  <li key={`${item}-${index}`} className="flex min-w-0 gap-3">
                    <span
                      className="mt-2 h-2 w-2 rounded-full"
                      style={{ backgroundColor: project.brand.accent }}
                    />
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-semibold sm:text-2xl">Outcome</h3>
              <p className="max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
                {caseStudy.outcome}
              </p>
            </section>

            <section>
              <h3 className="mb-4 text-xl font-semibold sm:text-2xl">Learnings</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                {caseStudy.learnings.map((item: string, index: number) => (
                  <li key={`${item}-${index}`} className="flex min-w-0 gap-3">
                    <span
                      className="mt-2 h-2 w-2 rounded-full"
                      style={{ backgroundColor: project.brand.accent }}
                    />
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-slate-700 bg-slate-900/60 p-4 sm:p-5">
              <h3 className="mb-4 text-xl font-semibold sm:text-2xl">Further Reading & Links</h3>
              {project.blog && (
                <div className="relative mb-4 flex w-full aspect-[16/9] items-end overflow-hidden rounded-xl bg-slate-950/70 p-4 sm:aspect-[16/6]">
                  {project.blog.image && (
                    <img
                      src={project.blog.image}
                      alt={project.blog.title}
                      className="absolute inset-0 z-0 h-full w-full object-contain object-center"
                    />
                  )}
                  <div
                    className="absolute inset-0 z-10"
                    style={{
                      background: project.blog.image
                        ? 'linear-gradient(to top, rgba(15, 23, 42, 0.84) 5%, rgba(15, 23, 42, 0.2) 50%, rgba(15, 23, 42, 0.1) 100%)'
                        : `linear-gradient(135deg, ${project.brand.accent}66, transparent)`,
                    }}
                  />
                  <div className="relative z-20">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-200">Featured</p>
                    <p className="break-words text-lg font-semibold leading-snug sm:text-2xl">
                      {project.blog.title}
                    </p>
                  </div>
                </div>
              )}
              {project.blog && (
                <p className="mb-4 text-sm leading-relaxed text-slate-300">{project.blog.description}</p>
              )}
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                {project.blog && (
                  <a
                    href={project.blog.url}
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-2 text-primary transition hover:text-primary/80 sm:min-h-0 sm:w-auto sm:justify-start sm:border-none sm:bg-transparent sm:px-0 sm:py-0"
                  >
                    Visit Blog <ExternalLink size={16} />
                  </a>
                )}
                {projectLinks}
              </div>
            </section>
          </article>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="min-w-0">
              <h3 className="mb-4 text-xl font-semibold sm:text-2xl">Project Notes</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                {project.rationale.map((item: string, index: number) => (
                  <li key={`${item}-${index}`} className="flex min-w-0 gap-3">
                    <span
                      className="mt-2 h-2 w-2 rounded-full"
                      style={{ backgroundColor: project.brand.accent }}
                    />
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="max-w-full break-words rounded-full bg-slate-900/60 px-3 py-1 text-sm text-slate-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8">{projectLinks}</div>
            </div>

            <div className="min-w-0">
              {project.demoUrl ? (
                <>
                  <h3 className="mb-4 text-xl font-semibold sm:text-2xl">Live Demo</h3>
                  <div className="mx-auto flex justify-center">
                    <div
                      className="w-full max-w-[402px] overflow-hidden rounded-[2rem] border-[10px] border-gray-800 bg-gray-800 shadow-2xl sm:rounded-[2.5rem] sm:border-[14px]"
                      style={{ aspectRatio: '402 / 874' }}
                    >
                      <iframe
                        src={project.demoUrl}
                        className="h-full w-full"
                        title={`${project.brand.name} App`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                      />
                    </div>
                  </div>
                </>
              ) : imageCount > 0 ? (
                <>
                  <h3 className="mb-4 text-xl font-semibold sm:text-2xl">Project Preview</h3>
                  <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-4 sm:p-5">
                    <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-950/70">
                      <div className="aspect-[16/10] w-full">
                        <img
                          src={activeImage}
                          alt={`${project.brand.name} screenshot ${currentImageIndex + 1}`}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          setCurrentImageIndex((prev: number) =>
                            prev === 0 ? imageCount - 1 : prev - 1,
                          )
                        }
                        className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-100 transition hover:border-slate-500"
                      >
                        Prev
                      </button>
                      <p className="text-sm text-slate-300">
                        {(currentImageIndex % imageCount) + 1} / {imageCount}
                      </p>
                      <button
                        type="button"
                        onClick={() =>
                          setCurrentImageIndex((prev: number) =>
                            prev === imageCount - 1 ? 0 : prev + 1,
                          )
                        }
                        className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-100 transition hover:border-slate-500"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </>
              ) : project.visuals?.length ? (
                <>
                  <h3 className="mb-4 text-xl font-semibold sm:text-2xl">Project Highlights</h3>
                  <div className="grid gap-4">
                    {project.visuals.map((visual, index: number) => (
                      <div
                        key={`${visual.title}-${index}`}
                        className="rounded-xl border border-slate-700 bg-slate-900/60 p-4"
                      >
                        <div
                          className="mb-4 h-16 rounded-lg"
                          style={{
                            background: `linear-gradient(120deg, ${project.brand.accent}33, transparent)`,
                          }}
                        />
                        <p className="mb-1 font-semibold">{visual.title}</p>
                        <p className="text-sm text-slate-300">{visual.description}</p>
                      </div>
                    ))}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
