import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing my infrastructure and development work",
      tech: ["React", "Netlify", "Modern Design"],
      link: "https://adetola-adedoyin.netlify.app",
      emoji: "🌐"
    },
    {
      title: "Cloud Infrastructure",
      description: "AWS-based infrastructure projects with Terraform and Kubernetes",
      tech: ["AWS", "Terraform", "Kubernetes"],
      link: "https://adetola-adedoyin.netlify.app",
      emoji: "☁️"
    },
    {
      title: "DevOps Automation",
      description: "CI/CD pipelines and automation tools for reliable deployments",
      tech: ["GitHub Actions", "Docker", "Automation"],
      link: "https://adetola-adedoyin.netlify.app",
      emoji: "🚀"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-purple-400">My</span>{" "}
              <span className="text-white">Projects</span>
            </h2>
            <p className="text-xl text-gray-300">
              Explore my work and infrastructure solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="colorful-card p-6 hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-4 text-center">{project.emoji}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-white transition-colors text-sm font-medium"
                >
                  <span>View Project</span>
                  <span>→</span>
                </a>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://adetola-adedoyin.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 warm-card px-8 py-4 hover:scale-105 transition-transform"
            >
              <span className="text-2xl">🔗</span>
              <div>
                <div className="text-white font-semibold">Visit Full Portfolio</div>
                <div className="text-gray-300 text-sm">adetola-adedoyin.netlify.app</div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;