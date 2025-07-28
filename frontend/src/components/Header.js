import React from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const Header = ({ personalInfo }) => {
  return (
    <header className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/5 to-slate-600/10 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Name and Title */}
          <h1 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">
            {personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-6 font-light">
            {personalInfo.title}
          </p>
          <p className="text-lg text-slate-400 mb-8">
            {personalInfo.subtitle}
          </p>

          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin size={16} />
              <span className="text-sm">{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Phone size={16} />
              <span className="text-sm">{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Mail size={16} />
              <span className="text-sm">{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Globe size={16} />
              <span className="text-sm">{personalInfo.languages.join(", ")}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">{personalInfo.yearsExperience}</div>
              <div className="text-sm text-slate-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">{personalInfo.projectSuccessRate}</div>
              <div className="text-sm text-slate-300">Projects On Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">{personalInfo.efficiencyImprovement}</div>
              <div className="text-sm text-slate-300">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">{personalInfo.languages.length}</div>
              <div className="text-sm text-slate-300">Languages</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1200 120" className="w-full h-auto">
          <path d="M0,0 C300,60 600,60 900,30 C1050,10 1150,20 1200,40 L1200,120 L0,120 Z" fill="rgb(248 250 252)"></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;