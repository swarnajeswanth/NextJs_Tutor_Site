"use client";
import { useState } from "react";
import { CheckCircle2, Send, Building2, User, Mail, Phone, Users } from "lucide-react";

const companySizes = ["1–50", "51–200", "201–500", "501–1000", "1000+"];
const interests = [
  "Data Science & AI",
  "Product Management",
  "Leadership Training",
  "Business Analytics",
  "Finance & Fintech",
  "Custom Program",
];

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    companySize: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!form.company.trim()) e.company = "Company name required";
    if (!form.interest) e.interest = "Please select a program area";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", company: "", companySize: "", interest: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const update = (field: string, val: string) => {
    setForm((f) => ({ ...f, [field]: val }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  };

  if (status === "success") {
    return (
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-green-600" />
          </div>
          <h3
            className="text-2xl font-bold text-slate-900 mb-3"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Thank You! We'll Be In Touch Soon.
          </h3>
          <p className="text-slate-500 mb-6">
            Our enterprise consultant will reach out within 24 hours to schedule your free demo.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-50 opacity-60" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-indigo-50 opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div className="pt-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-5">
              Get Started
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Ready to Transform
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Your Workforce?
              </span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Talk to our enterprise consultant today. We'll understand your needs
              and design a learning strategy that delivers real business outcomes.
            </p>

            {/* What you get */}
            <div className="space-y-4">
              {[
                "Free 30-minute consultation call",
                "Custom learning pathway recommendation",
                "ROI estimate for your organization",
                "Sample program curriculum",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} className="text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Trust logos */}
            <div className="mt-10 pt-8 border-t border-slate-100">
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-4">
                Institutes we partner with
              </p>
              <div className="flex flex-wrap gap-3">
                {["IIT Kanpur", "IIM Lucknow", "XLRI", "SP Jain", "IIM Vizag"].map((inst) => (
                  <span
                    key={inst}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-xs font-semibold"
                    style={{ fontFamily: "Sora, sans-serif" }}
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl shadow-slate-200/60 p-8">
            <h3
              className="text-xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Request a Free Consultation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Company */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Ananya Sharma"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm outline-none transition-colors ${
                        errors.name ? "border-red-300 bg-red-50" : "border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Company *
                  </label>
                  <div className="relative">
                    <Building2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      placeholder="Your Company"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm outline-none transition-colors ${
                        errors.company ? "border-red-300 bg-red-50" : "border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                      }`}
                    />
                  </div>
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Work Email *
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="ananya@company.com"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm outline-none transition-colors ${
                      errors.email ? "border-red-300 bg-red-50" : "border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    }`}
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Phone & Company Size */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Company Size
                  </label>
                  <div className="relative">
                    <Users size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 z-10" />
                    <select
                      value={form.companySize}
                      onChange={(e) => update("companySize", e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-colors bg-white appearance-none"
                    >
                      <option value="">Select size</option>
                      {companySizes.map((s) => (
                        <option key={s} value={s}>{s} employees</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Interest */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Program Area of Interest *
                </label>
                <div className="flex flex-wrap gap-2">
                  {interests.map((int) => (
                    <button
                      key={int}
                      type="button"
                      onClick={() => update("interest", int)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                        form.interest === int
                          ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                          : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600"
                      }`}
                    >
                      {int}
                    </button>
                  ))}
                </div>
                {errors.interest && <p className="text-red-500 text-xs mt-1">{errors.interest}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Additional Requirements
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  rows={3}
                  placeholder="Tell us about your team size, specific learning goals, timelines..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed text-base"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Request Free Consultation
                  </>
                )}
              </button>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <p className="text-center text-slate-400 text-xs">
                By submitting, you agree to our{" "}
                <a href="#" className="text-blue-500 underline">Privacy Policy</a>.
                We respect your data.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}