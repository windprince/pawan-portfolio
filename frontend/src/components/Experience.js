import React from "react";
import { Building, Calendar } from "lucide-react";

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-slate-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive journey through leading pharmaceutical and medical device companies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>
            
            {data.map((experience, index) => (
              <div key={experience.id} className="relative flex items-start gap-8 mb-12">
                {/* Timeline dot */}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-slate-800 to-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building className="text-white" size={24} />
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-slate-50 rounded-xl p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-lg text-slate-700 mb-2">{experience.company}</p>
                      <p className="text-slate-500">{experience.location}</p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 mt-2 md:mt-0">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">
                        {experience.startDate} - {experience.endDate}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;