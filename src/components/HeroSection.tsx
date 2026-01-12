import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-[70vh] flex items-center relative pt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-sm text-muted-foreground mb-4">
            Lagos · Remote · Open to relocation
          </p>

          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Adetola Adedoyin
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Infrastructure engineer. AWS, Kubernetes, Terraform. 
            I make systems that don't page people at 3am.
          </p>

          <div className="flex gap-6 text-sm font-mono text-muted-foreground mb-8">
            <span>aborisadeadetola@gmail.com</span>
            <a href="https://github.com/Adetola-Adedoyin" className="hover:text-foreground">GitHub</a>
            <a href="https://linkedin.com/in/adetola-adedoyin" className="hover:text-foreground">LinkedIn</a>
          </div>

          <div className="flex gap-4">
            <a href="#systems" className="text-sm text-primary hover:underline">
              Skip to systems →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
