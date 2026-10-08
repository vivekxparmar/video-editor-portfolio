"use client";

import { useEffect, useRef, useState } from "react";

export function TojiModel() {
  const motionRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const motionLayer = motionRef.current;
    if (!motionLayer) return;

    let rafId = 0;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = (time - startTime) / 1000;

      // Very subtle idle movement
      const x = Math.sin(elapsed * 0.5) * 1;
      const y = Math.sin(elapsed * 0.35) * 0.7;

      motionLayer.style.transform = `
        translate3d(${x}px, ${y}px, 0)
      `;

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [mounted]);

  return (
    <div className="relative w-full h-full pointer-events-none select-none">
      {/* Ambient glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[75%]
          h-[65%]
          rounded-full
          blur-[110px]
          opacity-40
        "
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.4) 0%, rgba(139,92,246,0.22) 40%, transparent 72%)",
        }}
      />

      {/* Animation wrapper */}
      <div
        ref={motionRef}
        className="absolute inset-0"
        style={{
          willChange: "transform",
        }}
      >
        {/* ================= GOJO ================= */}
        <img
          src="/gojo_satoru.png"
          alt="Gojo Satoru"
          draggable={false}
          className="absolute block"
          style={{
            width: "700px",
            height: "auto",
            maxWidth: "none",
            maxHeight: "none",

            // Gojo position
            left: "70%",
            top: "0",

            transform: "translateX(-50%)",

            filter:
              "drop-shadow(0 0 40px rgba(212,175,55,0.15)) drop-shadow(0 20px 40px rgba(0,0,0,0.4))",
          }}
        />

        {/* ================= TOJI ================= */}
        <img
          src="/toji_fushiguro.png"
          alt="Toji Fushiguro"
          draggable={false}
          className="absolute block"
          style={{
            width: "530px",
            height: "auto",
            maxWidth: "none",
            maxHeight: "none",

            // Toji position
            right: "-25%",
            bottom: "0px",

            transform: "translateX(-50%)",

            filter:
              "drop-shadow(0 0 35px rgba(212,175,55,0.12)) drop-shadow(0 20px 40px rgba(0,0,0,0.35))",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gold/60"
            style={{
              width: `${3 + (i % 3)}px`,
              height: `${3 + (i % 3)}px`,
              left: `${20 + i * 12}%`,
              bottom: `${15 + (i % 4) * 8}%`,
              animation: `float-particle ${6 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.6}s`,
              boxShadow: "0 0 12px rgba(212,175,55,0.8)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
