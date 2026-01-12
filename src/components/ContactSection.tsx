import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block">// get in touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's talk about how we can build something great together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-muted-foreground mb-2">
                  name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-mono text-foreground"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-mono text-muted-foreground mb-2">
                  email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-mono text-foreground"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-mono text-muted-foreground mb-2">
                  message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-mono text-foreground resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="group w-full px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg overflow-hidden transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="p-8 rounded-xl glass-card cyber-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Let's Build Together</h3>
              <p className="text-muted-foreground mb-8">
                Whether you're looking to scale your infrastructure, automate your deployments, 
                or migrate to the cloud, I'm here to help. Drop me a message and let's discuss 
                your needs.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <Mail className="text-primary" size={20} />
                  <span className="font-mono">hello@devops-engineer.dev</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="w-12 h-12 rounded-lg bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                    aria-label={link.label}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Status indicator */}
            <div className="mt-6 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-sm text-muted-foreground">Available for new projects</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;