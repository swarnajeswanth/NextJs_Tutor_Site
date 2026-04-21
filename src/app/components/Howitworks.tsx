"use client";
import { Search, LayoutList, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Skills Assessment",
    desc: "We conduct a thorough audit of your workforce's current skill sets, business goals, and learning gaps through surveys and stakeholder interviews.",
    color: "blue",
  },
  {
    step: "02",
    icon: LayoutList,
    title: "Custom Curriculum Design",
    desc: "Our L&D experts and institute faculty co-design a tailored curriculum mapped to your business objectives and industry trends.",
    color: "indigo",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Program Launch & Delivery",
    desc: "Live cohort-based sessions delivered by top faculty. Your employees get access to the LMS, recordings, assignments, and peer community.",
    color: "violet",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Measure & Optimize",
    desc: "Real-time analytics, post-program assessments, and ROI reports help you track and demonstrate the business impact of learning.",
    color: "purple",
  },
];

const colorStyles: Record<string, { bg: string; text: string; border: string; line: string }> = {
  blue: { bg: "bg-blue-600", text: "text-blue-600", border: "border-blue-200", line: "bg-blue-200" },
  indigo: { bg: "bg-indigo-600", text: "text-indigo-600", border: "border-indigo-200", line: "bg-indigo-200" },
  violet: { bg: "bg-violet-600", text: "text-violet-600", border: "border-violet-200", line: "bg-violet-200" },
  purple: { bg: "bg-purple-600", text: "text-purple-600", border: "border-purple-200", line: "bg-purple-200" },
};

export default function HowItWorks() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0F172A 0%, #0E3A8C 100%)" }}
    >
      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-4 border border-white/10">
            Our Process
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            How Accredian Enterprise
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
              Works
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            A proven 4-step model that transforms your learning & development
            investment into real business outcomes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const style = colorStyles[s.color];
            return (
              <div
                key={s.step}
                className="relative group"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent z-10 -translate-x-6" />
                )}

                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 h-full hover:bg-white/10 transition-all hover:border-white/20 hover:-translate-y-2 duration-300">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-5xl font-black text-white/10"
                      style={{ fontFamily: "Sora, sans-serif" }}
                    >
                      {s.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                      <Icon size={22} className="text-blue-300" />
                    </div>
                  </div>

                  <h3
                    className="text-white font-bold text-lg mb-3"
                    style={{ fontFamily: "Sora, sans-serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl shadow-xl hover:shadow-white/20 hover:scale-105 transition-all text-base"
            >
              Start Your Journey →
            </a>
            <p className="text-white/50 text-sm">No commitment required · Free consultation</p>
          </div>
        </div>
      </div>
    </section>
  );
}