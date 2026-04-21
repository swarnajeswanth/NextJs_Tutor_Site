"use client";
import { useEffect, useRef } from "react";
import {
  GraduationCap, Briefcase, BarChart3, Users, BookOpen, Shield,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Premier Institute Partnerships",
    desc: "Programs co-designed with IIT Kanpur, IIM Lucknow, IIM Visakhapatnam, XLRI & SP Jain — names your employees will be proud of.",
    color: "blue",
  },
  {
    icon: Briefcase,
    title: "Custom Learning Paths",
    desc: "We map your organization's skill gaps and build tailored learning journeys — no one-size-fits-all templates.",
    color: "indigo",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics Dashboard",
    desc: "Track learner progress, completion rates, and skill development with an intuitive enterprise dashboard.",
    color: "violet",
  },
  {
    icon: Users,
    title: "Dedicated Success Manager",
    desc: "Every enterprise client gets a dedicated account manager and L&D consultant to ensure program success.",
    color: "blue",
  },
  {
    icon: BookOpen,
    title: "100% Live Instruction",
    desc: "No pre-recorded fluff. All sessions are live, with IIT/IIM faculty and industry practitioners leading each module.",
    color: "indigo",
  },
  {
    icon: Shield,
    title: "Guaranteed ROI",
    desc: "Our enterprise programs deliver measurable outcomes — from skill assessments to post-program performance metrics.",
    color: "violet",
  },
];

const colorMap: Record<string, string> = {
  blue: "from-blue-50 to-blue-100 text-blue-600 border-blue-200",
  indigo: "from-indigo-50 to-indigo-100 text-indigo-600 border-indigo-200",
  violet: "from-violet-50 to-violet-100 text-violet-600 border-violet-200",
};

export default function WhyAccredian() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".feature-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="solutions" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-4">
            Why Accredian
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Everything Your L&D Team
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Needs to Succeed
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We don't just deliver courses — we build capability. Accredian Enterprise
            is an end-to-end workforce transformation platform.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="feature-card card-hover group bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:border-blue-200"
                style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorMap[f.color]} border flex items-center justify-center mb-5`}
                >
                  <Icon size={22} />
                </div>
                <h3
                  className="text-slate-900 font-bold text-lg mb-3"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  {f.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}