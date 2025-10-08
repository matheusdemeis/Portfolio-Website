import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-8">Contact Me!</h3>
        <p className="text-lg text-slate-300 mb-12">
          I'm currently looking for internships and junior developer opportunities.
        </p>
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com/MatheusDemeis" className="p-3 bg-slate-700 rounded-lg hover:bg-cyan-500 transition hover:text-slate-900">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/matheus-demeis/" className="p-3 bg-slate-700 rounded-lg hover:bg-cyan-500 transition hover:text-slate-900">
            <Linkedin size={24} />
          </a>
        </div>
        <a 
          href="mailto:matheus.demeis@gmail.com"
          className="inline-block border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition"
        >
          Send Me an Email
        </a>
      </div>
    </section>
  );
}