"use client"
import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button, ButtonProps } from "@/components/ui/button";
import { Github, Lock, UserCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedButtonProps extends ButtonProps {
  children: ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, ...props }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Button {...props}>{children}</Button>
  </motion.div>
);

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

const CollisionMechanism: React.FC<CollisionMechanismProps> = ({ containerRef, parentRef, beamOptions }) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{ detected: boolean, coordinates: { x: number, y: number } | null }>({ detected: false, coordinates: null });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (beamRef.current && containerRef.current && parentRef.current && !cycleCollisionDetected) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX = beamRect.left - parentRect.left + beamRect.width / 2;
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
        setBeamKey(prevKey => prevKey + 1);
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
        className={`absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent ${beamOptions.className || ""}`}
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

interface ExplosionProps extends React.HTMLAttributes<HTMLDivElement> {
  style: React.CSSProperties;
}

const Explosion: React.FC<ExplosionProps> = (props) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div {...props} className={`absolute z-50 h-2 w-2 ${props.className || ""}`}>
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

const OnboardingScreen: React.FC = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl font-bold mb-2 text-white"
            >
              Log in to DevX
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-400"
            >
              Connect and collaborate with fellow developers
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Card className="bg-gray-800 bg-opacity-80 border-gray-700 shadow-lg backdrop-blur-sm">
              <CardContent className="space-y-4 pt-6">
                <AnimatedButton className="w-full bg-white hover:bg-gray-100 text-black font-semibold" variant="outline">
                  <Github className="mr-2 h-5 w-5" /> Continue with GitHub
                </AnimatedButton>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="space-y-4"
          >
            <AnimatedButton className="w-full bg-gray-800 bg-opacity-80 hover:bg-opacity-100 text-white border border-gray-700 backdrop-blur-sm" variant="outline">
              <Lock className="mr-2 h-5 w-5" /> Continue with SAML SSO
            </AnimatedButton>
            <AnimatedButton className="w-full bg-gray-800 bg-opacity-80 hover:bg-opacity-100 text-white border border-gray-700 backdrop-blur-sm" variant="outline">
              <UserCircle2 className="mr-2 h-5 w-5" /> Login with Passkey
            </AnimatedButton>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-center"
          >
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:underline">
              Continue with Email →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default OnboardingScreen;