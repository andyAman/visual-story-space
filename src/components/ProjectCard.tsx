
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  index: number;
}

const ProjectCard = ({ title, category, description, image, index }: ProjectCardProps) => {
  return (
    <Card className={`overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl bg-white group`}
          style={{ animationDelay: `${index * 150}ms` }}>
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="text-sm font-medium text-gray-500 mb-2">{category}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="flex items-center text-gray-900 font-medium transition-all hover:translate-x-1">
          View Project <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
