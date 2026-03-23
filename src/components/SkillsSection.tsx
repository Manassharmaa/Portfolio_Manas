const skillGroups = [
  { title: "Languages", skills: ["Java", "C++", "C", "Python"] },
  { title: "Frontend", skills: ["HTML", "CSS", "JavaScript"] },
  { title: "Cybersecurity", skills: ["Encryption", "IDS/IPS", "DLP", "NAC", "Firewalls", "NMAP", "Wireshark"] },
  { title: "Soft Skills", skills: ["Communication", "Problem-Solving", "Teamwork", "Adaptability"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="container mx-auto px-4 max-w-4xl">
      <p className="section-label">What I Know</p>
      <h2 className="section-title">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((g) => (
          <div key={g.title} className="glass-card">
            <h3 className="text-primary font-semibold mb-4">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span key={s} className="skill-badge">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
