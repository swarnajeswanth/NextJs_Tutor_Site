"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "VP of Learning & Development",
    company: "Infosys",
    avatar: "AS",
    color: "from-blue-500 to-indigo-600",
    quote:
      "Accredian Enterprise transformed our L&D strategy. The IIT-backed curriculum gave our engineers the credibility they needed, and the dedicated success manager made implementation seamless. We saw a 40% improvement in assessment scores within 3 months.",
    metric: "40% improvement in scores",
  },
  {
    name: "Rajesh Iyer",
    role: "CHRO",
    company: "Tech Mahindra",
    avatar: "RI",
    color: "from-violet-500 to-purple-600",
    quote:
      "We upskilled 800+ employees in data science and analytics in under a year. The live sessions with IIM faculty were a hit — employees actually looked forward to weekends! Our NPS for the program was an outstanding 72.",
    metric: "800+ employees upskilled",
  },
  {
    name: "Priya Mehta",
    role: "Head of Talent Development",
    company: "Wipro",
    avatar: "PM",
    color: "from-rose-500 to-pink-600",
    quote:
      "What sets Accredian apart is the end-to-end accountability. They didn't just deliver training — they measured impact, provided weekly analytics, and continuously refined the program. ROI was visible within the first quarter.",
    metric: "ROI visible in Q1",
  },
  {
    name: "Vikram Nair",
    role: "Director, People Operations",
    company: "HCL Technologies",
    avatar: "VN",
    color: "from-emerald-500 to-teal-600",
    quote:
      "The Product Management program for our senior managers was exceptional. XLRI's brand combined with Accredian's delivery model helped us retain 90% of participants who completed the program. Career transitions doubled.",
    metric: "90% program completion",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold uppercase tracking-widest mb-4">
            Success Stories
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Loved by L&D Leaders
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Across India
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Real results from real enterprise partners who trusted Accredian with their workforce transformation.
          </p>
        </div>

        {/* Main testimonial card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/80 border border-slate-100 p-8 sm:p-12 relative overflow-hidden">
            {/* BG accent */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-blue-50 -translate-y-20 translate-x-20" />
            <div className="absolute bottom-0 left-0 w-36 h-36 rounded-full bg-indigo-50 translate-y-16 -translate-x-16" />

            <div className="relative">
              {/* Quote icon */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-8 shadow-lg shadow-blue-500/25">
                <Quote size={20} className="text-white" />
              </div>

              {/* Quote text */}
              <blockquote
                className="text-slate-700 text-xl leading-relaxed mb-8 font-medium"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                "{t.quote}"
              </blockquote>

              {/* Metric badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-semibold mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                {t.metric}
              </div>

              {/* Author */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    style={{ fontFamily: "Sora, sans-serif" }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p
                      className="text-slate-900 font-bold text-lg"
                      style={{ fontFamily: "Sora, sans-serif" }}
                    >
                      {t.name}
                    </p>
                    <p className="text-slate-500 text-sm">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-300 transition-all"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <div className="flex gap-1.5">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`rounded-full transition-all ${
                          i === current ? "w-6 h-2 bg-blue-600" : "w-2 h-2 bg-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-300 transition-all"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mini testimonial cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setCurrent(i)}
              className={`text-left p-4 rounded-2xl border transition-all ${
                i === current
                  ? "bg-white border-blue-200 shadow-lg shadow-blue-100"
                  : "bg-white/50 border-transparent hover:border-slate-200"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-xs mb-2`}
              >
                {t.avatar}
              </div>
              <p className="text-slate-900 font-semibold text-xs" style={{ fontFamily: "Sora, sans-serif" }}>
                {t.name}
              </p>
              <p className="text-slate-400 text-xs">{t.company}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}