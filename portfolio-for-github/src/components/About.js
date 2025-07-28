import React from "react";
import { TrendingUp, Target, Lightbulb } from "lucide-react";

const About = ({ data, personalInfo }) => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-slate-900 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transforming pharmaceutical and medical device industries through innovative business intelligence and cutting-edge AI solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <div className="space-y-6 text-lg leading-relaxed text-slate-700">
              <p>{data.introduction}</p>
              <p>{data.mission}</p>
              <p>{data.currentFocus}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Healthcare Innovation</h3>
              <p className="text-slate-600">
                Leading transformation in clinical business intelligence with 25+ years of expertise in pharmaceutical and medical device industries.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Strategic Partnerships</h3>
              <p className="text-slate-600">
                Developing and managing strategic partnerships with key Life Sciences vendors, unlocking millions in revenue opportunities.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">AI Pioneer</h3>
              <p className="text-slate-600">
                Recently certified in advanced AI technologies, building custom solutions and exploring the future of healthcare through artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;