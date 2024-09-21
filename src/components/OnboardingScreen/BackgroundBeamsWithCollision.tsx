import React, { useRef, useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ... Include BeamOptions, CollisionMechanismProps, and ExplosionProps interfaces ...
interface BeamOptions {
    initialX: number;
    initialY: number;
    translateX: number;
    translateY: number;
    duration: number;
    repeatDelay: number;
    delay?: number;
    className?: string;
    rotate?: number;
  }

  interface CollisionMechanismProps {
    containerRef: React.RefObject<HTMLDivElement>;
    parentRef: React.RefObject<HTMLDivElement>;
    beamOptions: BeamOptions;
  }

  interface ExplosionProps extends React.HTMLAttributes<HTMLDivElement> {
    style: React.CSSProperties;
  }
  


  const CollisionMechanism: React.FC<CollisionMechanismProps> = ({
    containerRef,
    parentRef,
    beamOptions,
  }) => {
    const beamRef = useRef<HTMLDivElement>(null);
    const [collision, setCollision] = useState<{
      detected: boolean;
      coordinates: { x: number; y: number } | null;
    }>({ detected: false, coordinates: null });
    const [beamKey, setBeamKey] = useState(0);
    const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);
  
    useEffect(() => {
      const checkCollision = () => {
        if (
          beamRef.current &&
          containerRef.current &&
          parentRef.current &&
          !cycleCollisionDetected
        ) {
          const beamRect = beamRef.current.getBoundingClientRect();
          const containerRect = containerRef.current.getBoundingClientRect();
          const parentRect = parentRef.current.getBoundingClientRect();
  
          if (beamRect.bottom >= containerRect.top) {
            const relativeX =
              beamRect.left - parentRect.left + beamRect.width / 2;
            const relativeY = beamRect.bottom - parentRect.top;
  
            setCollision({
              detected: true,
              coordinates: { x: relativeX, y: relativeY },
            });
            setCycleCollisionDetected(true);
          }
        }
      };
  
      const animationInterval = setInterval(checkCollision, 50);
      return () => clearInterval(animationInterval);
    }, [cycleCollisionDetected, containerRef, parentRef]);
  
    useEffect(() => {
      if (collision.detected && collision.coordinates) {
        setTimeout(() => {
          setCollision({ detected: false, coordinates: null });
          setCycleCollisionDetected(false);
        }, 2000);
  
        setTimeout(() => {
          setBeamKey((prevKey) => prevKey + 1);
        }, 2000);
      }
    }, [collision]);
  
    return (
      <>
        <motion.div
          key={beamKey}
          ref={beamRef}
          animate={{
            translateY: beamOptions.translateY || "1800px",
            translateX: beamOptions.translateX || "0px",
            rotate: beamOptions.rotate || 0,
          }}
          initial={{
            translateY: beamOptions.initialY || "-200px",
            translateX: beamOptions.initialX || "0px",
            rotate: beamOptions.rotate || 0,
          }}
          transition={{
            duration: beamOptions.duration || 8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: beamOptions.delay || 0,
            repeatDelay: beamOptions.repeatDelay || 0,
          }}
          className={`absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent ${
            beamOptions.className || ""
          }`}
        />
        <AnimatePresence>
          {collision.detected && collision.coordinates && (
            <Explosion
              key={`${collision.coordinates.x}-${collision.coordinates.y}`}
              style={{
                left: `${collision.coordinates.x}px`,
                top: `${collision.coordinates.y}px`,
                transform: "translate(-50%, -50%)",
              }}
            />
          )}
        </AnimatePresence>
      </>
    );
  };

  const Explosion: React.FC<ExplosionProps> = (props) => {
    const spans = Array.from({ length: 20 }, (_, index) => ({
      id: index,
      initialX: 0,
      initialY: 0,
      directionX: Math.floor(Math.random() * 80 - 40),
      directionY: Math.floor(Math.random() * -50 - 10),
    }));
  
    return (
      <div
        {...props}
        className={`absolute z-50 h-2 w-2 ${props.className || ""}`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
        />
        {spans.map((span) => (
          <motion.span
            key={span.id}
            initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
            animate={{
              x: span.directionX,
              y: span.directionY,
              opacity: 0,
            }}
            transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
            className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"
          />
        ))}
      </div>
    );
  };

interface BackgroundBeamsWithCollisionProps {
  children: ReactNode;
}

const BackgroundBeamsWithCollision: React.FC<BackgroundBeamsWithCollisionProps> = ({ children }) => {
  const containerRef = useRef(null);
  const parentRef = useRef(null);

const beams = [
    {
      initialX: 10,
      translateX: 10,
      duration: 7,
      repeatDelay: 3,
      delay: 2,
      initialY: -200,
      translateY: 1800,
      rotate: 0,
    },
    {
      initialX: 600,
      translateX: 600,
      duration: 3,
      repeatDelay: 3,
      delay: 4,
      initialY: -200,
      translateY: 1800,
      rotate: 0,
    },
    {
      initialX: 100,
      translateX: 100,
      duration: 7,
      repeatDelay: 7,
      className: "h-6",
      initialY: -200,
      translateY: 1800,
      rotate: 0,
    },
    {
      initialX: 400,
      translateX: 400,
      duration: 5,
      repeatDelay: 14,
      delay: 4,
      initialY: -200,
      translateY: 1800,
      rotate: 0,
    },
    {
      initialX: 800,
      translateX: 800,
      duration: 11,
      repeatDelay: 2,
      className: "h-20",
      initialY: -200,
      translateY: 1800,
      rotate: 0,
    },
    {
      initialX: 1000,
      translateX: 1000,
      duration: 4,
      repeatDelay: 2,
      className: "h-12",
      initialY: -200,
      translateY: 1800,
      rotate: 0,
    },
    {
      initialX: 1200,
      translateX: 1200,
      duration: 6,
      repeatDelay: 4,
      delay: 2,
      className: "h-6",
      initialY: -200,
      translateY: 1800,
      rotate: 0,
    },
  ];

  return (
    <div
      ref={parentRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black overflow-hidden"
    >
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
