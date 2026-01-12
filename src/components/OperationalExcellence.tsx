import { motion } from "framer-motion";

const OperationalExcellence = () => {
  const practices = [
    {
      title: "Deployments",
      emoji: "🚀",
      items: [
        "Immutable artifacts — build once, deploy everywhere",
        "Canary releases — 5% → 25% → 100%, auto-rollback on error spike",
        "Feature flags — decouple deploy from release",
        "Rollback SLA: under 5 minutes"
      ]
    },
    {
      title: "Observability",
      emoji: "👀",
      items: [
        "Metrics: Prometheus + Grafana, SLI/SLO-based alerts",
        "Logs: structured JSON, correlation IDs, 30-day retention",
        "Traces: distributed tracing across service boundaries",
        "If it pages, it's actionable. Otherwise, it's a dashboard."
      ]
    },
    {
      title: "Incidents",
      emoji: "🚨",
      items: [
        "Every alert has a runbook",
        "Primary + secondary on-call, defined escalation",
        "Blameless post-mortems, focus on systemic fixes",
        "Scheduled failure injection to find weaknesses first"
      ]
    },
    {
      title: "Security",
      emoji: "🔒",
      items: [
        "Least privilege IAM — scoped to exact permissions",
        "No secrets in code — Vault or cloud-native stores",
        "Zero-trust networking, mTLS between services",
        "Monthly backup restore drills"
      ]
    }
  ];

  return (
    <section id="operations" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl animate-pulse"></div>
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
              <span className="text-purple-400">Operational</span>{" "}
              <span className="text-white">Excellence</span>
            </h2>
            <p className="text-xl text-gray-300">
              Best practices for reliable, scalable operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {practices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="colorful-card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{practice.emoji}</span>
                  <h3 className="text-xl font-semibold text-white">{practice.title}</h3>
                </div>
                <ul className="space-y-3">
                  {practice.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OperationalExcellence;
