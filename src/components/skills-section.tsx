
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedElement from './animated-element';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const skills = [
  { name: 'React', level: 90, icon: '⚛️' },
  { name: 'JavaScript', level: 85, icon: '📜' },
  { name: 'TypeScript', level: 80, icon: '📘' },
  { name: 'Node.js', level: 75, icon: '🟢' },
  { name: 'CSS/Tailwind', level: 90, icon: '🎨' },
  { name: 'UI/UX Design', level: 70, icon: '🎭' },
  { name: 'GraphQL', level: 65, icon: '🔄' },
  { name: 'AWS', level: 60, icon: '☁️' },
];

const technologies = [
  'Next.js', 'Redux', 'Git', 'Docker', 'MongoDB', 'PostgreSQL', 
  'Express', 'Jest', 'REST APIs', 'Figma', 'Webpack',
  'CI/CD', 'SASS', 'SEO', 'Performance Optimization'
];

function SkillBar({ name, level, icon, delay }) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const [width, setWidth] = React.useState(0);
  
  React.useEffect(() => {
    if (isIntersecting) {
      setTimeout(() => setWidth(level), 100);
    }
  }, [isIntersecting, level]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <span className="font-medium">{name}</span>
        </div>
        <span className="text-foreground/60">{level}%</span>
      </div>
      <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-secondary/5 relative">
      {/* Background accent */}
      <div className="absolute left-0 bottom-1/4 w-72 h-72 rounded-full bg-accent/10 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <AnimatedElement variant="fade-up" className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">
            My Skills & Expertise
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Technologies I work with and areas of expertise
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedElement variant="fade-right" className="space-y-8">
            <h3 className="text-2xl font-bold">Core Skills</h3>
            <div className="space-y-2">
              {skills.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  level={skill.level} 
                  icon={skill.icon} 
                  delay={index * 100}
                />
              ))}
            </div>
          </AnimatedElement>
          
          <div className="space-y-8">
            <AnimatedElement variant="fade-left" delay={200}>
              <h3 className="text-2xl font-bold mb-6">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <AnimatedElement 
                    key={tech} 
                    variant="fade-up" 
                    delay={100 + index * 50}
                    className="px-4 py-2 rounded-full glass-morphism font-medium text-sm hover:border-primary/30 transition-colors"
                  >
                    {tech}
                  </AnimatedElement>
                ))}
              </div>
            </AnimatedElement>
            
            <AnimatedElement variant="fade-left" delay={400} className="glass-morphism rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4">My Learning Approach</h4>
              <p className="text-foreground/80 leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                My approach combines self-directed learning, building practical projects, 
                and contributing to the developer community.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
}
