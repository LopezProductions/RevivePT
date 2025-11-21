function SectionHeader({ label, title, description }) {
  return (
    <header className="space-y-2">
      {label && (
        <p className="text-xs uppercase tracking-widest text-revive-teal font-heading">
          {label}
        </p>
      )}
      {title && (
        <h2 className="text-2xl font-heading font-semibold text-revive-green">{title}</h2>
      )}
      {description && (
        <p className="text-sm text-slate-700 max-w-2xl font-body">{description}</p>
      )}
    </header>
  );
}

export default SectionHeader;

