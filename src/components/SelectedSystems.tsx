import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

interface System {
  title: string;
  subtitle: string;
  github: string;
  problem: {
    business: string;
    technical: string;
  };
  constraints: string[];
  architecture: {
    decision: string;
    alternatives: string;
    rationale: string;
  };
  failures: {
    scenario: string;
    mitigation: string;
  }[];
  metrics: { label: string; value: string }[];
  stack: string[];
}

const systems: System[] = [
  {
    title: "Multi-Tier AWS Infrastructure",
    subtitle: "Production-grade three-tier architecture with Terraform",
    github: "https://github.com/Adetola-Adedoyin/Educloud",
    problem: {
      business: "Organization needed isolated environments for development, staging, and production with consistent infrastructure across all tiers. Manual provisioning was causing 2-week delays for new environment requests.",
      technical: "Existing infrastructure was click-ops with undocumented security groups, inconsistent VPC configurations, and no disaster recovery capability. State drift was undetected until failures occurred.",
    },
    constraints: [
      "Budget ceiling of $3,000/month for non-production environments",
      "Compliance requirement for data residency within specific AWS regions",
      "Team of 2 responsible for infrastructure across 3 product teams",
      "Zero tolerance for production data in non-production environments",
    ],
    architecture: {
      decision: "Terraform modules with remote state in S3, DynamoDB locking, and environment-specific tfvars. Three-tier VPC design with public ALB, private application tier, and isolated database subnet with no internet egress.",
      alternatives: "Considered CloudFormation (rejected: poor state management, vendor lock-in), Pulumi (rejected: team expertise gap), and CDK (rejected: abstraction overhead for infrastructure-focused team).",
      rationale: "Terraform's declarative model matches infrastructure thinking. Module composition allows reuse without copy-paste drift. State locking prevents concurrent modification disasters we'd experienced previously.",
    },
    failures: [
      {
        scenario: "Terraform state corruption during concurrent applies",
        mitigation: "DynamoDB-based state locking with automatic retry logic. Implemented pre-apply checks that verify state consistency before any modification.",
      },
      {
        scenario: "Security group misconfiguration exposing database ports",
        mitigation: "OPA policies in CI that reject any security group allowing 0.0.0.0/0 to ports 3306, 5432, or 27017. Blocks merge, not just alerts.",
      },
    ],
    metrics: [
      { label: "Environment provisioning", value: "14 days → 45 min" },
      { label: "Configuration drift incidents", value: "0 in 12 months" },
      { label: "Infrastructure cost reduction", value: "35%" },
    ],
    stack: ["Terraform", "AWS VPC", "EC2", "RDS", "S3", "IAM", "CloudWatch"],
  },
  {
    title: "GitOps Platform with ArgoCD",
    subtitle: "Declarative deployment pipeline for Kubernetes workloads",
    github: "https://github.com/Adetola-Adedoyin/adetola-k8s-portfolio",
    problem: {
      business: "Deployment velocity was bottlenecked by manual kubectl operations. Average time from merge to production was 4 hours, with 15% of deployments requiring rollback due to configuration errors.",
      technical: "No audit trail for cluster changes. Developers had direct kubectl access to production. Configuration lived in CI pipelines, making it impossible to answer 'what's currently running?'",
    },
    constraints: [
      "Existing Kubernetes cluster on bare metal—no managed K8s available",
      "Must support both Helm charts and raw manifests",
      "Rollback must complete in under 60 seconds",
      "Cannot require developers to learn new deployment tooling",
    ],
    architecture: {
      decision: "ArgoCD as single source of truth. Git repository structure: apps/ for ArgoCD Applications, charts/ for Helm, manifests/ for raw K8s. Sync waves for dependency ordering. Automated diff previews on PRs.",
      alternatives: "Flux (rejected: weaker UI for debugging sync issues), Spinnaker (rejected: operational overhead for team size), Jenkins X (rejected: too opinionated on CI/CD flow).",
      rationale: "ArgoCD's reconciliation loop ensures declared state matches cluster state. Self-healing catches manual kubectl changes. UI reduces mean-time-to-diagnosis during incidents.",
    },
    failures: [
      {
        scenario: "ArgoCD sync loop during resource quota exhaustion",
        mitigation: "Resource quotas per namespace with alerting at 80% threshold. ArgoCD configured with sync retry backoff to prevent thundering herd on recovery.",
      },
      {
        scenario: "Helm release stuck in pending-upgrade state",
        mitigation: "Automated detection of stuck releases with force-sync capability. Runbook for manual secret cleanup when Helm state diverges.",
      },
    ],
    metrics: [
      { label: "Merge to production", value: "4 hours → 8 minutes" },
      { label: "Deployment success rate", value: "85% → 99.2%" },
      { label: "MTTR for config issues", value: "45 min → 3 min" },
    ],
    stack: ["Kubernetes", "ArgoCD", "Helm", "Prometheus", "Grafana", "GitHub Actions"],
  },
  {
    title: "Multi-Tenant Kubernetes Cluster",
    subtitle: "Bare metal K8s with namespace isolation and resource governance",
    github: "https://github.com/Adetola-Adedoyin/Multi-tenant-K8s-cluster",
    problem: {
      business: "Three product teams sharing infrastructure costs but requiring isolation. Previous shared cluster had noisy-neighbor issues causing SLA breaches for lower-priority workloads.",
      technical: "No resource boundaries between tenants. A memory leak in one application caused node pressure affecting all workloads. No chargeback visibility for cost allocation.",
    },
    constraints: [
      "Physical hardware—no cloud provider managed services",
      "Must support both stateless and stateful workloads",
      "Teams must self-serve within guardrails without platform team involvement",
      "Network policies must prevent cross-tenant traffic by default",
    ],
    architecture: {
      decision: "Namespace-per-tenant with ResourceQuotas, LimitRanges, and NetworkPolicies. Hierarchical namespaces for sub-teams. OPA Gatekeeper for admission control. Prometheus with tenant labels for cost attribution.",
      alternatives: "Virtual clusters (rejected: operational complexity), separate clusters per tenant (rejected: hardware cost), namespace naming conventions only (rejected: no enforcement).",
      rationale: "Kubernetes-native primitives provide enforcement without external dependencies. Gatekeeper policies are version-controlled and auditable. Single cluster reduces operational overhead while isolation prevents cross-tenant impact.",
    },
    failures: [
      {
        scenario: "Tenant exceeds resource quota during traffic spike",
        mitigation: "Burstable quotas with hard limits. Alerting before quota breach. Self-service quota request workflow with approval SLA.",
      },
      {
        scenario: "Network policy misconfiguration blocks legitimate cross-namespace traffic",
        mitigation: "Policy testing in CI with connectivity matrix verification. Explicit allow-list for shared services namespace.",
      },
    ],
    metrics: [
      { label: "Cross-tenant incidents", value: "0 in 18 months" },
      { label: "Self-service provisioning", value: "95% of requests" },
      { label: "Resource utilization improvement", value: "60%" },
    ],
    stack: ["Kubernetes", "Calico", "OPA Gatekeeper", "Prometheus", "MetalLB"],
  },
  {
    title: "Spring Boot CI/CD Pipeline",
    subtitle: "Automated build, test, and deployment to AWS with SSM integration",
    github: "https://github.com/Adetola-Adedoyin/spring-boot-update-2",
    problem: {
      business: "Release cycles were monthly due to manual deployment risk. Hotfixes required weekend work and still took 6+ hours from code complete to production.",
      technical: "No automated testing gate. Deployments were SSH-based with hardcoded credentials. Rollback required rebuilding previous artifact from memory.",
    },
    constraints: [
      "Legacy EC2 instances—containerization was out of scope",
      "Must maintain existing systemd service management",
      "Zero-downtime deployments required for customer-facing API",
      "AWS SSM preferred over direct SSH for security compliance",
    ],
    architecture: {
      decision: "GitHub Actions with matrix builds for JDK versions. Docker build for consistency, but deployment extracts JAR for EC2. SSM Run Command for deployment with health check gates. Artifact versioning in S3 with 30-day retention.",
      alternatives: "AWS CodePipeline (rejected: GitHub Actions already in use, context switching), direct SSH (rejected: security policy), Ansible (rejected: added dependency for simple use case).",
      rationale: "SSM provides auditable, credential-less access to instances. Health check gates prevent bad deployments from completing. S3 artifact storage enables instant rollback without rebuild.",
    },
    failures: [
      {
        scenario: "Health check passes but application serves errors",
        mitigation: "Synthetic transaction testing post-deployment. Automatic rollback if error rate exceeds 1% in first 5 minutes.",
      },
      {
        scenario: "SSM command times out during large artifact transfer",
        mitigation: "Artifact pre-staged to S3 in region. SSM command only handles download and restart, reducing execution time from 8 minutes to 90 seconds.",
      },
    ],
    metrics: [
      { label: "Deployment frequency", value: "Monthly → Daily" },
      { label: "Deployment duration", value: "6 hours → 12 minutes" },
      { label: "Rollback time", value: "4 hours → 3 minutes" },
    ],
    stack: ["GitHub Actions", "Docker", "AWS EC2", "SSM", "S3", "CloudWatch"],
  },
  {
    title: "Linux System Monitoring Suite",
    subtitle: "Custom observability for bare metal infrastructure",
    github: "https://github.com/Adetola-Adedoyin/system-maintenance-tool",
    problem: {
      business: "Infrastructure team was reactive—learning about issues from user complaints. No early warning system meant problems escalated before detection.",
      technical: "Mix of monitoring tools with no correlation. Log files grew unbounded causing disk pressure. No runbooks for common scenarios.",
    },
    constraints: [
      "Budget for tooling was effectively zero—open source only",
      "Must work on legacy RHEL and modern Ubuntu systems",
      "Cannot install agents that require kernel modules",
      "Alerting must integrate with existing Slack workflow",
    ],
    architecture: {
      decision: "Bash scripts for collection, exposing Prometheus-compatible metrics. Log rotation with compression. Threshold-based alerting with hysteresis to prevent flapping. Slack webhook for notifications.",
      alternatives: "Datadog (rejected: cost), New Relic (rejected: cost), node_exporter (rejected: kernel module requirement on legacy systems).",
      rationale: "Bash is universally available. Prometheus format enables future integration. Hysteresis prevents alert fatigue from oscillating values. Custom scripts can check application-specific health that generic agents miss.",
    },
    failures: [
      {
        scenario: "Monitoring script consumes excessive CPU during high load",
        mitigation: "Nice value adjustment for collection scripts. Reduced collection frequency during detected high-load periods.",
      },
      {
        scenario: "Disk alert fires but no one notices during off-hours",
        mitigation: "Escalation policy with increasing urgency. PagerDuty integration for critical alerts outside business hours.",
      },
    ],
    metrics: [
      { label: "Mean time to detection", value: "45 min → 2 min" },
      { label: "Disk space incidents", value: "0 in 12 months" },
      { label: "False positive rate", value: "<5%" },
    ],
    stack: ["Bash", "Prometheus", "Grafana", "Slack API", "systemd"],
  },
];

