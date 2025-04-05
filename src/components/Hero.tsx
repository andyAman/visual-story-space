
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f0f0f0,transparent)] opacity-60"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 leading-tight mb-6">
            Creating Experiences Through Design
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
            I design digital experiences that connect brands with their users.
            My work focuses on creating memorable, intuitive, and beautiful designs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToWork} 
              className="bg-gray-900 hover:bg-gray-800 text-lg flex items-center"
              size="lg"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
              variant="outline" 
              className="border-gray-300 hover:bg-gray-100 text-gray-800 text-lg"
              size="lg"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
