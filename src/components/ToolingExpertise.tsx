import { motion } from "framer-motion";

const ToolingExpertise = () => {
  const domains = [
    {
      title: "Cloud Platforms",
      tools: ["AWS (EC2, VPC, IAM, S3, RDS, EKS, Lambda)", "GCP (GKE, Cloud Run)", "Azure (AKS, ARM)"],
      note: "Primary expertise in AWS. Multi-cloud for disaster recovery and vendor negotiation leverage.",
    },
    {
      title: "Infrastructure as Code",
      tools: ["Terraform", "Ansible", "CloudFormation", "Helm"],
      note: "Terraform for infrastructure. Ansible for configuration. Helm for Kubernetes packaging.",
    },
    {
      title: "Container Orchestration",
      tools: ["Kubernetes", "Docker", "containerd", "Calico", "Istio"],
      note: "Bare metal and managed K8s. Service mesh for complex microservice topologies.",
    },
    {
      title: "CI/CD & GitOps",
      tools: ["GitHub Actions", "ArgoCD", "Jenkins", "GitLab CI"],
      note: "GitHub Actions for build. ArgoCD for deployment. Separation of concerns.",
    },
    {
      title: "Observability",
      tools: ["Prometheus", "Grafana", "Loki", "Jaeger", "CloudWatch"],
      note: "Metrics → Logs → Traces. In that order of importance for most troubleshooting.",
    },
    {
      title: "Languages & Scripting",
      tools: ["Bash", "Python", "Go", "PowerShell", "HCL"],
      note: "Bash for glue. Python for automation. Go for tooling that needs to be fast.",
    },
  ];

  return (
    <section id="tooling" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-border max-w-[60px]" />
            <span className="font-mono text-sm text-primary uppercase tracking-wider">Tooling Expertise</span>
          </div>

          <p className="text-muted-foreground mb-12">
            Tools are means, not ends. Proficiency matters less than knowing which tool fits which problem—and 
            when not to introduce a new one.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-5 border border-border rounded-lg"
              >
                <h3 className="font-medium text-foreground mb-3">{domain.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {domain.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 text-xs font-mono bg-muted text-muted-foreground rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground italic">{domain.note}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolingExpertise;
