import { motion } from "framer-motion";
import { Cpu, Zap, Shield, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    title: "Infrastructure as Code",
    description: "Terraform, Pulumi, CloudFormation – everything versioned and repeatable.",
  },
  {
    icon: Zap,
    title: "CI/CD Pipelines",
    description: "Automated pipelines that deploy with confidence, every single time.",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "DevSecOps practices baked into every layer of the stack.",
  },
  {
    icon: Rocket,
    title: "Cloud Native",
    description: "Kubernetes, containers, and microservices at scale.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block">// about me</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Engineering the <span className="text-gradient">Cloud</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I architect and automate cloud infrastructure that scales. With expertise spanning 
            AWS, GCP, and Azure, I transform complex deployments into elegant, maintainable systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl glass-card cyber-border hover:border-primary/60 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "50+", label: "Projects Deployed" },
            { value: "99.9%", label: "Uptime Achieved" },
            { value: "∞", label: "Pipelines Automated" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient font-mono mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;