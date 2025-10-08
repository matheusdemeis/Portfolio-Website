export default function About() {
    return (
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-8 text-center">About Me</h3>
          <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-8">
            <p className="text-lg text-slate-300 mb-6">
              I'm a 19 year old Full Stack Web Development student at BCIT, based in Vancouver, BC. 
              I got my first video game at 6 and have been passionate about technology ever since. 
              I love discovering new things and tackling interesting problems through code.
            </p>
            <p className="text-lg text-slate-300 mb-6">
              I'm constantly learning new 
              technologies and frameworks to improve my skills.
            </p>
            <p className="text-lg text-slate-300">
              Outside of coding, I'm passionate about sports and gaming. I thrive in 
              collaborative environments and enjoy working with others to bring ideas to life.
            </p>
          </div>
        </div>
      </section>
    );
  }