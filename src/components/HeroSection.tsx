import { Github, Linkedin, Mail, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center pt-16">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="animate-fade-in-up">
        <p className="section-label">Software Developer</p>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
          Manas<br />Sharma
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md">
          Computer Science student passionate about building robust web applications, solving complex problems with data structures, and cybersecurity.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          <a href="#projects" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            View Projects
          </a>
          <a href="/Manas_CV.pdf" download className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors">
            Download Resume
          </a>
          <a href="https://github.com/Manassharmaa" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg bg-secondary text-foreground font-semibold hover:bg-secondary/80 transition-colors flex items-center gap-2">
            <Github size={18} /> GitHub Profile
          </a>
        </div>
        <div className="flex gap-4">
          <a href="mailto:manassharma7988@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={20} /></a>
          <a href="https://www.linkedin.com/in/manas-sharma79/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
          <a href="https://github.com/Manassharmaa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={20} /></a>
          <a href="tel:+917988508479" className="text-muted-foreground hover:text-primary transition-colors"><Phone size={20} /></a>
        </div>
      </div>
      <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full glow-ring">
          <div className="absolute inset-1 rounded-full border-2 border-primary/30 overflow-hidden">
            <img src={profilePhoto} alt="Manas Sharma" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
