import React, { useState, useRef } from 'react';

export const MovingCard: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateY = (mouseX / (rect.width / 2)) * 15;
    const rotateX = -(mouseY / (rect.height / 2)) * 15;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div
        ref={cardRef}
        className="relative w-120 h-90 cursor-pointer transition-transform duration-300 ease-out preserve-3d"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Card Container */}
        <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden relative transform-gpu">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 z-10"></div>
          
          {/* Image */}
          <img
            src="images/CoupleJourney/chapter1_27.jpg"
            alt="A puzzle"
            className="w-full object-cover"
          />

          {/* Shine Effect */}
          <div 
            className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300 pointer-events-none z-30"
            style={{
              background: `linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)`,
              transform: `translateX(${rotation.y * 2}px) translateY(${rotation.x * 2}px)`,
            }}
          ></div>
        </div>

        {/* Shadow */}
        <div 
          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-64 h-8 bg-black/20 rounded-full blur-xl transition-all duration-300"
          style={{
            transform: `translateX(-50%) translateX(${rotation.y * 2}px) translateY(${rotation.x}px)`,
            opacity: 0.3 + Math.abs(rotation.x + rotation.y) * 0.01,
          }}
        ></div>
      </div>
    </div>
  );
};