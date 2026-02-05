import PageLayout from "@/components/PageLayout";
import AboutSection from "@/components/AboutSection";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const About = () => {
  return (
    <PageLayout>
      <div className="py-12">
        <AboutSection />
        
        {/* Additional info section */}
        <section className="py-16 bg-card">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Quick Connect
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <a
                  href="mailto:maria.mbugua.15@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mary-njeri-mbugua/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Maria-mbugua"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all"
                >
                  <Github className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">GitHub</span>
                </a>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border/50">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default About;