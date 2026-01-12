import { motion } from "framer-motion";

const ArchitectSummary = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-orange-500/5 to-pink-500/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-purple-400">About</span>{" "}
              <span className="text-white">Me</span>
            </h2>
            <p className="text-xl text-gray-300">
              Building reliable infrastructure that teams can depend on
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="colorful-card p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                My Approach
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I've been building and operating production infrastructure on AWS for the past year. 
                  My focus is on creating systems that are reliable, scalable, and maintainable.
                </p>
                <p>
                  I believe in choosing the right tools for the job, not the newest ones. 
                  Terraform for infrastructure, Kubernetes for orchestration, and solid CI/CD pipelines 
                  that teams can trust.
                </p>
              </div>
            </div>

            <div className="warm-card p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                What I Do
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  My job is ensuring deployments are smooth and failures don't cascade. 
                  I write the automation, set up comprehensive monitoring, and yes - 
                  I get paged when things go wrong.
                </p>
                <p>
                  I'm passionate about infrastructure as code, observability, and building 
                  systems that let developers focus on what they do best.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="text-2xl">📈</span>
              Experience Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🏢</div>
                <h4 className="font-semibold text-white mb-2">Current Role</h4>
                <p className="text-gray-300 text-sm">
                  Infrastructure Engineer at Cyberspace Limited (Lagos)
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Multi-tier AWS, GitHub Actions, Docker
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-2">🏫</div>
                <h4 className="font-semibold text-white mb-2">Previous Experience</h4>
                <p className="text-gray-300 text-sm">
                  IT Management for ~200 users
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Ekiti State University Staff School
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-2">🎓</div>
                <h4 className="font-semibold text-white mb-2">Education</h4>
                <p className="text-gray-300 text-sm">
                  BSc Educational Technology
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  University of Ilorin
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectSummary;
