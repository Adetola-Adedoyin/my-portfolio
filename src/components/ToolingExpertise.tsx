import { motion } from "framer-motion";

const ToolingExpertise = () => {
  return (
    <section id="tooling" className="py-16 bg-muted/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="font-mono text-sm text-primary mb-6">Tooling</h2>

          <div className="text-sm text-muted-foreground space-y-4">
            <p>
              <span className="text-foreground">Cloud:</span> AWS (VPC, EC2, RDS, S3, IAM, EKS, Lambda). Some GCP. Enough Azure to be dangerous.
            </p>
            <p>
              <span className="text-foreground">IaC:</span> Terraform (primary). Ansible for config management. Helm for K8s packaging.
            </p>
            <p>
              <span className="text-foreground">Containers:</span> Docker, Kubernetes, containerd. Calico for networking. Service mesh when necessary.
            </p>
            <p>
              <span className="text-foreground">CI/CD:</span> GitHub Actions for build. ArgoCD for deploy. Jenkins when clients require it.
            </p>
            <p>
              <span className="text-foreground">Observability:</span> Prometheus, Grafana, Loki. CloudWatch when on AWS. ELK for log aggregation.
            </p>
            <p>
              <span className="text-foreground">Languages:</span> Bash for glue scripts. Python for automation and tooling.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolingExpertise;
