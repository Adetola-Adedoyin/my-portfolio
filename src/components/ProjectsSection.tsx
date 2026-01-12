import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Multi-Tier AWS Deployment with Terraform",
    description: "Provisioned cloud infrastructure using Terraform modules (VPC, EC2, security groups). Deployed three EC2 instances to cater for front-end, backend, and database. Configured access via public IP.",
    tags: ["AWS", "Terraform", "VPC", "EC2"],
    github: "https://github.com/Adetola-Adedoyin/Educloud",
  },
  {
    title: "GitOps Workflow with ArgoCD",
    description: "Complete GitOps workflow and monitoring setup for a portfolio application deployed on a local Kubernetes cluster using Helm, ArgoCD, Prometheus, and Grafana.",
    tags: ["Kubernetes", "ArgoCD", "Helm", "Prometheus", "Grafana"],
    github: "https://github.com/Adetola-Adedoyin/adetola-k8s-portfolio",
  },
  {
    title: "Multi-Tenant K8s Cluster",
    description: "Deployment steps for deploying Kubernetes on Bare Metal with multi-tenant configuration for isolated workloads.",
    tags: ["Kubernetes", "Bare Metal", "Multi-Tenant"],
    github: "https://github.com/Adetola-Adedoyin/Multi-tenant-K8s-cluster",
  },
  {
    title: "CI/CD Pipeline for Spring Boot App",
    description: "Built GitHub Actions pipeline that builds, tests, packages, and deploys app on AWS. Integrated Docker image pull, SSM command execution, and container run automation.",
    tags: ["GitHub Actions", "Docker", "AWS", "Spring Boot"],
    github: "https://github.com/Adetola-Adedoyin/spring-boot-update-2",
  },
  {
    title: "Dotnet App Deployment on Ubuntu Server",
    description: "Deployment steps for the eShopOnWeb application using Docker and NGINX on a Linux server with production-ready configuration.",
    tags: ["Docker", "Nginx", ".NET", "Linux"],
    github: "https://github.com/Adetola-Adedoyin/dotnet-app-on-prem",
  },
  {
    title: "VM Monitoring with Bash Scripts",
    description: "Scripts to monitor system logs, memory usage, and service uptime on Linux servers. Improved visibility into system health, reduced downtime via early alerting.",
    tags: ["Bash", "Linux", "Monitoring", "Scripting"],
    github: "https://github.com/Adetola-Adedoyin/system-maintenance-tool",
  },
  {
    title: "Terraform-EC2-S3",
    description: "Provisioned infrastructure using Terraform. Creates an EC2 instance and stores the state file in an S3 bucket for remote state management.",
    tags: ["Terraform", "AWS", "EC2", "S3"],
    github: "https://github.com/Adetola-Adedoyin/Terraform-EC2-S3",
  },
  {
    title: "Ubuntu-Nginx ASP.NET Core Deployment",
    description: "Bash script that automates deployment of an ASP.NET Core application on Ubuntu. Sets up dependencies, configures Nginx as reverse proxy, and runs as systemd service.",
    tags: ["Bash", "Nginx", ".NET", "Automation"],
    github: "https://github.com/Adetola-Adedoyin/ubuntu-nginx",
  },
  {
    title: "Windows IIS Automation Script",
    description: "Bash script to automate the installation and configuration of IIS on a Windows server via the terminal.",
    tags: ["PowerShell", "IIS", "Windows", "Automation"],
    github: "https://github.com/Adetola-Adedoyin/windows-IIS",
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
          <span className="font-mono text-primary text-sm mb-4 block">// portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world infrastructure projects showcasing IaC, CI/CD, containerization, and cloud automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group p-6 rounded-xl glass-card cyber-border hover:border-primary/60 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Folder className="w-6 h-6 text-primary" />
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-primary/80 bg-primary/5 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Adetola-Adedoyin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
