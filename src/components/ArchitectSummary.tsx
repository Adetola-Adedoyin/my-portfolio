import { motion } from "framer-motion";

const ArchitectSummary = () => {
  return (
    <section id="about" className="py-24 relative">
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
            <span className="font-mono text-sm text-primary uppercase tracking-wider">Architect's Summary</span>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              I build infrastructure for systems that cannot fail. Over the past decade, I've designed 
              and operated cloud platforms serving millions of requests, managed multi-region deployments 
              across AWS, GCP, and hybrid environments, and led incident response for production systems 
              where downtime meant revenue loss.
            </p>

            <p>
              My approach is simple: every architectural decision is a trade-off. I optimize for 
              reliability first, then cost, then developer velocity—in that order. I've learned this 
              hierarchy the hard way, through 2am pages and post-mortems that taught more than any 
              certification ever could.
            </p>

            <p>
              I don't deploy tools. I design systems. The difference is understanding why a particular 
              database, queue, or orchestration pattern fits the problem—and more importantly, understanding 
              when it doesn't.
            </p>
          </div>

          {/* Core competencies - not skills, capabilities */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-mono text-sm text-primary uppercase tracking-wider">What I Build</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  Multi-region, active-active infrastructure with automatic failover
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  Zero-downtime deployment pipelines with canary and blue-green strategies
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  Observability stacks that surface problems before users notice
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  Cost-optimized architectures without compromising reliability
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-sm text-primary uppercase tracking-wider">How I Think</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  Failure is not an edge case—it's the default state I design around
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  Complexity is debt. Simple systems survive; clever systems break
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  Automation without observability is just faster failure
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  The best incident is the one that never reaches production
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectSummary;
