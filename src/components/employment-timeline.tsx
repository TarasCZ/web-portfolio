
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import AnimatedElement from './animated-element';

interface Employment {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const employments: Employment[] = [
  {
    title: 'Senior Front-end Developer',
    company: 'TechVision Inc.',
    period: '2021 - Present',
    description: 'Led front-end development for enterprise SaaS applications, improving performance by 35%. Mentored junior developers and implemented CI/CD pipelines.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'Tailwind CSS']
  },
  {
    title: 'Full-stack Developer',
    company: 'Digital Innovations',
    period: '2018 - 2021',
    description: 'Developed and maintained multiple client websites and applications. Implemented responsive designs and improved user experiences across platforms.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'AWS']
  },
  {
    title: 'Web Developer',
    company: 'Creative Solutions',
    period: '2016 - 2018',
    description: 'Created interactive web experiences for marketing campaigns. Collaborated with design team to implement pixel-perfect interfaces.',
    technologies: ['JavaScript', 'SCSS', 'PHP', 'WordPress']
  }
];

export default function EmploymentTimeline() {
  return (
    <section id="employment" className="py-20 relative">
      {/* Background accent */}
      <div className="absolute left-0 top-1/3 w-64 h-64 rounded-full bg-accent/10 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <AnimatedElement variant="fade-up" className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">
            Employment History
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            My professional journey and career experience
          </p>
        </AnimatedElement>
        
        <div className="relative max-w-4xl mx-auto mt-16">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>
          
          {employments.map((job, index) => (
            <AnimatedElement 
              key={index} 
              variant={index % 2 === 0 ? "fade-right" : "fade-left"}
              delay={index * 150}
              className="mb-16 relative"
            >
              {/* Timeline dot */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-4 h-4 rounded-full bg-primary ${index !== 0 ? 'top-0' : '-top-6'}`}></div>
              
              <Card className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} glass-morphism`}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-xl">{job.title}</h3>
                      <p className="text-primary/90">{job.company}</p>
                    </div>
                    <Badge variant="secondary" className="bg-primary/20 hover:bg-primary/30">
                      {job.period}
                    </Badge>
                  </div>
                  <p className="mb-4 text-foreground/80">{job.description}</p>
                  <Separator className="my-3" />
                  <div className="flex flex-wrap gap-2 mt-3">
                    {job.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="bg-background/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
