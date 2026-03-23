import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Ace Bank Lite",
    tags: ["Java", "Servlets", "JSP", "MySQL"],
    date: "Feb 2026",
    github: "https://github.com/Manassharmaa",
    points: [
      "Developed a full-stack banking web application using Java, Servlets, JSP, Maven, and MySQL.",
      "Implemented secure user authentication with bcrypt hashing and session management.",
      "Built core banking features including registration, login, deposit, withdrawal, and fund transfer.",
      "Designed transaction history dashboard with CSV statement download.",
      "Integrated OTP-based password recovery with email notifications.",
    ],
  },
  {
    title: "DeepSeek Clone",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    date: "2025",
    github: "https://github.com/Manassharmaa",
    points: [
      "Developed a full-stack AI-powered web application using Next.js and TypeScript.",
      "Integrated OpenAI API with vector embeddings for semantic search.",
      "Implemented PDF upload and indexing system for document management.",
      "Built real-time AI response streaming with context-aware search.",
      "Used MongoDB, Pinecone/Vercel KV, and Clerk authentication.",
    ],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-4 max-w-4xl">
      <p className="section-label">What I've Built</p>
      <h2 className="section-title">Projects</h2>
      <div className="space-y-6">
        {projects.map((p) => (
          <div key={p.title} className="glass-card group hover:border-primary/40 transition-colors">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
              <h3 className="text-xl font-bold text-foreground">{p.title}</h3>
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground font-mono">{p.date}</span>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80">
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-mono">{t}</span>
              ))}
            </div>
            <ul className="space-y-1">
              {p.points.map((pt, i) => (
                <li key={i} className="text-muted-foreground text-sm flex gap-2">
                  <span className="text-primary">▹</span>{pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
