import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-mono text-foreground font-bold">
              adetola<span className="text-primary">.dev</span>
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              DevOps & Cloud Infrastructure Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Adetola-Adedoyin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/adetola-adedoyin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://twitter.com/adetola_adedoyin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <Twitter size={18} />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>© {new Date().getFullYear()} Adetola Adedoyin</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
