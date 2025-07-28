import React, { useState, useEffect } from "react";
import { mockData } from "../mock";
import Header from "./Header";
import Navigation from "./Navigation";
import About from "./About";
import AIJourney from "./AIJourney";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isVisible, setIsVisible] = useState({});

  // Smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(prev => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting
        }));

        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About data={mockData.about} personalInfo={mockData.personalInfo} />;
      case "ai-journey":
        return <AIJourney data={mockData.aiJourney} />;
      case "experience":
        return <Experience data={mockData.experience} />;
      case "projects":
        return <Projects data={mockData.projects} />;
      case "skills":
        return <Skills data={mockData.skills} />;
      case "education":
        return <Education data={mockData.education} />;
      case "contact":
        return <Contact data={mockData.contact} personalInfo={mockData.personalInfo} />;
      default:
        return <About data={mockData.about} personalInfo={mockData.personalInfo} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header personalInfo={mockData.personalInfo} />
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        scrollToSection={scrollToSection}
        navigation={mockData.navigation}
      />
      <main className="pt-8">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;