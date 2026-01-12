import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface System {
  title: string;
  oneLiner: string;
  github: string;
  problem: string;
  constraints: string[];
  decision: string;
  rejected: string[];
  failureModes: string[];
  outcome: string;
  stack: string[];
}

const systems: System[] = [
  {
    title: "Multi-tier AWS with Terraform",
    oneLiner: "VPC + EC2 + RDS, fully codified",
    github: "https://github.com/Adetola-Adedoyin/Educloud",
    problem: "Needed isolated dev/staging/prod environments. Manual setup was taking 2 weeks per environment. No state tracking meant drift went unnoticed until failures.",
    constraints: [
      "$3k/month budget for non-prod",
      "Data residency requirements",
      "Team of 2 managing 3 product teams",
    ],
    decision: "Terraform with S3 backend and DynamoDB locking. Modules for VPC, compute, database. Environment-specific tfvars. No Terraform Cloud — we don't need it.",
    rejected: [
      "CloudFormation — state management is worse, and we're not locked to AWS",
      "Pulumi — team doesn't know TypeScript well enough",
      "CDK — too much abstraction for infra work",
    ],
    failureModes: [
      "State corruption during concurrent applies → DynamoDB lock + pre-apply state check",
      "Security group misconfiguration → OPA policy blocks any rule with 0.0.0.0/0 to DB ports",
    ],
    outcome: "Environment provisioning: 2 weeks → 45 minutes. Zero drift incidents in 12 months.",
    stack: ["Terraform", "AWS VPC", "EC2", "RDS", "S3", "IAM"],
  },
  {
    title: "GitOps with ArgoCD",
    oneLiner: "Git as source of truth for K8s state",
    github: "https://github.com/Adetola-Adedoyin/adetola-k8s-portfolio",
    problem: "Deployments were kubectl-based. No audit trail. 4-hour average merge-to-prod. 15% rollback rate from config errors.",
    constraints: [
      "Bare metal K8s — no managed offering",
      "Must support Helm and raw manifests",
      "Rollback under 60 seconds",
    ],
    decision: "ArgoCD watching a Git repo. apps/ for Applications, charts/ for Helm, manifests/ for raw K8s. Sync waves for ordering. Diff previews on PRs.",
    rejected: [
      "Flux — weaker debugging UI",
      "Spinnaker — too much operational overhead for our team size",
      "Jenkins X — too opinionated about the whole pipeline",
    ],
    failureModes: [
      "Sync loop during quota exhaustion → alert at 80% quota, ArgoCD retry backoff",
      "Helm stuck in pending-upgrade → automated detection + force-sync capability",
    ],
    outcome: "Merge to prod: 4 hours → 8 minutes. Deployment success: 85% → 99%.",
    stack: ["Kubernetes", "ArgoCD", "Helm", "Prometheus", "Grafana"],
  },
  {
    title: "Multi-tenant K8s",
    oneLiner: "Namespace isolation on bare metal",
    github: "https://github.com/Adetola-Adedoyin/Multi-tenant-K8s-cluster",
    problem: "Three teams on one cluster. Memory leak in one app caused node pressure for everyone. No cost attribution.",
    constraints: [
      "Physical hardware, no cloud",
      "Stateless and stateful workloads",
      "Teams must self-serve without platform team",
    ],
    decision: "Namespace per tenant with ResourceQuotas, LimitRanges, NetworkPolicies. OPA Gatekeeper for admission control. Hierarchical namespaces for sub-teams.",
    rejected: [
      "Virtual clusters — operational complexity wasn't worth it",
      "Separate clusters — hardware cost too high",
      "Naming conventions only — no enforcement",
    ],
    failureModes: [
      "Tenant exceeds quota during spike → burstable quotas with hard limits, alert before breach",
      "NetworkPolicy blocks legitimate traffic → policy testing in CI with connectivity matrix",
    ],
    outcome: "Zero cross-tenant incidents in 18 months. 95% self-service provisioning.",
    stack: ["Kubernetes", "Calico", "OPA Gatekeeper", "Prometheus"],
  },
  {
    title: "Spring Boot CI/CD",
    oneLiner: "GitHub Actions → Docker → AWS EC2 via SSM",
    github: "https://github.com/Adetola-Adedoyin/spring-boot-update-2",
    problem: "Monthly releases because deployment was risky. Hotfixes took 6+ hours. SSH-based deploys with hardcoded creds.",
    constraints: [
      "Legacy EC2 — containerization out of scope",
      "Existing systemd service management",
      "Zero-downtime required",
    ],
    decision: "GitHub Actions builds Docker image for consistency, extracts JAR for EC2. SSM Run Command for deployment. Artifacts versioned in S3 with 30-day retention.",
    rejected: [
      "AWS CodePipeline — already using GitHub Actions, didn't want context switching",
      "Direct SSH — security policy forbids it",
      "Ansible — added dependency for a simple use case",
    ],
    failureModes: [
      "Health check passes but app serves errors → synthetic transaction test post-deploy, auto-rollback if error rate >1%",
      "SSM timeout on large artifacts → pre-stage to S3, SSM only handles download+restart",
    ],
    outcome: "Monthly → daily deploys. 6 hours → 12 minutes. Rollback: 4 hours → 3 minutes.",
    stack: ["GitHub Actions", "Docker", "AWS EC2", "SSM", "S3"],
  },
  {
    title: "Bash monitoring scripts",
    oneLiner: "Lightweight observability for legacy systems",
    github: "https://github.com/Adetola-Adedoyin/system-maintenance-tool",
    problem: "No early warning. Team learned about issues from user complaints. Log files filled disks.",
    constraints: [
      "Zero budget",
      "Mixed RHEL and Ubuntu",
      "No kernel module agents",
    ],
    decision: "Bash scripts exporting Prometheus-format metrics. Log rotation with compression. Threshold alerting with hysteresis. Slack webhook for notifications.",
    rejected: [
      "Datadog — cost",
      "New Relic — cost",
      "node_exporter — kernel module requirement on legacy systems",
    ],
    failureModes: [
      "Script consumes too much CPU during high load → nice value adjustment, reduced collection frequency under load",
      "Off-hours alerts missed → escalation policy, PagerDuty for critical",
    ],
    outcome: "MTTD: 45 min → 2 min. Zero disk space incidents in 12 months.",
    stack: ["Bash", "Prometheus", "Grafana", "Slack API"],
  },
];

