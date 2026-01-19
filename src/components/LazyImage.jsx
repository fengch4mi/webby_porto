import { useState, useEffect, useRef } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  effect = 'blur',
  threshold = 100,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: `${threshold}px` }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [threshold]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const wrapperClass = `lazy-load-image-background ${effect} ${isLoaded ? 'lazy-load-image-loaded' : ''}`;

  return (
    <span className={wrapperClass} ref={imgRef}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={className}
          onLoad={handleLoad}
          {...props}
        />
      )}
    </span>
  );
};

export default LazyImage;
