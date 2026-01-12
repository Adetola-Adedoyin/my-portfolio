import { motion } from "framer-motion";

const DesignPhilosophy = () => {
  return (
    <section id="philosophy" className="py-16 bg-muted/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="font-mono text-sm text-primary mb-6">How I work</h2>

          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>
              <strong className="text-foreground">Assume failure.</strong> Every component will fail. 
              I design for graceful degradation, not perfect uptime.
            </li>
            <li>
              <strong className="text-foreground">Boring technology.</strong> I pick tools I understand 
              completely over clever solutions that require tribal knowledge to debug.
            </li>
            <li>
              <strong className="text-foreground">Observe before automating.</strong> If I can't answer 
              "what is the current state" and "how do I know it's healthy", I don't automate it yet.
            </li>
            <li>
              <strong className="text-foreground">Cost is a constraint.</strong> Over-provisioned 
              infrastructure isn't well-designed. I right-size and use reserved capacity.
            </li>
            <li>
              <strong className="text-foreground">Document or it doesn't exist.</strong> Runbooks, 
              ADRs, on-call handoffs. Can someone who's never seen this debug it at 3am?
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;
