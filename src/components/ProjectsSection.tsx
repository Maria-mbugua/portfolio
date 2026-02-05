import { ExternalLink, Layers, Globe, Smartphone, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Kenya School of Government Portal",
      description: "Contributed to a high-traffic national institutional portal. Optimized information architecture for training calendars and recruitment modules, ensuring reliable access for public service applicants.",
      icon: Globe,
      tags: ["Web Development", "UX/UI", "High Traffic"],
      gradient: "from-primary to-teal-400",
    },
    {
      title: "Elimuwave EdTech Platform",
      description: "Co-engineered a comprehensive Learning Management System (LMS) facilitating global certifications (Google, Cisco). Integrated user enrollment workflows and corporate training modules.",
      icon: BookOpen,
      tags: ["LMS", "EdTech", "Certifications"],
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Kenya Seed Company Digital Platform",
      description: "Developed features for a large-scale agricultural business portal. Enhanced the digital product catalog and farmer support interfaces ('Farmers First').",
      icon: Layers,
      tags: ["Agriculture", "E-commerce", "Data"],
      gradient: "from-green-500 to-emerald-400",
    },
    {
      title: "Skypanda Business Solution",
      description: "Architected a responsive, brand-centric web platform optimized for SEO and cross-device performance. Implemented modern UI/UX principles for digital visibility.",
      icon: Globe,
      tags: ["SEO", "Responsive", "Branding"],
      gradient: "from-purple-500 to-pink-400",
    },
    {
      title: "Android Board Meets App",
      description: "Designed an Android-based document and user management system featuring secure role-based access control and real-time scheduling for organizations.",
      icon: Smartphone,
      tags: ["Mobile", "Android", "Security"],
      gradient: "from-orange-500 to-yellow-400",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-card relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm tracking-wider uppercase mb-3">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Key Architectural Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of impactful projects spanning government, education, agriculture, and enterprise solutions
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} text-primary-foreground mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded-md bg-secondary/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:bg-primary/10 hover:border-primary/50"
              asChild
            >
              <a href="https://github.com/Maria-mbugua" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;