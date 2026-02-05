import Projects from '../components/Projects';

export default function ProjectsPage() {
  return (
    <div className="pt-28">
      <section className="px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold">Projects</h2>
          <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
            Click a project to see the full story, process, and highlights.
          </p>
        </div>
      </section>
      <Projects />
    </div>
  );
}
