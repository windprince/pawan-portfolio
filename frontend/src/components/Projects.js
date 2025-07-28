import React, { useState } from "react";
import { Rocket, Database, Cpu, Settings, ExternalLink } from "lucide-react";

const categoryIcons = {
  "AI Development": Cpu,
  "Business Strategy": Rocket,
  "Data Architecture": Database,
  "Clinical Systems": Settings
};

const Projects = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", ...new Set(data.map(project => project.category))];
  
  const filteredProjects = selectedCategory === "All" 
    ? data 
    : data.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-slate-900 mb-4">Key Projects & Achievements</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Significant contributions to pharmaceutical, medical device innovation, and AI development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 bg-white rounded-full p-2 shadow-sm border border-slate-200">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project) => {
            const IconComponent = categoryIcons[project.category] || Rocket;
            return (
              <div
                key={project.id}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-800 to-slate-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-slate-700 group-hover:to-slate-500 transition-all duration-300">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
                        {project.title}
                      </h3>
                      {project.status && (
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full font-medium">
                          {project.status}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 text-sm mb-2">{project.company}</p>
                    <span className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                {project.technologies && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-slate-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Impact */}
                {project.impact && (
                  <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-emerald-400">
                    <h4 className="text-sm font-medium text-slate-900 mb-1">Impact</h4>
                    <p className="text-slate-600 text-sm">{project.impact}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No projects found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;