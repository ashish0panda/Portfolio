import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <p className="text-primary font-display text-lg mb-4 tracking-wider uppercase">
              Developer
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-gradient glow whitespace-nowrap">Ashish Kumar Panda</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              I craft beautiful, functional web experiences with modern technologies. 
              Specializing in React, TypeScript, and full-stack development.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center animate-fade-in-delay">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
