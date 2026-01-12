import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,200,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,200,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          {/* Status indicator */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span className="font-mono text-sm text-muted-foreground">
              Lagos, Nigeria · Available for Staff/Principal roles
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Adetola Adedoyin</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary font-mono mb-8">
            Cloud Infrastructure Architect
          </p>

          <div className="max-w-3xl mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I design and operate distributed systems that handle failure gracefully. 
              My work focuses on infrastructure that scales predictably, fails safely, 
              and costs what it should—nothing more.
            </p>
          </div>

          {/* Key metrics - not vanity, operational */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl">
            {[
              { value: "99.95%", label: "SLA maintained" },
              { value: "<200ms", label: "P95 latency" },
              { value: "40%", label: "Cost reduction" },
              { value: "0", label: "Unplanned outages (12mo)" },
            ].map((metric) => (
              <div key={metric.label} className="border-l border-primary/30 pl-4">
                <div className="text-2xl font-mono text-foreground">{metric.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#systems"
              className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors"
            >
              View Selected Systems
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border text-foreground font-medium rounded hover:border-primary/50 transition-colors"
            >
              Discuss Architecture
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
