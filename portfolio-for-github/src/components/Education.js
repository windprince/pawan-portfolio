import React from "react";
import { Award, GraduationCap, Star, Calendar } from "lucide-react";

const Education = ({ data }) => {
  const getTypeIcon = (type) => {
    switch (type) {
      case "certification":
        return Award;
      case "program":
        return Star;
      default:
        return GraduationCap;
    }
  };

  const getTypeColor = (type, highlight) => {
    if (highlight) return "from-purple-500 to-pink-500";
    switch (type) {
      case "certification":
        return "from-emerald-500 to-teal-500";
      case "program":
        return "from-blue-500 to-indigo-500";
      default:
        return "from-slate-600 to-slate-800";
    }
  };

  return (
    <section id="education" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-slate-900 mb-4">Education & Certifications</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {data.map((item) => {
            const IconComponent = getTypeIcon(item.type);
            const colorClass = getTypeColor(item.type, item.highlight);
            
            return (
              <div
                key={item.id}
                className={`
                  bg-white rounded-xl p-8 shadow-sm border transition-all duration-300 hover:shadow-lg
                  ${item.highlight ? 'border-purple-200 ring-2 ring-purple-100' : 'border-slate-200'}
                `}
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${colorClass} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="text-white" size={28} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-4 text-slate-600">
                          <span className="font-medium">{item.institution}</span>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{item.year}</span>
                          </div>
                        </div>
                      </div>
                      
                      {item.highlight && (
                        <div className="mt-2 lg:mt-0">
                          <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm rounded-full font-medium">
                            <Star size={14} className="mr-1" />
                            Recent Achievement
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Special highlight for AI certification */}
                    {item.title.includes("Outskill AI") && (
                      <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-slate-900 mb-2">Key Learning Areas</h4>
                        <div className="grid md:grid-cols-2 gap-2 text-sm text-slate-700">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            Generative AI & Neural Networks
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            Custom GPT Development
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            AI Automation & Workflows
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            Image/Video AI Manipulation
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Journey Summary */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-900 text-center mb-6">Academic Journey</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <span className="font-medium text-slate-700">Latest AI Certification</span>
                <span className="text-purple-600 font-semibold">2024</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <span className="font-medium text-slate-700">Data Science Program</span>
                <span className="text-blue-600 font-semibold">2024</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <span className="font-medium text-slate-700">Master's Degree</span>
                <span className="text-emerald-600 font-semibold">2003</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <span className="font-medium text-slate-700">Bachelor's Degree</span>
                <span className="text-slate-600 font-semibold">1997</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;