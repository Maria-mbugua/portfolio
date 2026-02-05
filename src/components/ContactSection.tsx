import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "maria.mbugua.15@gmail.com",
      href: "mailto:maria.mbugua.15@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "mary-njeri-mbugua",
      href: "https://www.linkedin.com/in/mary-njeri-mbugua/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Maria-mbugua",
      href: "https://github.com/Maria-mbugua",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-card relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm tracking-wider uppercase mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm currently open to new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>
          </div>

          {/* Contact grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="group p-5 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                {contact.href ? (
                  <a href={contact.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">{contact.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <contact.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <p className="text-foreground font-medium">{contact.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="gradient-accent text-primary-foreground font-semibold px-8 py-6 text-base shadow-glow hover:shadow-card-hover transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="mailto:maria.mbugua.15@gmail.com">
                <Send className="w-4 h-4 mr-2" />
                Send Me a Message
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border/50">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Mary Mbugua. Built with passion and purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;