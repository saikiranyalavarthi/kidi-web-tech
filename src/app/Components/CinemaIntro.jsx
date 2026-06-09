"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// --- Smoke particle system ---
class Particle {
  constructor(w, h, born = false) {
    this.canvas_w = w;
    this.canvas_h = h;
    this.reset(born);
  }
  reset(born) {
    const { canvas_w: w, canvas_h: h } = this;
    this.x = w * 0.3 + Math.random() * w * 0.4;
    this.y = born ? h * 0.4 + Math.random() * h * 0.4 : h + 10;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = -(0.2 + Math.random() * 0.5);
    this.r = 30 + Math.random() * 60;
    this.alpha = 0;
    this.maxAlpha = 0.04 + Math.random() * 0.06;
    this.life = 0;
    this.maxLife = 180 + Math.random() * 140;
  }
  update() {
    this.life++;
    this.x += this.vx;
    this.y += this.vy;
    this.vx += (Math.random() - 0.5) * 0.04;
    this.r += 0.12;
    const p = this.life / this.maxLife;
    this.alpha =
      p < 0.3
        ? this.maxAlpha * (p / 0.3)
        : this.maxAlpha * (1 - (p - 0.3) / 0.7);
    if (this.life >= this.maxLife) this.reset(false);
  }
  draw(ctx) {
    const g = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.r,
    );
    g.addColorStop(0, `rgba(200,190,170,${this.alpha})`);
    g.addColorStop(1, `rgba(200,190,170,0)`);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }
}

// --- Velvet curtain SVG (left) ---
function LeftCurtainSVG() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 300 600"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="vL" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a0000" />
          <stop offset="12%" stopColor="#6b0000" />
          <stop offset="24%" stopColor="#3d0000" />
          <stop offset="36%" stopColor="#8b0000" />
          <stop offset="48%" stopColor="#5b0000" />
          <stop offset="60%" stopColor="#7a0000" />
          <stop offset="72%" stopColor="#4a0000" />
          <stop offset="84%" stopColor="#6d0000" />
          <stop offset="100%" stopColor="#2d0000" />
        </linearGradient>
        <linearGradient id="shadeL" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.55)" />
          <stop offset="40%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.18)" />
        </linearGradient>
        <linearGradient id="goldL" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#b8860b" />
          <stop offset="50%" stopColor="#ffd700" />
          <stop offset="100%" stopColor="#8b6914" />
        </linearGradient>
      </defs>
      <rect width="300" height="600" fill="url(#vL)" />
      {/* fold light bands */}
      {[
        [0, 22, 0.04],
        [30, 12, -0.25],
        [55, 18, 0.05],
        [80, 10, -0.3],
        [102, 20, 0.06],
        [130, 8, -0.28],
        [150, 18, 0.04],
        [175, 10, -0.22],
        [198, 16, 0.05],
        [222, 8, -0.26],
        [242, 20, 0.05],
        [268, 12, -0.2],
      ].map(([x, w, a], i) => (
        <rect
          key={i}
          x={x}
          width={w}
          height="600"
          fill={a > 0 ? `rgba(255,255,255,${a})` : `rgba(0,0,0,${-a})`}
        />
      ))}
      {/* wavy fold contours */}
      {[
        "M28,0 C20,100 36,200 24,300 C14,400 32,500 26,600",
        "M78,0 C70,100 88,200 76,300 C66,400 82,500 74,600",
        "M128,0 C120,100 136,200 124,300 C114,400 130,500 122,600",
        "M178,0 C170,100 186,200 174,300 C164,400 180,500 172,600",
        "M228,0 C220,100 236,200 224,300 C214,400 230,500 222,600",
      ].map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="rgba(0,0,0,0.28)"
          strokeWidth={3 - i * 0.3}
          fill="none"
        />
      ))}
      {/* warm highlights */}
      {[
        "M50,0 C44,100 52,200 46,300 C40,400 50,500 44,600",
        "M100,0 C94,100 102,200 96,300 C90,400 100,500 94,600",
        "M152,0 C146,100 154,200 148,300 C142,400 152,500 146,600",
      ].map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="rgba(180,80,80,0.16)"
          strokeWidth={1.5 - i * 0.2}
          fill="none"
        />
      ))}
      <rect width="300" height="600" fill="url(#shadeL)" />
      {/* gold fringe */}
      <rect y="578" width="300" height="22" fill="url(#goldL)" opacity="0.9" />
    </svg>
  );
}