const SystemCard = ({ system }: { system: System }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-4 text-left flex items-start justify-between gap-4 hover:bg-muted/20 transition-colors px-2 -mx-2"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-medium text-foreground">{system.title}</span>
            <span className="text-xs text-muted-foreground">— {system.oneLiner}</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {system.stack.slice(0, 4).map((tech) => (
              <span key={tech} className="text-xs font-mono text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <ChevronRight 
          className={`w-4 h-4 text-muted-foreground flex-shrink-0 mt-1 transition-transform ${isExpanded ? 'rotate-90' : ''}`} 
        />
      </button>

      {isExpanded && (
        <div className="pb-6 pl-2 space-y-6 text-sm">
          <div>
            <p className="text-xs font-mono text-muted-foreground mb-1">Problem</p>
            <p className="text-muted-foreground">{system.problem}</p>
          </div>

          <div>
            <p className="text-xs font-mono text-muted-foreground mb-1">Constraints</p>
            <ul className="text-muted-foreground space-y-1">
              {system.constraints.map((c, i) => (
                <li key={i}>• {c}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-mono text-muted-foreground mb-1">Decision</p>
            <p className="text-muted-foreground">{system.decision}</p>
          </div>

          <div>
            <p className="text-xs font-mono text-muted-foreground mb-1">Rejected alternatives</p>
            <ul className="text-muted-foreground space-y-1">
              {system.rejected.map((r, i) => (
                <li key={i}>• {r}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-mono text-muted-foreground mb-1">Failure modes + mitigations</p>
            <ul className="text-muted-foreground space-y-1">
              {system.failureModes.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-mono text-muted-foreground mb-1">Outcome</p>
            <p className="text-foreground">{system.outcome}</p>
          </div>

          <a
            href={system.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs text-primary hover:underline"
          >
            Code →
          </a>
        </div>
      )}
    </div>
  );
};

const SelectedSystems = () => {
  return (
    <section id="systems" className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="font-mono text-sm text-primary mb-2">Systems</h2>
          <p className="text-xs text-muted-foreground mb-8">
            Click to expand. Each includes problem, constraints, decision, rejected alternatives, failure modes, and outcome.
          </p>

          <div>
            {systems.map((system) => (
              <SystemCard key={system.title} system={system} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedSystems;
