"use client";

import { useRef, useEffect, useState } from "react";

export function TojiModel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      targetX = (e.clientX - centerX) / rect.width;
      targetY = (e.clientY - centerY) / rect.height;
    };

    const handleScroll = () => {
      if (!img) return;
      const rect = container.getBoundingClientRect();
      const scrollProgress = 1 - rect.top / window.innerHeight;
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
      img.style.setProperty("--scroll-y", `${clampedProgress * 40}px`);
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      if (img) {
        const rotateY = currentX * 18;
        const rotateX = -currentY * 12;
        const translateX = currentX * 12;
        const translateY = currentY * 8;

        img.style.transform = `
          perspective(1200px)
          rotateY(${rotateY}deg)
          rotateX(${rotateX}deg)
          translate3d(${translateX}px, ${translateY}px, 0)
        `;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    rafId = requestAnimationFrame(animate);
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [mounted]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-start justify-center select-none pointer-events-none"
      style={{ perspective: "1200px" }}
    >
      {/* ambient glow behind Toji */}
      <div
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[70%] h-[70%] rounded-full blur-[120px] opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.4) 0%, rgba(139,92,246,0.25) 40%, transparent 70%)",
        }}
      />

      {/* the toji figure */}
      <div
        ref={imgRef}
        className="relative w-full h-full flex items-start justify-center"
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
          transform: "translateY(var(--scroll-y, 0))",
          transition: "transform 0.1s linear",
        }}
      >
        <img
          src="/toji.png"
          alt="Toji Fushiguro"
          className="w-auto h-full max-h-[85vh] object-contain object-top"
          style={{
            filter:
              "drop-shadow(0 0 40px rgba(212,175,55,0.15)) drop-shadow(0 20px 40px rgba(0,0,0,0.4))",
          }}
        />
      </div>

      {/* floating particles around Toji */}
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