// --- Velvet curtain SVG (right) ---
function RightCurtainSVG() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 300 600"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="vR" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2d0000" />
          <stop offset="14%" stopColor="#6d0000" />
          <stop offset="28%" stopColor="#4a0000" />
          <stop offset="42%" stopColor="#7a0000" />
          <stop offset="56%" stopColor="#5b0000" />
          <stop offset="70%" stopColor="#8b0000" />
          <stop offset="84%" stopColor="#3d0000" />
          <stop offset="100%" stopColor="#1a0000" />
        </linearGradient>
        <linearGradient id="shadeR" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.18)" />
          <stop offset="60%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.55)" />
        </linearGradient>
        <linearGradient id="goldR" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#b8860b" />
          <stop offset="50%" stopColor="#ffd700" />
          <stop offset="100%" stopColor="#8b6914" />
        </linearGradient>
      </defs>
      <rect width="300" height="600" fill="url(#vR)" />
      {[
        [0, 12, -0.2],
        [22, 20, 0.05],
        [50, 10, -0.26],
        [70, 16, 0.05],
        [98, 8, -0.22],
        [118, 18, 0.04],
        [148, 10, -0.28],
        [170, 20, 0.06],
        [200, 12, -0.25],
        [222, 18, 0.05],
        [248, 8, -0.3],
        [268, 22, 0.04],
      ].map(([x, w, a], i) => (
        <rect
          key={i}
          x={x}
          width={w}
          height="600"
          fill={a > 0 ? `rgba(255,255,255,${a})` : `rgba(0,0,0,${-a})`}
        />
      ))}
      {[
        "M72,0 C78,100 64,200 76,300 C86,400 68,500 74,600",
        "M122,0 C128,100 114,200 126,300 C136,400 118,500 124,600",
        "M172,0 C178,100 164,200 176,300 C186,400 168,500 174,600",
        "M222,0 C228,100 214,200 226,300 C236,400 218,500 224,600",
        "M272,0 C278,100 264,200 276,300 C286,400 268,500 274,600",
      ].map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="rgba(0,0,0,0.28)"
          strokeWidth={3 - i * 0.3}
          fill="none"
        />
      ))}
      {[
        "M50,0 C56,100 42,200 54,300 C64,400 46,500 52,600",
        "M100,0 C106,100 92,200 104,300 C114,400 96,500 102,600",
        "M152,0 C158,100 144,200 156,300 C166,400 148,500 154,600",
      ].map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="rgba(180,80,80,0.16)"
          strokeWidth={1.5 - i * 0.2}
          fill="none"
        />
      ))}
      <rect width="300" height="600" fill="url(#shadeR)" />
      <rect y="578" width="300" height="22" fill="url(#goldR)" opacity="0.9" />
    </svg>
  );
}

export default function CinemaIntro() {
  const [showIntro, setShowIntro] = useState(true);
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const particlesRef = useRef([]);

  // Logo reveal
  useEffect(() => {
    const t = setTimeout(() => setLogoVisible(true), 400);
    return () => clearTimeout(t);
  }, []);

  // Curtain open
  useEffect(() => {
    const t = setTimeout(() => setCurtainsOpen(true), 1800);
    return () => clearTimeout(t);
  }, []);

  // Dismiss overlay
  useEffect(() => {
    const t = setTimeout(() => setShowIntro(false), 4500);
    return () => clearTimeout(t);
  }, []);

  // Smoke canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
    const ctx = canvas.getContext("2d");
    particlesRef.current = Array.from(
      { length: 22 },
      () => new Particle(canvas.width, canvas.height, true),
    );
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      rafRef.current = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const curtainTransition = {
    delay: 0,
    duration: 2,
    ease: [0.76, 0, 0.24, 1],
  };

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[99999] overflow-hidden bg-black"
        >
          {/* Volumetric spotlight */}
          <div
            className="absolute inset-0 pointer-events-none z-[2]"
            style={{
              background:
                "radial-gradient(ellipse 700px 700px at 50% -60px, rgba(255,230,120,0.36) 0%, rgba(255,200,60,0.12) 32%, transparent 65%)",
              animation: "spotPulse 4s ease-in-out infinite",
            }}
          />
          <style>{`
            @keyframes spotPulse { 0%,100%{opacity:1} 50%{opacity:0.78} }
          `}</style>

          {/* Smoke canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 z-[3] pointer-events-none"
          />

          {/* Left Curtain */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: curtainsOpen ? "-110%" : 0 }}
            transition={curtainTransition}
            className="absolute left-0 top-0 h-full w-1/2 z-[10]"
          >
            <LeftCurtainSVG />
          </motion.div>

          {/* Right Curtain */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: curtainsOpen ? "110%" : 0 }}
            transition={curtainTransition}
            className="absolute right-0 top-0 h-full w-1/2 z-[10]"
          >
            <RightCurtainSVG />
          </motion.div>

          {/* Pelmet (top bar with scallops) */}
          <div
            className="absolute top-0 left-0 w-full z-[11]"
            style={{
              height: 44,
              background:
                "linear-gradient(180deg, #2a0000 0%, #5a0000 60%, #3d0000 100%)",
              borderBottom: "2px solid rgba(180,120,30,0.5)",
              boxShadow: "0 4px 18px rgba(0,0,0,0.7)",
            }}
          />

          {/* Stage floor glow */}
          <div
            className="absolute bottom-0 left-0 w-full h-28 z-[2]"
            style={{
              background:
                "linear-gradient(to top, rgba(200,150,30,0.2), transparent)",
            }}
          />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={logoVisible ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute inset-0 z-[20] flex flex-col items-center justify-center text-center pointer-events-none"
          >
            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2.4rem, 7vw, 5rem)",
                fontWeight: 900,
                letterSpacing: "0.12em",
                color: "#fff",
                textShadow:
                  "0 0 40px rgba(255,220,80,0.9), 0 0 80px rgba(255,180,0,0.5), 0 2px 8px #000",
              }}
            >
              <Image
  src="/kidiwebtech-logo.png
"
  alt="KidiWebTech"
  width={400}
  height={120}
  priority
  className="drop-shadow-[0_0_40px_rgba(255,220,80,0.8)]"
/>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={logoVisible ? { width: 260 } : {}}
              transition={{ duration: 1.2, delay: 0.4 }}
              style={{
                height: 1,
                background: "rgba(255,210,80,0.5)",
                margin: "12px auto 0",
              }}
            />
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={logoVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              style={{
                marginTop: 10,
                fontFamily: "Georgia, serif",
                fontSize: "1rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,220,150,0.82)",
                textShadow: "0 0 16px rgba(255,200,60,0.5)",
              }}
            >
             Website Design, Web Development & SEO Services 
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
