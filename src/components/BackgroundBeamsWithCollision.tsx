"use client";

import React, { useRef, ReactNode } from 'react';
import CollisionMechanism from './CollisionMechanism';

interface BackgroundBeamsWithCollisionProps {
  children: ReactNode;
}

const BackgroundBeamsWithCollision: React.FC<BackgroundBeamsWithCollisionProps> = ({ children }) => {
  const containerRef = useRef(null);
  const parentRef = useRef(null);

  const beams = [
    { initialX: 10, translateX: 10, duration: 7, repeatDelay: 3, delay: 2, initialY: -200, translateY: 1800, rotate: 0  },
    { initialX: 600, translateX: 600, duration: 3, repeatDelay: 3, delay: 4, initialY: -200, translateY: 1800, rotate: 0 },
    { initialX: 100, translateX: 100, duration: 7, repeatDelay: 7, className: "h-6", initialY: -200, translateY: 1800, rotate: 0 },
    { initialX: 400, translateX: 400, duration: 5, repeatDelay: 14, delay: 4, initialY: -200, translateY: 1800, rotate: 0 },
    { initialX: 800, translateX: 800, duration: 11, repeatDelay: 2, className: "h-20", initialY: -200, translateY: 1800, rotate: 0  },
    { initialX: 1000, translateX: 1000, duration: 4, repeatDelay: 2, className: "h-12", initialY: -200, translateY: 1800, rotate: 0 },
    { initialX: 1200, translateX: 1200, duration: 6, repeatDelay: 4, delay: 2, className: "h-6", initialY: -200, translateY: 1800, rotate: 0 },
  ];

  return (
    <div ref={parentRef} className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      {beams.map((beam, index) => (
        <CollisionMechanism
          key={`beam-${index}`}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}
      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent pointer-events-none"
      />
    </div>
  );
};

export default BackgroundBeamsWithCollision;