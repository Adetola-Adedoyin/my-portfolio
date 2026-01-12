import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AWS Multi-Tier Architecture",
      description: "Scalable web application infrastructure with load balancers, auto-scaling groups, and RDS",
      tech: ["AWS", "Terraform", "EC2", "RDS"],
      link: "https://github.com/Adetola-Adedoyin",
      emoji: "☁️"
    },
    {
      title: "Kubernetes Cluster Management",
      description: "Production-ready Kubernetes cluster with monitoring, logging, and automated deployments",
      tech: ["Kubernetes", "Docker", "Helm", "Prometheus"],
      link: "https://github.com/Adetola-Adedoyin",
      emoji: "🚢"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Automated deployment pipelines with testing, security scanning, and rollback capabilities",
      tech: ["GitHub Actions", "Docker", "Terraform", "AWS"],
      link: "https://github.com/Adetola-Adedoyin",
      emoji: "🚀"
    },
    {
      title: "Infrastructure Monitoring",
      description: "Comprehensive monitoring solution with alerting, dashboards, and performance metrics",
      tech: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch"],
      link: "https://github.com/Adetola-Adedoyin",
      emoji: "📊"
    },
    {
      title: "Serverless Applications",
      description: "Event-driven serverless architecture with Lambda functions and API Gateway",
      tech: ["AWS Lambda", "API Gateway", "DynamoDB", "S3"],
      link: "https://github.com/Adetola-Adedoyin",
      emoji: "⚡"
    },
    {
      title: "Security & Compliance",
      description: "Security hardening, compliance automation, and vulnerability management systems",
      tech: ["AWS Security", "Vault", "SIEM", "Compliance"],
      link: "https://github.com/Adetola-Adedoyin",
      emoji: "🔒"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-purple-400">My</span>{" "}
              <span className="text-white">Projects</span>
            </h2>
            <p className="text-xl text-gray-300">
              Explore my work and infrastructure solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="colorful-card p-6 hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-4 text-center">{project.emoji}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-white transition-colors text-sm font-medium"
                >
                  <span>View Project</span>
                  <span>→</span>
                </a>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://github.com/Adetola-Adedoyin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 warm-card px-8 py-4 hover:scale-105 transition-transform"
            >
              <span className="text-2xl">🐙</span>
              <div>
                <div className="text-white font-semibold">View GitHub Repository</div>
                <div className="text-gray-300 text-sm">github.com/Adetola-Adedoyin</div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;