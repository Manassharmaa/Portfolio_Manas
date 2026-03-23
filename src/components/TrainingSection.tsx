const TrainingSection = () => (
  <section id="training" className="py-24">
    <div className="container mx-auto px-4 max-w-4xl">
      <p className="section-label">Learning</p>
      <h2 className="section-title">Training & Certifications</h2>

      <div className="glass-card mb-8">
        <h3 className="text-xl font-bold text-foreground mb-2">Data Structures & Algorithms (C++ and C)</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Completed comprehensive DSA training covering arrays, linked lists, stacks, queues, trees, graphs, and related algorithms. Strengthened problem-solving skills through practical coding exercises and mini-projects.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-primary font-semibold text-lg">Certifications</h3>
        {[
          "Mastering Data Structure & Algorithms using C++",
          "Fundamentals of Network Communication",
          "Responsive Web Design – FreeCodeCamp",
          "Programming in Java",
        ].map((c) => (
          <div key={c} className="flex items-center gap-3 text-muted-foreground text-sm">
            <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
            {c}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrainingSection;
