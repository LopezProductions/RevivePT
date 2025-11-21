function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-500 flex justify-between items-center">
        <p>© {new Date().getFullYear()} Lopez Productions</p>
        <div className="flex items-center gap-4">
          <a
            href="https://lopezproductions.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            Browse More Templates →
          </a>
          <p className="text-primary font-semibold">ShieldCare Health Template v1.0</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

