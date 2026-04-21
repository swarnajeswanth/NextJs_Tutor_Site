"use client";

const stats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "10,000+", label: "Employees Trained" },
  { value: "50+", label: "Programs Available" },
  { value: "95%", label: "Satisfaction Rate" },
  { value: "60%", label: "Avg. Salary Hike" },
  { value: "15+", label: "IIT & IIM Partners" },
  { value: "5 Years", label: "Industry Experience" },
  { value: "100%", label: "Live Sessions" },
];

const logos = [
  "Infosys", "TCS", "Wipro", "HCL", "Tech Mahindra",
  "Cognizant", "Capgemini", "Accenture", "IBM", "Microsoft",
];

export default function StatsBar() {
  return (
    <section className="bg-white py-16 overflow-hidden">
      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-500 text-sm uppercase tracking-widest font-medium mb-10">
          Trusted by India's leading enterprises
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 mb-16">
          {stats.slice(0, 4).map((s) => (
            <div
              key={s.label}
              className="text-center group"
            >
              <div
                className="text-3xl sm:text-4xl font-bold text-blue-700 mb-1 group-hover:scale-105 transition-transform"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                {s.value}
              </div>
              <div className="text-slate-500 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Logo Ticker */}
      <div className="border-y border-slate-100 bg-slate-50 py-5 overflow-hidden">
        <div className="flex">
          <div className="ticker-content gap-16 items-center">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo}-${i}`}
                className="flex-shrink-0 flex items-center justify-center px-8"
              >
                <span
                  className="text-slate-400 font-semibold text-sm tracking-wider uppercase whitespace-nowrap"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}