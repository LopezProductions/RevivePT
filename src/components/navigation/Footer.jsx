function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-600 flex justify-between">
        <p>© {new Date().getFullYear()} SafeShield Insurance</p>
        <p className="text-blue-600 font-semibold">Licensed Insurance Agency</p>
      </div>
    </footer>
  );
}

export default Footer;

