const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-mono">
            © {new Date().getFullYear()} Adetola Adedoyin
          </p>
          <p className="text-xs">
            Built with systems thinking. No frameworks were over-engineered in the making of this portfolio.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
