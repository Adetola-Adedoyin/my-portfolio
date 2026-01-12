import { motion } from "framer-motion";
import { ArrowDown, Cloud, Server, GitBranch } from "lucide-react";

const roles = [
  "DevOps Engineer",
  "Cloud Infrastructure Specialist",
  "AWS Enthusiast",
  "Containerization Expert",
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 text-primary/20"
        >
          <Cloud size={120} />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/3 right-1/4 text-primary/20"
        >
          <Server size={100} />
        </motion.div>
        <motion.div
          animate={{ 
            rotate: [0, 360],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/3 right-1/3 text-primary/20"
        >
          <GitBranch size={80} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg shadow-primary/20"
          >
            <img 
              src="https://adetola-adedoyin.netlify.app/profile.jpg" 
              alt="Adetola Adedoyin"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Terminal-style greeting */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-primary text-sm mb-4"
          >
            <span className="text-muted-foreground">$</span> whoami
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm{" "}
            <span className="text-gradient">Adetola Adedoyin</span>
          </motion.h1>

          {/* Animated roles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="h-12 mb-8 overflow-hidden"
          >
            <motion.div
              animate={{ y: [0, -48, -96, -144, 0] }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                times: [0, 0.25, 0.5, 0.75, 1]
              }}
            >
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="h-12 flex items-center justify-center text-xl md:text-2xl text-muted-foreground font-mono"
                >
                  {role}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
          >
            Results-driven DevOps and Cloud Infrastructure Engineer with hands-on experience 
            deploying and managing scalable cloud infrastructure using AWS, Terraform, 
            and containerization tools.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-primary/60"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
