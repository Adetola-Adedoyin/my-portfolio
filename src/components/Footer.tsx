const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Adetola Adedoyin
        </p>
      </div>
    </footer>
  );
};

export default Footer;
