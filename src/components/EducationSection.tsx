import { GraduationCap } from "lucide-react";

const education = [
  { school: "Lovely Professional University", location: "Phagwara, Punjab", degree: "Bachelor of Technology – CSE", detail: "CGPA: 6.02", period: "Aug 2023 – Present" },
  { school: "DAV Public School", location: "Ambala, Haryana", degree: "Intermediate", detail: "62.8%", period: "Apr 2021 – Mar 2022" },
  { school: "Jesus and Marry High School", location: "Ambala, Haryana", degree: "Matriculation", detail: "100%", period: "Apr 2020 – Mar 2021" },
];

const EducationSection = () => (
  <section id="education" className="py-24">
    <div className="container mx-auto px-4 max-w-4xl">
      <p className="section-label">Background</p>
      <h2 className="section-title">Education</h2>
      <div className="space-y-6">
        {education.map((e) => (
          <div key={e.school} className="glass-card flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <GraduationCap size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="text-foreground font-bold">{e.school}</h3>
              <p className="text-primary text-sm">{e.degree} — {e.detail}</p>
              <p className="text-muted-foreground text-xs">{e.location} | {e.period}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-primary font-semibold text-lg mb-4">Achievements</h3>
        {[
          "Created a network intrusion detection System (IDS) — Sep 2023 – Dec 2023",
          "Participated in Code-A-Haunt Hackathon — Feb 2024",
          "Intern at Pahal Singh NGO, Ambala — July 2024",
        ].map((a) => (
          <div key={a} className="flex items-center gap-3 text-muted-foreground text-sm mb-2">
            <span className="text-primary">◆</span>{a}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
