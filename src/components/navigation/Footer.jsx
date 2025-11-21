function Footer() {
  return (
    <footer className="border-t border-revive-soft bg-white/80">
      <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-500 flex justify-between items-center">
        <p>© {new Date().getFullYear()} RevivePT</p>
        <div className="flex items-center gap-4">
          <a
            href="https://lopezproductions.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-revive-teal hover:text-revive-green font-semibold transition-colors"
          >
            Browse More Templates →
          </a>
          <p className="text-revive-green font-semibold">RevivePT Physical Therapy v1.0</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

