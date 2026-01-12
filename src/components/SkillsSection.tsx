import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Cloud Platforms",
    skills: [
      { name: "AWS", level: 95 },
      { name: "Google Cloud", level: 85 },
      { name: "Azure", level: 80 },
      { name: "DigitalOcean", level: 90 },
    ],
  },
  {
    title: "Container & Orchestration",
    skills: [
      { name: "Kubernetes", level: 90 },
      { name: "Docker", level: 95 },
      { name: "Helm", level: 85 },
      { name: "ArgoCD", level: 80 },
    ],
  },
  {
    title: "Infrastructure as Code",
    skills: [
      { name: "Terraform", level: 95 },
      { name: "Ansible", level: 90 },
      { name: "Pulumi", level: 75 },
      { name: "CloudFormation", level: 85 },
    ],
  },
  {
    title: "CI/CD & Automation",
    skills: [
      { name: "GitHub Actions", level: 95 },
      { name: "GitLab CI", level: 90 },
      { name: "Jenkins", level: 85 },
      { name: "CircleCI", level: 80 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block">// tech stack</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tools & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A battle-tested toolkit for building and scaling modern infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="p-6 rounded-xl glass-card cyber-border"
            >
              <h3 className="text-lg font-semibold mb-6 text-foreground font-mono">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="text-sm text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-cyber rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tool icons cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {[
            "Linux", "Prometheus", "Grafana", "ELK Stack", "Redis", 
            "PostgreSQL", "MongoDB", "Nginx", "Istio", "Vault"
          ].map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 text-sm font-mono text-muted-foreground bg-secondary/50 rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-all cursor-default"
            >
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;