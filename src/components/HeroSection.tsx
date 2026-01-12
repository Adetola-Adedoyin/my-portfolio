import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-[70vh] flex items-center relative pt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <p className="text-sm text-emerald-400 font-medium">
              Available for opportunities · Lagos · Remote · Open to relocation
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Adetola</span>{" "}
            <span className="text-white">Adedoyin</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Infrastructure Engineer passionate about building{" "}
            <span className="text-gradient-warm font-semibold">reliable systems</span> that scale.
            Specializing in AWS, Kubernetes, and Terraform.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="colorful-card px-6 py-3">
              <span className="text-purple-300 font-medium">☁️ Cloud Architecture</span>
            </div>
            <div className="warm-card px-6 py-3">
              <span className="text-orange-300 font-medium">🚀 DevOps Excellence</span>
            </div>
            <div className="glass-card px-6 py-3">
              <span className="text-blue-300 font-medium">🔧 Infrastructure as Code</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-gray-400">
            <a href="mailto:adetoladedoyin001@gmail.com" className="hover:text-purple-400 transition-colors flex items-center gap-2">
              <span>📧</span> adetoladedoyin001@gmail.com
            </a>
            <a href="https://github.com/Adetola-Adedoyin" className="hover:text-blue-400 transition-colors flex items-center gap-2">
              <span>🐙</span> GitHub
            </a>
            <a href="https://linkedin.com/in/adetola-adedoyin" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
              <span>💼</span> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
