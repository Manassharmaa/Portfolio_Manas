import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="container mx-auto px-4 max-w-4xl">
      <p className="section-label">Let's Connect</p>
      <h2 className="section-title">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { icon: <Mail size={20} />, label: "manassharma7988@gmail.com", href: "mailto:manassharma7988@gmail.com" },
          { icon: <Phone size={20} />, label: "+91 7988508479", href: "tel:+917988508479" },
          { icon: <Linkedin size={20} />, label: "linkedin.com/in/manas-sharma79", href: "https://www.linkedin.com/in/manas-sharma79/" },
          { icon: <Github size={20} />, label: "github.com/Manassharmaa", href: "https://github.com/Manassharmaa" },
        ].map((c) => (
          <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="glass-card flex items-center gap-4 hover:border-primary/40 transition-colors">
            <span className="text-primary">{c.icon}</span>
            <span className="text-foreground text-sm">{c.label}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
