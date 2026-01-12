const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            <p className="text-gray-400">
              Built with ❤️ by <span className="text-purple-400 font-semibold">Adetola Adedoyin</span>
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-gray-400">
            <span className="text-sm">
              © {new Date().getFullYear()} All rights reserved
            </span>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-emerald-400">Available for work</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
