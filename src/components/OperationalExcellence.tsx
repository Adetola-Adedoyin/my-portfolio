import { motion } from "framer-motion";

const OperationalExcellence = () => {
  return (
    <section id="operations" className="py-24 relative">
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
            <span className="font-mono text-sm text-primary uppercase tracking-wider">Operational Excellence</span>
          </div>

          <p className="text-muted-foreground mb-12">
            How I ensure systems stay healthy in production. Infrastructure is not 'done' at deployment—it's 
            maintained, monitored, and continuously improved.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CI/CD Philosophy */}
            <div className="p-6 border border-border rounded-lg">
              <h3 className="font-mono text-sm text-primary uppercase tracking-wider mb-4">Deployment Strategy</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-medium">Immutable artifacts:</span>
                  Build once, deploy everywhere. No environment-specific builds.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-medium">Canary releases:</span>
                  5% traffic → 25% → 100%. Automated rollback on error rate spike.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-medium">Feature flags:</span>
                  Decouple deployment from release. Ship code daily, enable features when ready.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-medium">Rollback SLA:</span>
                  Any deployment must be reversible in under 5 minutes.
                </li>
              </ul>
            </div>

            {/* Monitoring & Alerting */}
            <div className="p-6 border border-border rounded-lg">
              <h3 className="font-mono text-sm text-primary uppercase tracking-wider mb-4">Observability Stack</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-medium">Metrics:</span>
                  Prometheus + Grafana. SLI/SLO-based alerting, not threshold guessing.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-medium">Logs:</span>
                  Structured JSON. Correlation IDs across services. 30-day retention.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-medium">Traces:</span>
                  Distributed tracing for request flow visibility across service boundaries.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-medium">Alert philosophy:</span>
                  If it pages, it's actionable. If it's not actionable, it's a dashboard.
                </li>
              </ul>
            </div>

            {/* Incident Response */}
            <div className="p-6 border border-border rounded-lg">
              <h3 className="font-mono text-sm text-primary uppercase tracking-wider mb-4">Incident Response</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-medium">Runbooks:</span>
                  Every alert has a corresponding runbook. No undocumented alerts.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-medium">On-call rotation:</span>
                  Primary + secondary. Escalation paths defined. No single points of failure.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-medium">Post-mortems:</span>
                  Blameless. Focus on systemic fixes, not individual errors.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-medium">Chaos engineering:</span>
                  Scheduled failure injection. Find weaknesses before customers do.
                </li>
              </ul>
            </div>

            {/* Security Posture */}
            <div className="p-6 border border-border rounded-lg">
              <h3 className="font-mono text-sm text-primary uppercase tracking-wider mb-4">Security & Reliability</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-medium">Least privilege:</span>
                  IAM roles scoped to exact permissions needed. No admin access in production.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-medium">Secrets management:</span>
                  No secrets in code or environment variables. Vault or cloud-native secret stores.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-medium">Network isolation:</span>
                  Zero-trust networking. Service mesh for mTLS. No public endpoints for internal services.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-medium">Backup verification:</span>
                  Backups that aren't tested aren't backups. Monthly restore drills.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OperationalExcellence;
