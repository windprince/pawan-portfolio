import React, { useState } from "react";
import { Brain, Activity, Database, Code, Cloud, Target } from "lucide-react";

const skillCategories = {
  aiAndML: { icon: Brain, title: "AI & Machine Learning", color: "from-purple-500 to-pink-500" },
  clinicalSystems: { icon: Activity, title: "Clinical Systems", color: "from-blue-500 to-cyan-500" },
  businessIntelligence: { icon: Database, title: "Business Intelligence", color: "from-emerald-500 to-teal-500" },
  programming: { icon: Code, title: "Programming & Development", color: "from-orange-500 to-red-500" },
  cloudAndModern: { icon: Cloud, title: "Cloud & Modern Tech", color: "from-indigo-500 to-purple-500" },
  coreCompetencies: { icon: Target, title: "Core Competencies", color: "from-slate-600 to-slate-800" }
};

const Skills = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("aiAndML");

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-slate-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive expertise across AI, clinical systems, business intelligence, and strategic partnerships
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Category Selection */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`
                    relative p-6 rounded-xl text-left transition-all duration-300 border-2
                    ${selectedCategory === key
                      ? 'border-slate-300 bg-slate-50 shadow-lg transform -translate-y-1'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }
                  `}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{category.title}</h3>
                  <p className="text-sm text-slate-600">
                    {data[key]?.length || 0} skills
                  </p>
                </button>
              );
            })}
          </div>

          {/* Selected Category Skills */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-16 h-16 bg-gradient-to-r ${skillCategories[selectedCategory].color} rounded-xl flex items-center justify-center`}>
                {React.createElement(skillCategories[selectedCategory].icon, { className: "text-white", size: 28 })}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">{skillCategories[selectedCategory].title}</h3>
                <p className="text-slate-600">Specialized expertise and tools</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {data[selectedCategory]?.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all duration-300"
                >
                  <span className="text-slate-700 font-medium">{skill}</span>
                </div>
              )) || (
                <div className="col-span-full text-center py-8">
                  <p className="text-slate-500">No skills data available for this category.</p>
                </div>
              )}
            </div>
          </div>

          {/* AI Skills Highlight */}
          {selectedCategory === "aiAndML" && (
            <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="text-center mb-6">
                <h4 className="text-xl font-semibold text-slate-900 mb-2">Latest AI Capabilities</h4>
                <p className="text-slate-600">Recently acquired through intensive certification and hands-on practice</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "Custom GPT Development",
                  "Agentic Workflows",
                  "Diffusion Models",
                  "AI Automation"
                ].map((capability, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center border border-purple-200">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Brain className="text-white" size={16} />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;