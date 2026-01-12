import { motion } from "framer-motion";
import { Target, Wrench, Eye, DollarSign, BookOpen } from "lucide-react";

const DesignPhilosophy = () => {
  const principles = [
    {
      title: "Assume failure",
      description: "Every component will fail. I design for graceful degradation, not perfect uptime.",
      icon: Target
    },
    {
      title: "Boring technology",
      description: "I pick tools I understand completely over clever solutions that require tribal knowledge to debug.",
      icon: Wrench
    },
    {
      title: "Observe before automating",
      description: "If I can't answer 'what is the current state' and 'how do I know it's healthy', I don't automate it yet.",
      icon: Eye
    },
    {
      title: "Cost is a constraint",
      description: "Over-provisioned infrastructure isn't well-designed. I right-size and use reserved capacity.",
      icon: DollarSign
    },
    {
      title: "Document or it doesn't exist",
      description: "Runbooks, ADRs, on-call handoffs. Can someone who's never seen this debug it at 3am?",
      icon: BookOpen
    }
  ];

  return (
    <section id="philosophy" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-56 h-56 bg-orange-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-500/5 rounded-full blur-xl animate-pulse"></div>
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
              <span className="text-purple-400">How I</span>{" "}
              <span className="text-white">Work</span>
            </h2>
            <p className="text-xl text-gray-300">
              My engineering principles and approach to infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 hover:scale-105 transition-transform"
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 text-center">{principle.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-center">{principle.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;