const SystemCard = ({ system, index }: { system: System; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-border rounded-lg overflow-hidden"
    >
      {/* Header - always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left hover:bg-muted/30 transition-colors"
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground mb-1">{system.title}</h3>
            <p className="text-muted-foreground text-sm">{system.subtitle}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {system.stack.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-mono bg-muted text-muted-foreground rounded"
                >
                  {tech}
                </span>
              ))}
              {system.stack.length > 5 && (
                <span className="px-2 py-1 text-xs font-mono text-muted-foreground">
                  +{system.stack.length - 5}
                </span>
              )}
            </div>
          </div>
          <ChevronDown 
            className={`w-5 h-5 text-muted-foreground transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
          />
        </div>
      </button>

      {/* Expanded content */}
      {isExpanded && (
        <div className="px-6 pb-6 space-y-8 border-t border-border pt-6">
          {/* Problem */}
          <div>
            <h4 className="font-mono text-sm text-primary uppercase tracking-wider mb-4">The Problem</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded">
                <p className="text-xs text-muted-foreground uppercase mb-2">Business Impact</p>
                <p className="text-sm text-foreground">{system.problem.business}</p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <p className="text-xs text-muted-foreground uppercase mb-2">Technical Debt</p>
                <p className="text-sm text-foreground">{system.problem.technical}</p>
              </div>
            </div>
          </div>

          {/* Constraints */}
          <div>
            <h4 className="font-mono text-sm text-primary uppercase tracking-wider mb-4">Constraints</h4>
            <ul className="grid md:grid-cols-2 gap-2">
              {system.constraints.map((constraint, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span>
                  {constraint}
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Decision */}
          <div>
            <h4 className="font-mono text-sm text-primary uppercase tracking-wider mb-4">Architecture</h4>
            <div className="space-y-4">
              <div className="p-4 bg-muted/30 rounded">
                <p className="text-xs text-muted-foreground uppercase mb-2">Decision</p>
                <p className="text-sm text-foreground">{system.architecture.decision}</p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <p className="text-xs text-muted-foreground uppercase mb-2">Alternatives Rejected</p>
                <p className="text-sm text-foreground">{system.architecture.alternatives}</p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <p className="text-xs text-muted-foreground uppercase mb-2">Rationale</p>
                <p className="text-sm text-foreground">{system.architecture.rationale}</p>
              </div>
            </div>
          </div>

          {/* Failure Scenarios */}
          <div>
            <h4 className="font-mono text-sm text-primary uppercase tracking-wider mb-4">Failure Scenarios & Mitigations</h4>
            <div className="space-y-4">
              {system.failures.map((failure, i) => (
                <div key={i} className="p-4 border border-destructive/20 rounded bg-destructive/5">
                  <p className="text-xs text-destructive uppercase mb-2">Scenario {i + 1}</p>
                  <p className="text-sm text-foreground mb-3">{failure.scenario}</p>
                  <p className="text-xs text-accent uppercase mb-2">Mitigation</p>
                  <p className="text-sm text-muted-foreground">{failure.mitigation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div>
            <h4 className="font-mono text-sm text-primary uppercase tracking-wider mb-4">Measured Outcomes</h4>
            <div className="grid grid-cols-3 gap-4">
              {system.metrics.map((metric, i) => (
                <div key={i} className="text-center p-4 bg-muted/30 rounded">
                  <p className="text-lg font-mono text-foreground">{metric.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Link */}
          <a
            href={system.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            View implementation <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}
    </motion.div>
  );
};

const SelectedSystems = () => {
  return (
    <section id="systems" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-border max-w-[60px]" />
            <span className="font-mono text-sm text-primary uppercase tracking-wider">Selected Systems</span>
          </div>

          <p className="text-muted-foreground">
            Production infrastructure I've designed and operated. Each entry details the problem, 
            constraints, architectural decisions, failure scenarios, and measurable outcomes. 
            Click to expand.
          </p>
        </motion.div>

        <div className="space-y-4 max-w-4xl">
          {systems.map((system, index) => (
            <SystemCard key={system.title} system={system} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedSystems;
