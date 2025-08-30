import { useState, useEffect, useRef } from 'react';
import { images } from '@/data/krabiImages';

export const EndlessCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentTransform, setCurrentTransform] = useState(0);
  const animationRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const startTimeRef = useRef<number | null>(null);
  const pausedAtRef = useRef(0);
  
  const duplicatedImages = [...images, ...images];
  const totalWidth = images.length * 320;
  const animationDuration = 35000;

  useEffect(() => {
    if (!isPaused) {
      const startAnimation = () => {
        startTimeRef.current = performance.now() - pausedAtRef.current;
        
        const animate = (currentTime : number) => {
          if (isPaused) return;
          
          const elapsed = currentTime - (startTimeRef.current || 0);
          const progress = (elapsed % animationDuration) / animationDuration;
          const transform = -progress * totalWidth;
          
          setCurrentTransform(transform);
          animationRef.current = requestAnimationFrame(animate);
        };
        
        animationRef.current = requestAnimationFrame(animate);
      };
      
      startAnimation();
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      if (startTimeRef.current) {
        const currentTime = performance.now();
        const elapsed = currentTime - startTimeRef.current;
        pausedAtRef.current = elapsed % animationDuration;
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, totalWidth, animationDuration]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      {/* Carousel Container */}
      <div className="w-full max-w-7xl overflow-hidden rounded-2xl shadow-2xl">
        <div
          ref={containerRef}
          className="flex"
          style={{
            width: `${duplicatedImages.length * 320}px`,
            transform: `translateX(${currentTransform}px)`,
            transition: isPaused ? 'none' : 'none',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="w-80 h-64 flex-shrink-0 relative group cursor-pointer"
            >
              {/* Image */}
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
             
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-4xl font-bold mb-1">
                    {image.title}
                  </h3>
                  <p className="text-3xl opacity-90">
                    {image.description}
                  </p>
                </div>
              </div>
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 ring-2 ring-white/0 group-hover:ring-white/30 transition-all duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};