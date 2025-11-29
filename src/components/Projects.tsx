import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import MTTS from "@/assets/MTTS.png";
import prodify from "@/assets/Prodify.png";
import compressor from "@/assets/compressor.png";
import DSA from "@/assets/DSA.png"
import quiz from  "@/assets/quiz.jpg"

const projects = [
  {
    title: "Live BPM From Camera",
    description: "This project implements a real-time heart rate (BPM) detection system that analyzes a live video feed from a webcam. It uses a sophisticated deep learning model to detect subtle photoplethysmography (PPG) signals from a person's face and translates them into an accurate BPM reading.",
    image: MTTS,
    tags: ["Python", "HTML", "MTTS-CAN", "rPPG","AI","Deep Learning"],
    github: "https://github.com/ashish0panda/MTTS-CAN-Live",
    live: " https://huggingface.co/spaces/ashishSitu/MTTS-CAN",
  },
  {
    title: "Prodify - Android Productivity App",
    description: "Prodify is a modern Android application built with Jetpack Compose that serves as a foundation for a productivity and tracking tool. It features a complete user authentication system using Firebase, supporting both traditional email/password and modern Google Sign-In methods.",
    image: prodify,
    tags: ["Kotlin", "XML", "Firebase", "Andriod"],
    github: "https://github.com/Dangling-Pointers-PGSL/Prodify",
    live: "https://drive.google.com/drive/folders/1GQ7I6jO51Y7EftrrF8_9qpsqqaoFSlf5?usp=sharing",
  },
  {
    title: "File Compressor",
    description: "A small full-stack project that lets users upload one or more files from a browser, compresses each file server-side using a native C++ compressor binary, and returns a single ZIP containing the compressed outputs.",
    image: compressor,
    tags: ["HTML","CSS", "Javascript", "Huffman"],
    github: "https://github.com/ashish0panda/Web-based-file-compressor",
    live: "https://file-compressor-e43136493fba.herokuapp.com/",
  },
    {
        title: "DSA Visualizer",
        description: "A web-based Data Structures & Algorithms Visualizer that helps learners see how algorithms work in real-time.\n" +
            "It covers Sorting, Searching, Graph Traversal, and Recursion/Backtracking with interactive animations, making it easier to understand step-by-step execution.",
        image: DSA,
        tags: ["HTML","CSS", "Javascript", "DSA"],
        github: "https://github.com/ashish0panda/DSA-Visualizer",
        live: "https://ashish-dsa.netlify.app/",
    },
    {
        title: "Quiz Application",
        description: "Quiz Application is an engaging Android app where users can play quizzes from various categories and earn points.\n" +
            "It provides a fun and interactive way to test your knowledge, track your scores, and compete with others on the leaderboard.\n" +
            "You can register, log in, play quizzes, share your results, and manage your profile — all in one place!",
        image: quiz,
        tags: ["Java", "XML", "Firebase", "Andriod"],
        github: "https://github.com/ashish0panda/QuizApp",
        live: "https://drive.google.com/file/d/1STMXM4BTywkSX66eOc-O2wU0rW12qR-m/view?usp=sharing",
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
            A selection of recent work showcasing my expertise in development
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
