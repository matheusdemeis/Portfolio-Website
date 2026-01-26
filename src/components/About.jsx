export default function About() {
    return (
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-8 text-center">About Me</h3>
          <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-8">
            <p className="text-lg text-slate-300 mb-6">
            I'm a Full Stack Web Development in Vancouver, BC. 
            Video games sparked my curiosity about technology as a kid, and I've been hooked 
            ever since. Now I see myself constantly exploring how things work and building cool stuff.
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