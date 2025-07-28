import React, { useState } from "react";
import { Brain, Zap, Cpu, Image, Bot, Settings, Award, Rocket } from "lucide-react";

const sessionIcons = [Brain, Zap, Image, Bot, Settings, Award];

const AIJourney = ({ data }) => {
  const [selectedSession, setSelectedSession] = useState(null);

  return (
    <section id="ai-journey" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-slate-900 mb-4">AI Transformation Journey</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Current AI Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Current AI Projects</h3>
          <div className="max-w-4xl mx-auto">
            {data.currentProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-semibold text-slate-900">{project.title}</h4>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full font-medium">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outskill AI Certification */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Outskill AI Masterminds Certification</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.certifications.outskillAI.sessions.map((session, index) => {
              const IconComponent = sessionIcons[index] || Brain;
              return (
                <div 
                  key={session.session}
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedSession(selectedSession === session.session ? null : session.session)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-indigo-600">Session {session.session}</div>
                      <div className="font-semibold text-slate-900">{session.title}</div>
                    </div>
                  </div>
                  
                  {selectedSession === session.session && (
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <div className="space-y-2">
                        {session.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            <span className="text-sm text-slate-600">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* AI Technologies */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">AI Technologies & Tools</h3>
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <div className="flex flex-wrap gap-3 justify-center">
              {data.aiTechnologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-full font-medium hover:from-slate-200 hover:to-slate-300 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Education Highlight */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center border border-blue-100">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cpu className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-slate-900 mb-2">
              {data.certifications.utAustin.title}
            </h4>
            <p className="text-slate-600 mb-2">{data.certifications.utAustin.institution} • {data.certifications.utAustin.year}</p>
            <p className="text-slate-700">{data.certifications.utAustin.focus}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIJourney;