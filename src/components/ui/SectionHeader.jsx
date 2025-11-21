function SectionHeader({ label, title, description }) {
  return (
    <header className="space-y-2">
      {label && (
        <p className="text-xs uppercase tracking-widest text-blue-600">
          {label}
        </p>
      )}
      {title && (
        <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
      )}
      {description && (
        <p className="text-sm text-slate-600 max-w-2xl">{description}</p>
      )}
    </header>
  );
}

export default SectionHeader;

