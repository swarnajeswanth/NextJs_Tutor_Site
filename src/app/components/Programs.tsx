"use client";
import { useState } from "react";
import { Clock, Users, Star, ArrowRight, ChevronRight } from "lucide-react";

const categories = ["All", "Data Science", "Product", "Leadership", "Analytics", "Finance"];

const programs = [
  {
    category: "Data Science",
    tag: "IIT Kanpur",
    title: "PG Program in Data Science & AI",
    duration: "12 months",
    learners: "2,400+",
    rating: 4.8,
    level: "Intermediate",
    icon: "🤖",
    color: "from-blue-600 to-indigo-700",
    outcomes: ["Python & ML mastery", "Real-world capstone projects", "IIT Kanpur certificate"],
  },
  {
    category: "Product",
    tag: "IIM Visakhapatnam",
    title: "Executive Program in Product Management",
    duration: "6 months",
    learners: "1,800+",
    rating: 4.9,
    level: "Advanced",
    icon: "📱",
    color: "from-violet-600 to-purple-700",
    outcomes: ["Product strategy frameworks", "Go-to-market playbooks", "IIM certificate"],
  },
  {
    category: "Leadership",
    tag: "XLRI",
    title: "Senior Leadership & Management Program",
    duration: "9 months",
    learners: "950+",
    rating: 4.7,
    level: "Senior",
    icon: "🎯",
    color: "from-rose-500 to-pink-700",
    outcomes: ["Leadership frameworks", "Executive presence", "XLRI certification"],
  },
  {
    category: "Analytics",
    tag: "SP Jain",
    title: "Business Analytics & Insights",
    duration: "8 months",
    learners: "1,300+",
    rating: 4.8,
    level: "Intermediate",
    icon: "📊",
    color: "from-emerald-500 to-teal-700",
    outcomes: ["Power BI & Tableau", "Statistical modelling", "SP Jain credential"],
  },
  {
    category: "Finance",
    tag: "IIM Lucknow",
    title: "Financial Management & Fintech",
    duration: "7 months",
    learners: "800+",
    rating: 4.7,
    level: "Intermediate",
    icon: "💹",
    color: "from-amber-500 to-orange-600",
    outcomes: ["Corporate finance", "Fintech innovation", "IIM Lucknow certificate"],
  },
  {
    category: "Data Science",
    tag: "IIT Guwahati",
    title: "Artificial Intelligence for Business",
    duration: "6 months",
    learners: "1,600+",
    rating: 4.9,
    level: "All levels",
    icon: "🧠",
    color: "from-cyan-500 to-blue-600",
    outcomes: ["Generative AI tools", "AI strategy for business", "IIT Guwahati cert."],
  },
];

export default function Programs() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? programs : programs.filter((p) => p.category === active);

  return (
    <section id="programs" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold uppercase tracking-widest mb-4">
            Enterprise Programs
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            World-Class Programs for
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Every Team & Role
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            From technical upskilling to executive education — choose from 50+ programs
            backed by India's top institutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p.title}
              className="card-hover group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-br ${p.color} p-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-8 translate-x-8" />
                <div className="text-4xl mb-3">{p.icon}</div>
                <div className="inline-block px-2.5 py-1 rounded-lg bg-white/20 text-white text-xs font-semibold mb-2">
                  {p.tag}
                </div>
                <h3
                  className="text-white font-bold text-lg leading-snug"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  {p.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-slate-500 text-xs mb-5">
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {p.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={12} /> {p.learners}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={12} className="text-amber-400 fill-amber-400" /> {p.rating}
                  </span>
                </div>

                {/* Level badge */}
                <span className="inline-block px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-4">
                  {p.level}
                </span>

                {/* Outcomes */}
                <ul className="space-y-1.5 mb-6">
                  {p.outcomes.map((o) => (
                    <li key={o} className="flex items-center gap-2 text-slate-600 text-sm">
                      <ChevronRight size={14} className="text-blue-500 flex-shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>

                <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-blue-200 text-blue-600 font-semibold text-sm hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                  Explore Program
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all"
          >
            View All 50+ Programs
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}