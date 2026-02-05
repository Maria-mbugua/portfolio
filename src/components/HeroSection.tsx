import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile photo */}
          <div className="mb-8 animate-scale-in">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse-slow" />
              <img
                src={profilePhoto}
                alt="Mary Mbugua"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shadow-glow"
              />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4 mb-8">
            <p className="text-primary font-mono text-sm md:text-base tracking-wider uppercase animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Software Engineer • Database Admin • Data Scientist
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Hi, I'm <span className="text-primary">Mary Mbugua</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Building scalable applications and cloud solutions with 6+ years of database expertise. 
              Passionate about bridging the gap between data and modern development.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="gradient-accent text-primary-foreground font-semibold px-8 py-6 text-base shadow-glow hover:shadow-card-hover transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 px-8 py-6 text-base transition-all duration-300"
              asChild
            >
              <Link to="/projects">View My Work</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a
              href="mailto:maria.mbugua.15@gmail.com"
              className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mary-njeri-mbugua/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Maria-mbugua"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;