import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Diploma in Data Science",
      institution: "Moringa School",
      period: "Jan 2022 – July 2022",
      icon: GraduationCap,
    },
    {
      degree: "Diploma in Database Admin & App Development",
      institution: "Institute of Software Technologies",
      period: "Sep 2019 – Nov 2020",
      icon: Award,
    },
  ];

  return (
    <section id="education" className="py-24 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm tracking-wider uppercase mb-3">Education</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Education & Certifications
            </h2>
          </div>

          {/* Education cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <edu.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h3>
                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                    <p className="text-sm text-primary font-mono">{edu.period}</p>
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

export default EducationSection;