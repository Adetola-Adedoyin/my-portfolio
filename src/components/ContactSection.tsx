import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
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
            <span className="font-mono text-sm text-primary uppercase tracking-wider">Contact</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Discuss Architecture
              </h2>
              <p className="text-muted-foreground mb-6">
                Available for Staff and Principal Infrastructure roles. Open to consulting 
                engagements for architecture review, incident response improvement, or 
                infrastructure modernization.
              </p>
              <p className="text-muted-foreground mb-8">
                I respond to specific, well-scoped inquiries within 48 hours.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:aborisadeadetola@gmail.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-mono">aborisadeadetola@gmail.com</span>
                </a>
                <a
                  href="https://github.com/Adetola-Adedoyin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="font-mono">github.com/Adetola-Adedoyin</span>
                </a>
                <a
                  href="https://linkedin.com/in/adetola-adedoyin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="font-mono">linkedin.com/in/adetola-adedoyin</span>
                </a>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg bg-muted/20">
              <h3 className="font-mono text-sm text-primary uppercase tracking-wider mb-4">
                What I'm Looking For
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  Organizations where infrastructure is a strategic investment, not a cost center
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  Teams that value reliability engineering over feature velocity at all costs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  Problems that require systems thinking, not just tool deployment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  Environments where post-mortems are blameless and learning is continuous
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Based in Lagos, Nigeria. Open to remote roles globally. 
                  Available for relocation for the right opportunity.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
