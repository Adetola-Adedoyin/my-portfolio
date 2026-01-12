import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

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
  emoji: string;
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
    emoji: "☁️"
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
    emoji: "🚢"
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
    emoji: "🏗️"
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
    emoji: "🚀"
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
    emoji: "📊"
  },
];

const SystemCard = ({ system }: { system: System }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="colorful-card p-6 mb-6"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left flex items-start justify-between gap-4 hover:opacity-80 transition-opacity"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{system.emoji}</span>
            <h3 className="text-lg font-semibold text-white">{system.title}</h3>
          </div>
          <p className="text-gray-300 text-sm mb-3">{system.oneLiner}</p>
          <div className="flex flex-wrap gap-2">
            {system.stack.slice(0, 4).map((tech) => (
              <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-2 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
        />
      </button>

      {isExpanded && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-6 pt-6 border-t border-white/10 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-purple-400 font-medium mb-2">🎯 Problem</h4>
              <p className="text-gray-300 text-sm">{system.problem}</p>
            </div>

            <div>
              <h4 className="text-orange-400 font-medium mb-2">⚡ Constraints</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                {system.constraints.map((c, i) => (
                  <li key={i}>• {c}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-blue-400 font-medium mb-2">✅ Decision</h4>
              <p className="text-gray-300 text-sm">{system.decision}</p>
            </div>

            <div>
              <h4 className="text-red-400 font-medium mb-2">❌ Rejected</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                {system.rejected.map((r, i) => (
                  <li key={i}>• {r}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-yellow-400 font-medium mb-2">🛡️ Failure Modes & Mitigations</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              {system.failureModes.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div>
              <h4 className="text-emerald-400 font-medium mb-2">🎉 Outcome</h4>
              <p className="text-white font-medium">{system.outcome}</p>
            </div>
            <a
              href={system.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg text-purple-300 hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Code</span>
            </a>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const SelectedSystems = () => {
  return (
    <section id="systems" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-purple-400">System</span>{" "}
              <span className="text-white">Architecture</span>
            </h2>
            <p className="text-xl text-gray-300 mb-2">
              Real-world infrastructure solutions and decisions
            </p>
            <p className="text-gray-400">
              Click to expand. Each includes problem, constraints, decision, rejected alternatives, failure modes, and outcome.
            </p>
          </div>

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
