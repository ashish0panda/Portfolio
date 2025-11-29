import { Card } from "@/components/ui/card";
import {Code, Code2, Database, Frame} from "lucide-react";

const skillCategories = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Programming Languages",
    skills: ["Java", "C", "C++", "Python", "HTML", "CSS", "JavaScript","Kotlin"],
  },
  {
    icon: <Frame className="w-8 h-8" />,
    title: "Frameworks / Libraries",
    skills: ["Spring", "Spring Boot", "Android SDK", "REST", "SOAP"],
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Database & Cloud",
    skills: ["MySQL", "AWS", "Firebase Realtime Database"],
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Tools & Practices",
    skills: ["VS Code", "Android Studio", "Firebase", "Oracle Cloud (OCI)", "VBCS", "Docker", "Git"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-lg">
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
