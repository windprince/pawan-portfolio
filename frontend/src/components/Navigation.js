import React from "react";
import { User, Brain, Briefcase, Folder, Code, GraduationCap, Mail } from "lucide-react";

const iconMap = {
  User,
  Brain,
  Briefcase,
  Folder,
  Code,
  GraduationCap,
  Mail
};

const Navigation = ({ activeSection, setActiveSection, scrollToSection, navigation }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex justify-center py-4">
          <div className="flex flex-wrap gap-1 md:gap-2">
            {navigation.map((item) => {
              const IconComponent = iconMap[item.icon];
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    scrollToSection(item.id);
                  }}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${activeSection === item.id 
                      ? 'bg-slate-900 text-white shadow-lg transform -translate-y-0.5' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }
                  `}
                >
                  <IconComponent size={16} />
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;