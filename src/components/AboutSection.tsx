import { motion } from "framer-motion";
import { Cpu, Zap, Shield, Rocket, GraduationCap, Award, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    title: "Infrastructure as Code",
    description: "Terraform, CloudFormation – everything versioned and repeatable.",
  },
  {
    icon: Zap,
    title: "CI/CD Pipelines",
    description: "Automated pipelines with GitHub Actions that deploy with confidence.",
  },
  {
    icon: Shield,
    title: "System Monitoring",
    description: "Prometheus, Grafana, and custom scripts for full visibility.",
  },
  {
    icon: Rocket,
    title: "Cloud Native",
    description: "Kubernetes, Docker, and microservices at scale.",
  },
];

const experience = [
  {
    role: "DevOps and Cloud Infrastructure Engineer Trainee",
    company: "Cyberspace Limited",
    location: "Lagos",
    period: "04/2025 - Present",
    highlights: [
      "Designed and deployed fully automated multi-tier web application on AWS using EC2, VPC, subnets, security groups, and Terraform",
      "Built and containerized Spring Boot applications using Docker, automated deployment with GitHub Actions",
      "Configured monitoring tools and scripts to track system logs and uptime on virtual machines",
    ],
  },
  {
    role: "Head of Department / Tech Support Specialist",
    company: "Ekiti State University Staff School",
    location: "Ekiti",
    period: "09/2023 - 07/2024",
    highlights: [
      "Streamlined ICT processes by automating administrative workflows",
      "Supported 200+ users managing system-level tasks and network troubleshooting",
    ],
  },
];

const certifications = [
  {
    name: "Microsoft Office Specialist: Excel Associate (MOS-200)",
    issuer: "Microsoft",
    date: "06/2025",
  },
  {
    name: "AI-augmented Professional Development Skills",
    issuer: "ALX Africa",
    date: "08/2024",
  },
  {
    name: "Certified Teacher",
    issuer: "Teachers Registration Council of Nigeria",
    date: "11/2023",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block">// about me</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Engineering the <span className="text-gradient">Cloud</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Results-driven DevOps and Cloud Infrastructure Engineer with hands-on experience deploying 
            and managing scalable cloud infrastructure using AWS, Terraform, and containerization tools 
            like Docker and Kubernetes. Skilled in building CI/CD pipelines, automating infrastructure 
            provisioning, and ensuring system reliability with monitoring and scripting.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl glass-card cyber-border hover:border-primary/60 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Experience</h3>
          </div>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl glass-card cyber-border"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
                    <p className="text-primary font-mono text-sm">{exp.company}</p>
                  </div>
                  <div className="text-muted-foreground text-sm font-mono mt-2 md:mt-0">
                    {exp.location} | {exp.period}
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-xl glass-card cyber-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground">University of Ilorin</h4>
              <p className="text-primary font-mono text-sm">BSc [Ed] Educational Technology</p>
              <p className="text-muted-foreground text-sm mt-1">Graduated: 07/2023</p>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-xl glass-card cyber-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-2 border-primary/30 pl-4">
                  <h4 className="text-sm font-semibold text-foreground">{cert.name}</h4>
                  <p className="text-muted-foreground text-xs font-mono">{cert.issuer} • {cert.date}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "1+", label: "Years in DevOps" },
            { value: "10+", label: "Projects Deployed" },
            { value: "200+", label: "Users Supported" },
            { value: "∞", label: "Pipelines Automated" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient font-mono mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
