import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-lg animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-purple-400">Let's Build</span>{" "}
              <span className="text-white">Something Amazing</span>
            </h2>
            <p className="text-xl text-gray-300">
              Ready to collaborate on your next infrastructure project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="colorful-card p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="text-2xl">💼</span>
                Looking For
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Infrastructure roles where reliability and innovation matter. 
                Remote opportunities or Lagos-based positions. 
                Open to relocation for the right team and challenge.
              </p>
            </div>

            <div className="warm-card p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:adetoladedoyin001@gmail.com" 
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">📧</span>
                  <span>adetoladedoyin001@gmail.com</span>
                </a>
                
                <a 
                  href="https://github.com/Adetola-Adedoyin" 
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">🐙</span>
                  <span>github.com/Adetola-Adedoyin</span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/adetola-adedoyin" 
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">💼</span>
                  <span>linkedin.com/in/adetola-adedoyin</span>
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 mt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              <span>⏱️</span>
              I respond to specific inquiries within 48 hours. 
              Quality conversations get priority over generic messages.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
