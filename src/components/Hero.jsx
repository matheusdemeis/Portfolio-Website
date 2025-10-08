import { useState, useEffect } from 'react';
import { profileImages } from '../data/images';

export default function Hero() {
  const [profileImage, setProfileImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProfileImage((prev) => (prev + 1) % profileImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Matheus Demeis
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Full Stack Web Developer
            </p>
            <a 
              href="#contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:scale-105"
            >
              Resume
            </a>
          </div>
          <div className="flex justify-center">
            <img 
              src={profileImages[profileImage]}
              alt="Profile"
              className="w-80 h-80 rounded-lg border-4 border-cyan-400 object-cover shadow-lg shadow-cyan-500/50 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}