import { Card } from "@/components/ui/card";
import { Briefcase, BrainCircuit, BookOpen, Star } from "lucide-react";

const Experience = () => {
  // Placeholder data - you can replace this with your actual data
  const experiences = [
    {
      title: "Associate System Engineer",
      company: "Tata Consultancy Services",
      date: "Sep 2022 – Aug 2024",
      description: "Managed firewall rules, fixed complex network issues, and built REST/SOAP APIs with Oracle Cloud to connect systems securely. Worked with other teams to improve security and performance.",
    },
    {
      title: "Android Developer Intern",
      company: "Appstone Pvt Ltd",
      date: "June 2021 – Sep 2021",
      description: "Sped up an educational Android app by 35% by optimizing code and database queries. Built key features like login and video streaming, which boosted user engagement by 22%. Made the app more stable by fixing bugs and reducing crashes.",
    },
  ];

  const competitiveProfiles = [
    { name: "LeetCode", url: "https://leetcode.com/u/ashishsitu802/", username: "ashishsitu802" },
    { name: "Codeforces", url: "https://codeforces.com/profile/ashish802", username: "ashish802" },
    { name: "CodeChef", url: "https://www.codechef.com/users/ashish_situ", username: "ashish_situ" },
    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/profile/ashishpanda802?tab=activity", username: "ashishpanda802" },
  ];

  const courses = [
    "Data Structures & Algorithms",
    "PG Software Lab",
    "Artificial Intelligence",
    "Computer System",
    "Mathematics for Computer Science",
  ];
  
  const activities = [
    {
      role: "CDPC Member",
      organization: "IIT Ropar",
      description: "As a member of the Career Development and Placement Cell, I assisted in coordinating placement activities, liaised with recruiting companies, and supported students in their career preparation and interview processes."
    },
    {
      role: "Class Representative, MTech AI",
      organization: "IIT Ropar",
      description: "Served as the primary liaison between the MTech AI student body and faculty. Advocated for student interests, communicated academic feedback, and facilitated the resolution of course-related concerns to ensure a smooth and productive learning environment."
    },
    {
      role: "Founding Member",
      organization: "ZigBee Club, Odisha University of Technology and Research",
      description: "Co-founded the university's flagship technical club, ZigBee. Organized diverse workshops and coding competitions, led student-driven projects across various technology domains, and fostered a vibrant community of student innovators and problem-solvers."
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient">Credentials</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A snapshot of my professional journey, technical skills, and academic background.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Column 1: Activities */}
          <div className="space-y-12">
            <div>
              <h3 className="font-display text-3xl font-semibold mb-6 flex items-center gap-3"><Star /> Activities & Responsibilities</h3>
               <div className="space-y-6">
                {activities.map((act, index) => (
                  <Card key={index} className="p-6 bg-card border-border transition-all hover:shadow-lg">
                    <h4 className="font-semibold text-xl">{act.role}</h4>
                    <p className="text-primary font-medium">{act.organization}</p>
                    <p className="text-muted-foreground mt-3">{act.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Work Experience */}
          <div className="space-y-12">
            <div>
              <h3 className="font-display text-3xl font-semibold mb-6 flex items-center gap-3"><Briefcase /> Work Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="p-6 bg-card border-border transition-all hover:shadow-lg">
                    <div className="flex flex-col sm:flex-row justify-between items-start">
                      <div className="mb-2 sm:mb-0">
                        <h4 className="font-semibold text-xl">{exp.title}</h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.date}</p>
                    </div>
                    <p className="text-muted-foreground mt-3">{exp.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Competitive Programming */}
          <div className="space-y-12">
            <div>
              <h3 className="font-display text-3xl font-semibold mb-6 flex items-center gap-3"><BrainCircuit /> Competitive Programming</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {competitiveProfiles.map((profile, index) => (
                  <a key={index} href={profile.url} target="_blank" rel="noopener noreferrer" className="block">
                    <Card className="p-4 bg-card border-border text-center hover:bg-secondary transition-colors">
                      <p className="font-semibold text-lg">{profile.name}</p>
                      <p className="text-sm text-muted-foreground">{profile.username}</p>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 4: Courses */}
          <div className="space-y-12">
            <div>
              <h3 className="font-display text-3xl font-semibold mb-6 flex items-center gap-3"><BookOpen /> Relevant Courses</h3>
              <Card className="p-7 bg-card border-border">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                  {courses.map((course, index) => (
                    <li key={index} className="text-muted-foreground flex items-center gap-2">
                      <span className="text-primary">◆</span> {course}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
