import React, { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle } from "lucide-react";

const Contact = ({ data, personalInfo }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-slate-900 mb-4">Let's Connect</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {data.availability}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Get in Touch</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, strategic partnerships, 
                or innovative AI projects. Whether you're looking to leverage my clinical expertise 
                or explore cutting-edge AI solutions, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-emerald-600" size={24} />
                </div>
                <div>
                  <div className="font-medium text-slate-900">Email</div>
                  <a href={`mailto:${data.email}`} className="text-slate-600 hover:text-emerald-600 transition-colors">
                    {data.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <div className="font-medium text-slate-900">Phone</div>
                  <a href={`tel:${data.phone}`} className="text-slate-600 hover:text-blue-600 transition-colors">
                    {data.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <div>
                  <div className="font-medium text-slate-900">Location</div>
                  <span className="text-slate-600">{data.location}</span>
                </div>
              </div>
            </div>

            {/* Areas of Interest */}
            <div className="bg-slate-50 rounded-xl p-6">
              <h4 className="font-semibold text-slate-900 mb-4">Areas of Interest</h4>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  AI & Machine Learning Projects
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Clinical Systems Integration
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Strategic Partnerships
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  Healthcare Technology Consulting
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="text-slate-700" size={24} />
              <h3 className="text-xl font-semibold text-slate-900">Send a Message</h3>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors resize-none"
                    placeholder="Tell me about your project, partnership opportunity, or how we can collaborate..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg hover:bg-slate-800 transition-colors duration-300 flex items-center justify-center gap-2 font-medium"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-emerald-600" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">Message Sent!</h4>
                <p className="text-slate-600">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;