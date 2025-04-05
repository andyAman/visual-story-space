
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const skillsData = [
  { name: "Brand Strategy", level: 95 },
  { name: "UI/UX Design", level: 90 },
  { name: "Visual Design", level: 85 },
  { name: "Design Systems", level: 80 },
  { name: "Motion Graphics", level: 75 },
  { name: "Prototyping", level: 85 }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                alt="Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-lg p-6 w-2/3">
              <p className="text-lg font-medium italic text-gray-700">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
              <p className="text-gray-500 mt-2">— Steve Jobs</p>
            </div>
          </div>
          
          {/* Content side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate designer with over 8 years of experience creating memorable digital experiences that connect brands with their audiences. 
              I specialize in creating clean, functional designs that solve real problems.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My approach combines strategic thinking with creative execution, ensuring that every design not only looks beautiful but also achieves business objectives. 
              I've worked with clients ranging from startups to Fortune 500 companies across various industries.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">Core Skills</h3>
            <div className="space-y-4 mb-8">
              {skillsData.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gray-900 h-2 rounded-full transition-all duration-1000" 
                      style={{ width: `${skill.level}%`, animationDelay: `${index * 200}ms` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
