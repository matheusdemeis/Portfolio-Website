import { useCallback, useState } from 'react';
import imageSources from '../data/imageSources.json';

interface ProjectMediaProps { src: string; alt: string; caption: string; featured?: boolean }

export default function ProjectMedia({ src, alt, caption, featured = false }: ProjectMediaProps) {
  const optimized = imageSources[src as keyof typeof imageSources];
  const [failed, setFailed] = useState(false);
  // A static image can fail before React hydrates and attaches onError.
  const checkInitialImage = useCallback((image: HTMLImageElement | null) => {
    if (image?.complete && image.naturalWidth === 0) setFailed(true);
  }, []);
  return (
    <figure className={`project-media ${featured ? 'project-media-featured' : ''}`}>
      <div className="project-image-frame">
        {failed ? <p className="media-fallback">Preview unavailable. Explore the project using the links below.</p> :
          <picture>
            {optimized && <source type="image/webp" srcSet={optimized.srcSet} sizes="(max-width: 767px) calc(100vw - 44px), 1120px" />}
            <img {...(featured ? { fetchpriority: 'high' } : {})} ref={checkInitialImage} src={src} width={optimized?.width} height={optimized?.height} alt={alt} loading={featured ? 'eager' : 'lazy'} decoding="async" onError={() => setFailed(true)} />
          </picture>}
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
