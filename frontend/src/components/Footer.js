import React from "react";
import { Heart, Code, Zap } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Column */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Pawan Sharma</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Clinical Business Intelligence Specialist & AI Innovation Leader, 
                bridging 25+ years of healthcare expertise with cutting-edge artificial intelligence.
              </p>
            </div>

            {/* Expertise Column */}
            <div>
              <h4 className="font-semibold mb-4 text-slate-200">Core Expertise</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                  Clinical Business Intelligence
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  AI & Machine Learning
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  Strategic Partnerships
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                  Data Analytics & Visualization
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-semibold mb-4 text-slate-200">Let's Connect</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <div>Keller, TX</div>
                <div>(612) 801-3144</div>
                <div>windprince@gmail.com</div>
                <div className="text-slate-400 text-xs mt-3">
                  Trilingual: English, Nepali, Hindi
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-slate-800 pt-8">
            {/* Bottom Row */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="text-sm text-slate-400">
                © {currentYear} Pawan Sharma. All rights reserved.
              </div>

              {/* Created with love */}
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span>Portfolio crafted with</span>
                <Heart className="text-red-400" size={16} fill="currentColor" />
                <span>and</span>
                <Code className="text-blue-400" size={16} />
                <span>powered by</span>
                <Zap className="text-yellow-400" size={16} />
                <span>AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;