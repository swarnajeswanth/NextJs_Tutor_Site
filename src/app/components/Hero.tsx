"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const bullets = [
  "Programs from IITs, IIMs & XLRI",
  "100% live, instructor-led sessions",
  "Dedicated career & placement support",
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0F172A 0%, #0E3A8C 50%, #1A56DB 100%)",
      }}
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, #4338CA 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, #1A56DB 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, #60A5FA 0%, transparent 60%)",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div
        ref={heroRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Column */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Trusted by 500+ Companies Across India
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Upskill Your{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                Workforce
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M0 6 Q50 0 100 4 Q150 8 200 2"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            with India's Best
            <br />
            <span className="text-blue-300">Ed-Tech Platform</span>
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
            Partner with Accredian Enterprise to deliver world-class learning
            experiences. Programs co-created with IIT, IIM, and XLRI faculty
            — built for measurable business outcomes.
          </p>

          {/* Bullet points */}
          <ul className="space-y-3 mb-10">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-white/85 text-sm">
                <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-blue-700 font-bold rounded-2xl shadow-2xl shadow-black/20 hover:shadow-blue-500/30 hover:scale-105 transition-all text-base"
            >
              Schedule a Free Demo
              <ArrowRight size={18} />
            </a>
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 border border-white/25 text-white font-semibold rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all text-base"
            >
              <Play size={16} className="fill-white" />
              Explore Programs
            </a>
          </div>
        </div>

        {/* Right Column — Dashboard Card */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Floating card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
                    Learning Dashboard
                  </p>
                  <h3 className="text-white font-bold text-lg" style={{ fontFamily: "Sora, sans-serif" }}>
                    Enterprise Overview
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Q4</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Active Learners", value: "1,240", change: "+12%", up: true },
                  { label: "Completion Rate", value: "87%", change: "+5%", up: true },
                  { label: "Avg. Score", value: "92/100", change: "+8%", up: true },
                  { label: "Courses Running", value: "18", change: "2 new", up: true },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white/5 border border-white/10 rounded-2xl p-4"
                  >
                    <p className="text-white/50 text-xs mb-1">{s.label}</p>
                    <p className="text-white text-xl font-bold" style={{ fontFamily: "Sora, sans-serif" }}>
                      {s.value}
                    </p>
                    <p className="text-emerald-400 text-xs font-medium mt-1">
                      ↑ {s.change}
                    </p>
                  </div>
                ))}
              </div>

              {/* Progress bars */}
              <div className="space-y-3">
                <p className="text-white/50 text-xs uppercase tracking-widest">
                  Top Programs
                </p>
                {[
                  { name: "Data Science & AI", pct: 78 },
                  { name: "Product Management", pct: 65 },
                  { name: "Business Analytics", pct: 54 },
                ].map((p) => (
                  <div key={p.name}>
                    <div className="flex justify-between text-xs text-white/70 mb-1">
                      <span>{p.name}</span>
                      <span>{p.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-400 to-indigo-400"
                        style={{ width: `${p.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating achievement badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xl">
                🏆
              </div>
              <div>
                <p className="text-slate-900 font-bold text-sm" style={{ fontFamily: "Sora, sans-serif" }}>
                  #1 Enterprise L&D
                </p>
                <p className="text-slate-500 text-xs">India 2024</p>
              </div>
            </div>

            {/* Floating users badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-4">
              <p className="text-white font-bold text-2xl" style={{ fontFamily: "Sora, sans-serif" }}>
                10K+
              </p>
              <p className="text-blue-200 text-xs">Learners Trained</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 25C672 30 768 30 864 25C960 20 1056 10 1152 10C1248 10 1344 20 1392 25L1440 30V60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}