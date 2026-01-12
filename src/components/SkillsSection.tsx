import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Cloud & DevOps Tools",
    skills: [
      "AWS", "Terraform", "Docker", "GitHub Actions", "Kubernetes", 
      "Linux", "Jenkins", "Ansible", "Bash", "PowerShell", 
      "Nginx", "ArgoCD", "Helm Charts", "Prometheus", "Grafana", 
      "Python", "EC2", "IAM", "S3"
    ],
  },
  {
    title: "Technical Skills",
    skills: [
      "Infrastructure as Code (IaC)",
      "CI/CD Pipeline Automation",
      "System Monitoring",
      "Virtualization",
      "Log Management",
      "Version Control",
      "Network Configuration",
      "Scripting",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Problem-Solving",
      "Collaboration",
      "Adaptability",
      "Critical Thinking",
      "Communication",
    ],
  },
];

const proficiencyLevels = [
  { name: "AWS", level: 85, color: "from-orange-500 to-yellow-500" },
  { name: "Docker", level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "Terraform", level: 80, color: "from-purple-500 to-indigo-500" },
  { name: "CI/CD", level: 75, color: "from-green-500 to-emerald-500" },
  { name: "Kubernetes", level: 70, color: "from-blue-600 to-blue-400" },
  { name: "Linux", level: 85, color: "from-yellow-500 to-orange-500" },
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
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The tools and technologies I use to architect, automate, and deploy cloud infrastructure.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="p-6 rounded-xl glass-card cyber-border"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary font-mono">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.02 }}
                    className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Proficiency Levels</h3>
          <div className="space-y-6">
            {proficiencyLevels.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-foreground">{skill.name}</span>
                  <span className="font-mono text-primary">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
