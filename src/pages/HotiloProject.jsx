import React from 'react';
import ProjectHero from '../components/ProjectHero';
import ProjectShowcase from '../components/ProjectShowcase';
import FeatureCard from '../components/FeatureCard';
import TechStack from '../components/TechStack';
import { hotiloData } from '../constants/hotiloData';
import NavBar from '../components/NavBar';

const HotiloProject = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Assuming you'll import your existing Header component */}
      {/* <Header /> */}
      <NavBar />
      
      <ProjectHero 
        title={hotiloData.title}
        description={hotiloData.description}
        role={hotiloData.role}
        liveUrl={hotiloData.liveUrl}
        githubUrl={hotiloData.githubUrl}
      />

      <ProjectShowcase />

      {/* Problem Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">The Problem: Overshadowed Gems</h2>
            <p className="text-lg leading-relaxed">{hotiloData.problem}</p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">The Hotilo Solution: A Unified Platform</h2>
            <p className="text-lg leading-relaxed">{hotiloData.solution}</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">Front-End Focus: Crafting the User Experience</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {hotiloData.features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-primary">Technical Implementation</h2>
            
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-4">The Stack</h3>
              <TechStack techStack={hotiloData.techStack} />
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">A Front-End Challenge: Managing Booking State</h3>
              <p className="text-lg leading-relaxed">{hotiloData.challenge}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Hotilo for Yourself</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            The best way to understand Hotilo is to experience it. The live website is fully functional, allowing you to test the search, explore property listings, and see the user flow for yourself.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href={hotiloData.liveUrl} 
              className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300 flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt mr-2"></i> Explore Live Website
            </a>
            <a 
              href={hotiloData.githubUrl} 
              className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition duration-300 flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github mr-2"></i> View Front-End Code
            </a>
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">Reflection & Value Delivered</h2>
            <p className="text-lg leading-relaxed">{hotiloData.reflection}</p>
          </div>
        </div>
      </section>

      {/* Assuming you'll import your existing Footer component */}
      {/* <Footer /> */}
    </div>
  );
};

export default HotiloProject;