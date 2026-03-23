const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-4 max-w-4xl">
      <p className="section-label">About Me</p>
      <h2 className="section-title">I am Manas Sharma</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
        I'm a Computer Science and Engineering student at Lovely Professional University with a strong foundation in Java, C++, Python, and web technologies. My passion lies in building full-stack applications, solving real-world problems through clean code, and exploring cybersecurity concepts.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-card">
          <h3 className="text-primary font-semibold mb-2">Core Focus</h3>
          <ul className="text-muted-foreground space-y-1 text-sm">
            <li>• Full-Stack Web Development</li>
            <li>• Data Structures & Algorithms</li>
            <li>• Cybersecurity & Network Security</li>
            <li>• Problem Solving & OOP</li>
          </ul>
        </div>
        <div className="glass-card">
          <h3 className="text-primary font-semibold mb-2">Currently</h3>
          <p className="text-foreground font-medium">B.Tech CSE @ Lovely Professional University</p>
          <p className="text-muted-foreground text-sm">Aug 2023 – Present | CGPA: 6.02</p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
