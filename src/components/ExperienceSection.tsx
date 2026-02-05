import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Xtranet Communication",
      location: "Nairobi, Kenya",
      role: "Software Engineering Intern",
      period: "April 2025 – December 2025",
      highlights: [
        "Adapted quickly to company codebase, tools, and workflows to support ongoing projects",
        "Developed and maintained clean, well-documented code for features and bug fixes",
        "Collaborated with senior developers, designers, and QA testers in Agile/Scrum environments",
        "Utilized Git for version control and deployment support",
      ],
    },
    {
      company: "Coseke Kenya Limited",
      location: "Nairobi, Kenya",
      role: "Software Engineering Intern",
      period: "January 2025 – March 2025",
      highlights: [
        "Designed and implemented scalable applications for data extraction and analysis",
        "Collaborated with software engineers to develop and test application procedures",
        "Participated in agile development processes with changing requirements",
        "Investigated and resolved application functionality issues",
      ],
    },
    {
      company: "Solved Technologies",
      location: "Nairobi, Kenya",
      role: "Software Tester",
      period: "January 2022 – December 2024",
      highlights: [
        "Reviewed software requirements and prepared test scenarios",
        "Analyzed test results regarding database impacts, errors, and usability",
        "Prepared comprehensive reports on all aspects of software testing",
        "Participated in design reviews and provided input on requirements",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm tracking-wider uppercase mb-3">Experience</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Professional Journey
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:text-left"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary shadow-glow md:-translate-x-1/2 -translate-x-1/2" />

                {/* Content card */}
                <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                  <div className="p-6 rounded-2xl gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover">
                    <div className={`flex items-center gap-2 mb-2 text-primary ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Briefcase className="w-4 h-4" />
                      <span className="font-mono text-sm">{exp.role}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.company}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>
                    
                    <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="leading-relaxed">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;