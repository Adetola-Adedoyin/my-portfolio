import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Zap, Settings, Globe, Shield, BarChart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[70vh] flex items-center relative pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-orange-500/10 rounded-full blur-md animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-1">
                <img 
                  src="/profile.jpg.jpg" 
                  alt="Adetola Adedoyin" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <p className="text-sm text-emerald-400 font-medium">
                  Available for opportunities · Lagos · Remote · Open to relocation
                </p>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-purple-400">Adetola</span>{" "}
                <span className="text-white">Adedoyin</span>
              </h1>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed text-center mx-auto">
            Infrastructure Engineer passionate about building{" "}
            <span className="text-orange-400 font-semibold">reliable systems</span> that scale.
            Specializing in AWS, Kubernetes, and Terraform to create robust, 
            maintainable infrastructure that teams can depend on.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="colorful-card px-6 py-3">
              <span className="text-purple-300 font-medium flex items-center gap-2">
                <Globe className="w-4 h-4" /> Cloud Architecture
              </span>
            </div>
            <div className="warm-card px-6 py-3">
              <span className="text-orange-300 font-medium flex items-center gap-2">
                <Zap className="w-4 h-4" /> DevOps Excellence
              </span>
            </div>
            <div className="glass-card px-6 py-3">
              <span className="text-blue-300 font-medium flex items-center gap-2">
                <Settings className="w-4 h-4" /> Infrastructure as Code
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-gray-400 mb-8">
            <a href="mailto:adetoladedoyin001@gmail.com" className="hover:text-purple-400 transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" /> adetoladedoyin001@gmail.com
            </a>
            <a href="https://github.com/Adetola-Adedoyin" className="hover:text-blue-400 transition-colors flex items-center gap-2">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="https://linkedin.com/in/adetola-adedoyin" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>

          {/* Floating tech icons */}
          <div className="flex justify-center gap-8 mt-12">
            <Zap className="w-8 h-8 text-yellow-400 animate-bounce" style={{animationDelay: '0s'}} />
            <Settings className="w-8 h-8 text-blue-400 animate-bounce" style={{animationDelay: '0.2s'}} />
            <Globe className="w-8 h-8 text-green-400 animate-bounce" style={{animationDelay: '0.4s'}} />
            <Shield className="w-8 h-8 text-red-400 animate-bounce" style={{animationDelay: '0.6s'}} />
            <BarChart className="w-8 h-8 text-purple-400 animate-bounce" style={{animationDelay: '0.8s'}} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;