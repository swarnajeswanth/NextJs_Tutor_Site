import {  Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Linkedin = FaLinkedin;
const Twitter = FaSquareXTwitter;
const Youtube = FaYoutube;
const footerLinks = {
  Solutions: ["Custom Programs", "Leadership Development", "Data Science Training", "Analytics Training", "Certification Programs"],
  Company: ["About Accredian", "Our Faculty", "Partner Institutes", "Careers", "Press & Media"],
  Resources: ["Blog & Insights", "Case Studies", "Webinars", "Learning Reports", "ROI Calculator"],
  Support: ["Contact Sales", "Help Center", "Student Portal", "Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-2xl sm:text-3xl font-bold text-white mb-2"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Start Your Enterprise Journey Today
            </h3>
            <p className="text-blue-100">Join 500+ companies already upskilling with Accredian.</p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-7 py-4 bg-white text-blue-700 font-bold rounded-2xl shadow-xl hover:scale-105 transition-all whitespace-nowrap"
          >
            Get Free Demo →
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm" style={{ fontFamily: "Sora, sans-serif" }}>A</span>
              </div>
              <span className="text-white font-bold text-lg" style={{ fontFamily: "Sora, sans-serif" }}>
                Accredian
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              India's leading enterprise learning & development platform. Powered by IITs, IIMs, and XLRI.
            </p>
            <div className="space-y-2 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-blue-400 flex-shrink-0" />
                enterprise@accredian.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-blue-400 flex-shrink-0" />
                +91 88888 88888
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                Bengaluru & Mumbai, India
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-white font-semibold text-sm mb-5 uppercase tracking-wider"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 text-sm hover:text-white transition-colors hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Accredian_Clone. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <a key={link} href="#" className="text-slate-500 text-sm hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}