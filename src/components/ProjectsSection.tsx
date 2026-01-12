import { motion } from "framer-motion";
import { ExternalLink, Github, Cloud, Container, GitBranch } from "lucide-react";

const projects = [
  {
    title: "Multi-Cloud Infrastructure",
    description: "Terraform-based multi-cloud architecture spanning AWS and GCP with automated failover and global load balancing.",
    tags: ["Terraform", "AWS", "GCP", "Kubernetes"],
    icon: Cloud,
    gradient: "from-primary to-accent",
  },
  {
    title: "GitOps Pipeline Platform",
    description: "End-to-end GitOps platform using ArgoCD and GitHub Actions, enabling zero-touch deployments across 50+ microservices.",
    tags: ["ArgoCD", "GitHub Actions", "Helm", "K8s"],
    icon: GitBranch,
    gradient: "from-accent to-primary",
  },
  {
    title: "Container Orchestration",
    description: "Production-grade Kubernetes cluster with auto-scaling, self-healing, and comprehensive observability stack.",
    tags: ["Kubernetes", "Prometheus", "Grafana", "ELK"],
    icon: Container,
    gradient: "from-primary to-accent",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block">// featured work</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of infrastructure projects that showcase scalability, reliability, and automation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl from-primary to-accent" />
              
              <div className="relative p-8 rounded-xl glass-card cyber-border group-hover:border-primary/60 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <project.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terminal output effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-6 rounded-xl glass-card cyber-border max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <div className="w-3 h-3 rounded-full bg-warning" />
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="ml-4 text-sm text-muted-foreground font-mono">terminal</span>
          </div>
          <div className="font-mono text-sm space-y-1">
            <p><span className="text-accent">$</span> <span className="text-muted-foreground">kubectl get pods -A</span></p>
            <p className="text-primary">✓ All 127 pods running healthy</p>
            <p><span className="text-accent">$</span> <span className="text-muted-foreground">terraform plan</span></p>
            <p className="text-primary">✓ 0 to add, 0 to change, 0 to destroy</p>
            <p><span className="text-accent">$</span> <span className="text-muted-foreground">git push origin main</span></p>
            <p className="text-primary">✓ CI/CD pipeline triggered. Deploying to production...</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;