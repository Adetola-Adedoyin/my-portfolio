import { motion } from "framer-motion";

const philosophies = [
  {
    principle: "Failure is not an edge case",
    description: "Every system I design starts with the question: 'What happens when this fails?' Because it will. Networks partition. Disks fill. Certificates expire. Services crash. The difference between a resilient system and a fragile one isn't preventing failure—it's how gracefully it degrades when failure occurs.",
  },
  {
    principle: "Simple systems survive",
    description: "Complexity is technical debt with compound interest. Every abstraction layer, every clever optimization, every 'it works but I don't know why' is a future incident waiting to happen. I prefer boring technology that I understand completely over elegant solutions that require tribal knowledge to debug.",
  },
  {
    principle: "Observability before automation",
    description: "Automating a system you don't understand is just failing faster. Before I automate anything, I ensure we can answer: What is the current state? How do we know it's healthy? When did it last change? Without observability, automation is a force multiplier for mistakes.",
  },
  {
    principle: "Cost is an architectural constraint",
    description: "Infrastructure that works but costs 3x what it should isn't well-designed—it's over-provisioned. I treat cloud spend like any other constraint: a parameter to optimize within, not an afterthought. Right-sizing, reserved capacity, and architecture decisions that reduce data transfer are as important as uptime.",
  },
  {
    principle: "Documentation is not optional",
    description: "If it's not documented, it doesn't exist. Runbooks, architecture decision records, on-call handoffs—these aren't bureaucracy, they're reliability tooling. The test of good documentation: can someone who's never seen this system debug it at 3am?",
  },
];

const DesignPhilosophy = () => {
  return (
    <section id="philosophy" className="py-24 relative bg-muted/20">
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
            <span className="font-mono text-sm text-primary uppercase tracking-wider">Design Philosophy</span>
          </div>

          <p className="text-muted-foreground mb-12">
            Principles that guide every infrastructure decision. Learned from production incidents, 
            post-mortems, and systems that outlived their expected lifespan.
          </p>

          <div className="space-y-8">
            {philosophies.map((item, index) => (
              <motion.div
                key={item.principle}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-l-2 border-primary/30 pl-6 py-2"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.principle}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;
