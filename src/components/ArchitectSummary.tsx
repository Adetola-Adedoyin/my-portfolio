import { motion } from "framer-motion";

const ArchitectSummary = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="font-mono text-sm text-primary mb-6">Summary</h2>

          <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
            <p>
              I've operated production infrastructure on AWS for the past few years. 
              Mostly Terraform, Kubernetes, CI/CD pipelines. Some bare metal.
            </p>
            <p>
              My job is making sure deployments don't break things and failures don't cascade. 
              I write the automation, set up the monitoring, and get paged when it goes wrong.
            </p>
            <p>
              I'm not interested in tools for their own sake. I pick what works, document why, 
              and move on.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="font-mono text-xs text-muted-foreground mb-4">Recent context</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Currently at Cyberspace Limited (Lagos) — multi-tier AWS, GitHub Actions, Docker</li>
              <li>• Previously managed IT for ~200 users at Ekiti State University Staff School</li>
              <li>• BSc Educational Technology, University of Ilorin</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectSummary;
