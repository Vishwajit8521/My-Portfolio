import { lazy } from 'react';


export const lazyLoadImage = (src, alt) => {
  if ('loading' in HTMLImageElement.prototype) {
    return <img src={src} alt={alt} loading="lazy" />;
  }

  const LazyImage = lazy(() => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        resolve({
          default: () => <img src={src} alt={alt} />
        });
      };
    });
  });

  return <LazyImage />;
};


export const imageConfig = {
  quality: 75,
  formats: ['webp', 'avif'],
  placeholder: 'blur',
  loading: 'lazy',
};


export const preloadCriticalImages = (images) => {
  if (typeof window !== 'undefined') {
    images.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }
};


export const generateSrcSet = (src, sizes = [320, 640, 768, 1024, 1366]) => {
  return sizes
    .map(size => `${src}?w=${size} ${size}w`)
    .join(', ');
};