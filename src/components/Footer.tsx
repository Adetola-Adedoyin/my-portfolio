import { Terminal, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              © 2024 DevOps Engineer. All rights reserved.
            </span>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-destructive fill-current" />
            <span>and</span>
            <span className="text-primary font-mono">code</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;