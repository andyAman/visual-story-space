
import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "Brand Identity Refresh",
    category: "Branding",
    description: "Complete rebrand for a tech startup that improved customer engagement by 40%.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  },
  {
    title: "E-commerce Website Redesign",
    category: "UI/UX",
    description: "Redesigned user flows and interface that boosted conversion rates by 25%.",
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  },
  {
    title: "Mobile App Interface",
    category: "UI Design",
    description: "Intuitive mobile app design for a fitness tracking platform with 50k+ active users.",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  },
  {
    title: "Product Packaging",
    category: "Packaging Design",
    description: "Sustainable packaging redesign that increased shelf presence and consumer appeal.",
    image: "https://images.unsplash.com/photo-1585435421671-0c16764628ce?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  },
  {
    title: "Marketing Campaign",
    category: "Graphic Design",
    description: "Cohesive visual identity for a multi-channel marketing campaign with viral success.",
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  },
  {
    title: "Interactive Installation",
    category: "Experiential Design",
    description: "Award-winning interactive exhibition that engaged over 15,000 visitors.",
    image: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  }
];

const Projects = () => {
  return (
    <section id="work" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Selected Work</h2>
          <p className="text-xl text-gray-600">
            A curated collection of my most recent design projects, showcasing my creative process and technical skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <ProjectCard 
                title={project.title}
                category={project.category}
                description={project.description}
                image={project.image}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
