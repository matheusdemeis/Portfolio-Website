export default function Section({ id, title, children, className = '' }) {
  return (
    <section id={id} className={`mb-16 ${className}`.trim()}>
      <p className="mb-5 text-sm font-medium tracking-[0.14em] text-primary">// {title}</p>
      {children}
    </section>
  );
}
