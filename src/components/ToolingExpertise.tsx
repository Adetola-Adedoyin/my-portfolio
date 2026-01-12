import { motion } from "framer-motion";

const ToolingExpertise = () => {
  const toolCategories = [
    {
      title: "Cloud Platforms",
      emoji: "☁️",
      description: "Multi-cloud infrastructure expertise",
      tools: [
        { name: "AWS", level: 90, details: "VPC, EC2, RDS, S3, IAM, EKS, Lambda" },
        { name: "GCP", level: 60, details: "Compute Engine, Cloud Storage, GKE" },
        { name: "Azure", level: 45, details: "VMs, Storage, AKS" }
      ]
    },
    {
      title: "Infrastructure as Code",
      emoji: "📜",
      description: "Codified infrastructure management",
      tools: [
        { name: "Terraform", level: 95, details: "Primary IaC tool, modules, state management" },
        { name: "Ansible", level: 75, details: "Configuration management, playbooks" },
        { name: "Helm", level: 80, details: "Kubernetes packaging, charts" }
      ]
    },
    {
      title: "Container Orchestration",
      emoji: "🚢",
      description: "Containerized application management",
      tools: [
        { name: "Kubernetes", level: 85, details: "Production clusters, networking, security" },
        { name: "Docker", level: 90, details: "Containerization, multi-stage builds" },
        { name: "Calico", level: 70, details: "Network policies, CNI" }
      ]
    },
    {
      title: "CI/CD & Automation",
      emoji: "🚀",
      description: "Automated deployment pipelines",
      tools: [
        { name: "GitHub Actions", level: 88, details: "Build pipelines, workflows" },
        { name: "ArgoCD", level: 82, details: "GitOps deployments, sync policies" },
        { name: "Jenkins", level: 65, details: "Legacy pipeline management" }
      ]
    },
    {
      title: "Observability",
      emoji: "📊",
      description: "Monitoring and alerting systems",
      tools: [
        { name: "Prometheus", level: 85, details: "Metrics collection, alerting rules" },
        { name: "Grafana", level: 80, details: "Dashboards, visualization" },
        { name: "ELK Stack", level: 75, details: "Log aggregation, analysis" }
      ]
    },
    {
      title: "Programming",
      emoji: "💻",
      description: "Automation and tooling languages",
      tools: [
        { name: "Bash", level: 90, details: "System automation, glue scripts" },
        { name: "Python", level: 85, details: "Infrastructure automation, APIs" },
        { name: "YAML/JSON", level: 95, details: "Configuration, manifests" }
      ]
    }
  ];

  return (
    <section id="tooling" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-purple-400">Technology</span>{" "}
              <span className="text-white">Stack</span>
            </h2>
            <p className="text-xl text-gray-300">
              Tools and technologies I use to build reliable infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="warm-card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{category.emoji}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                    <p className="text-gray-400 text-sm">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium text-sm">{tool.name}</span>
                        <span className="text-gray-400 text-xs">{tool.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${tool.level}%` }}
                        ></div>
                      </div>
                      <p className="text-gray-400 text-xs">{tool.details}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolingExpertise;
