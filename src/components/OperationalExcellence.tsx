import { motion } from "framer-motion";

const OperationalExcellence = () => {
  return (
    <section id="operations" className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="font-mono text-sm text-primary mb-6">Ops practices</h2>

          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="text-foreground font-medium mb-3">Deployments</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Immutable artifacts — build once, deploy everywhere</li>
                <li>• Canary releases — 5% → 25% → 100%, auto-rollback on error spike</li>
                <li>• Feature flags — decouple deploy from release</li>
                <li>• Rollback SLA: under 5 minutes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-foreground font-medium mb-3">Observability</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Metrics: Prometheus + Grafana, SLI/SLO-based alerts</li>
                <li>• Logs: structured JSON, correlation IDs, 30-day retention</li>
                <li>• Traces: distributed tracing across service boundaries</li>
                <li>• If it pages, it's actionable. Otherwise, it's a dashboard.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-foreground font-medium mb-3">Incidents</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Every alert has a runbook</li>
                <li>• Primary + secondary on-call, defined escalation</li>
                <li>• Blameless post-mortems, focus on systemic fixes</li>
                <li>• Scheduled failure injection to find weaknesses first</li>
              </ul>
            </div>

            <div>
              <h3 className="text-foreground font-medium mb-3">Security</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Least privilege IAM — scoped to exact permissions</li>
                <li>• No secrets in code — Vault or cloud-native stores</li>
                <li>• Zero-trust networking, mTLS between services</li>
                <li>• Monthly backup restore drills</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OperationalExcellence;
