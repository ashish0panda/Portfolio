import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card border-border">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl font-semibold mb-6">
                  Let's work together
                </h3>
                <p className="text-muted-foreground mb-8">
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:alex@example.com" className="font-medium">
                      alex@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your message..."
                />
              </div>
              <Button className="w-full font-display">
                Send Message
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
