import { useState } from 'react';

interface ProjectMediaProps { src: string; alt: string; caption: string; featured?: boolean }

export default function ProjectMedia({ src, alt, caption, featured = false }: ProjectMediaProps) {
  const [failed, setFailed] = useState(false);
  return (
    <figure className={`project-media ${featured ? 'project-media-featured' : ''}`}>
      <div className="project-image-frame">
        {failed ? <p className="media-fallback">Preview unavailable. Explore the project using the links below.</p> :
          <img src={src} alt={alt} loading={featured ? 'eager' : 'lazy'} decoding="async" onError={() => setFailed(true)} />}
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
