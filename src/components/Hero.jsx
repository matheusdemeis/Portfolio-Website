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
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Matheus Demeis
            </h2>
            <p className="text-2xl text-primary mb-4 font-medium">
              Full Stack Web Developer
            </p>
            <p className="text-lg text-slate-300 mb-8">
              Building clean, functional web applications with modern technologies
            </p>
            <a 
              href="https://drive.google.com/file/d/1ZdFIWai4tuV6fbujF35RjfooWv5E45zw/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              View Resume
            </a>
          </div>
          <div className="flex justify-center">
            <img 
              src={profileImages[profileImage]}
              alt="Profile"
              className="w-80 h-80 rounded-lg border-2 border-primary object-cover shadow-xl transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}