const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Cloud & Databases",
      years: "6+",
      skills: ["SQL", "Oracle PL/SQL", "Oracle Forms", "MySQL", "Cloud Solutions", "RMAN Backup", "Data Warehousing"],
      color: "from-primary to-teal-400",
    },
    {
      category: "Web Development",
      years: "3+",
      skills: ["React", "Vue.js", "Laravel", "TypeScript", "JavaScript", "HTML/CSS"],
      color: "from-blue-500 to-cyan-400",
    },
    {
      category: "Data Science",
      years: "4+",
      skills: ["Python", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "Data Modeling", "Analytics"],
      color: "from-purple-500 to-pink-400",
    },
    {
      category: "DevOps & Tools",
      years: "4+",
      skills: ["Linux OS", "Git", "Jira", "Google Colab", "Jupyter Notebooks", "Version Control"],
      color: "from-orange-500 to-yellow-400",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-card relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm tracking-wider uppercase mb-3">Skills</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Technical Proficiency Matrix
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning databases, web development, data science, and DevOps
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                  <span className={`text-sm font-mono px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-primary-foreground`}>
                    {category.years} years
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;