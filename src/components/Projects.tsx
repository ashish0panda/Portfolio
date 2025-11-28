import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  {
    title: "Analytics Dashboard",
    description: "A comprehensive analytics platform with real-time data visualization, custom reports, and team collaboration features.",
    image: project1,
    tags: ["React", "TypeScript", "D3.js", "Node.js"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with advanced filtering, payment integration, and inventory management system.",
    image: project2,
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Mobile App Design",
    description: "Cross-platform mobile application with beautiful UI/UX, offline support, and seamless cloud synchronization.",
    image: project3,
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of recent work showcasing my expertise in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/80 transition-colors"
                    aria-label="View GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/80 transition-colors"
                    aria-label="View Live Project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
