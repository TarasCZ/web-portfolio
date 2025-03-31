
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import AnimatedElement from './animated-element';
import { Github, ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Dashboard',
    description: 'A comprehensive dashboard for e-commerce stores with analytics, inventory management, and order tracking.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    links: {
      live: 'https://example.com/project1',
      github: 'https://github.com/yourusername/project1'
    }
  },
  {
    title: 'Social Media App',
    description: 'A full-featured social media application with real-time chat, post sharing, and user authentication.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io'],
    links: {
      live: 'https://example.com/project2',
      github: 'https://github.com/yourusername/project2'
    }
  },
  {
    title: 'Weather Application',
    description: 'A beautiful weather app with location detection, 7-day forecast, and animated weather visualizations.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React Native', 'GraphQL', 'Weather API', 'Animations'],
    links: {
      live: 'https://example.com/project3',
      github: 'https://github.com/yourusername/project3'
    }
  },
  {
    title: 'Task Management Tool',
    description: 'A productivity tool for teams with drag-and-drop task management, assignments, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Vue.js', 'Firebase', 'Drag & Drop', 'Authentication'],
    links: {
      live: 'https://example.com/project4',
      github: 'https://github.com/yourusername/project4'
    }
  },
];

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <AnimatedElement 
      variant={index % 2 === 0 ? 'fade-right' : 'fade-left'} 
      delay={index * 100}
      className="group"
    >
      <div 
        className="relative rounded-2xl overflow-hidden aspect-video cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={project.image} 
          alt={project.title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500",
            isHovered ? "scale-110 blur-sm" : "scale-100"
          )}
        />
        
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-90"
        )}>
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-foreground/80 mb-4 line-clamp-2">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span 
                key={tag} 
                className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div 
            className={cn(
              "flex gap-4 opacity-0 -translate-y-4 transition-all duration-300",
              isHovered ? "opacity-100 translate-y-0" : ""
            )}
          >
            <a 
              href={project.links.live} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-white/80 hover:text-primary transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
            <a 
              href={project.links.github} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-white/80 hover:text-primary transition-colors"
            >
              <Github size={16} />
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </AnimatedElement>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      {/* Background accent */}
      <div className="absolute left-1/4 top-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl -z-10"></div>
      <div className="absolute right-1/4 bottom-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <AnimatedElement variant="fade-up" className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">
            Featured Projects
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        
        <AnimatedElement variant="fade-up" className="mt-16 text-center">
          <a 
            href="https://github.com/yourusername" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition-colors"
          >
            <Code size={18} />
            <span>View More Projects</span>
          </a>
        </AnimatedElement>
      </div>
    </section>
  );
}
