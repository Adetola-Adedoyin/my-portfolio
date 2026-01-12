import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="font-mono text-sm text-primary mb-6">Contact</h2>

          <div className="text-sm text-muted-foreground space-y-4">
            <p>
              Looking for infrastructure roles where reliability matters. 
              Remote or Lagos-based. Open to relocation for the right fit.
            </p>
            
            <div className="space-y-2 font-mono">
              <p>
                <a href="mailto:aborisadeadetola@gmail.com" className="text-foreground hover:text-primary">
                  aborisadeadetola@gmail.com
                </a>
              </p>
              <p>
                <a href="https://github.com/Adetola-Adedoyin" className="text-foreground hover:text-primary">
                  github.com/Adetola-Adedoyin
                </a>
              </p>
              <p>
                <a href="https://linkedin.com/in/adetola-adedoyin" className="text-foreground hover:text-primary">
                  linkedin.com/in/adetola-adedoyin
                </a>
              </p>
            </div>

            <p className="text-xs text-muted-foreground pt-4">
              I respond to specific inquiries within 48 hours. 
              Generic recruiter messages go to the bottom of the queue.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
