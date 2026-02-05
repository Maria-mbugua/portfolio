import { Code2, Database, BarChart3, Server } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Database,
      title: "6+ Years",
      description: "Database Administration",
    },
    {
      icon: Code2,
      title: "Full-Stack",
      description: "React, Vue, Laravel",
    },
    {
      icon: BarChart3,
      title: "Data Science",
      description: "Python, TensorFlow",
    },
    {
      icon: Server,
      title: "Cloud Solutions",
      description: "Scalable Architecture",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background relative">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm tracking-wider uppercase mb-3">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Bridging Data & Development
            </h2>
          </div>

          {/* Summary */}
          <div className="mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              Dedicated Software Engineer with a strong foundation in cloud-based database solutions, 
              full-stack development, and data analytics. Proven experience in adapting to agile workflows, 
              developing clean code for scalable applications, and executing rigorous software testing cycles. 
              I expertly bridge the gap between database administration and modern application development, 
              with a commitment to high availability and system efficiency.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;