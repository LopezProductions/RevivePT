function SectionHeader({ label, title, description }) {
  return (
    <header className="space-y-2">
      {label && (
        <p className="text-xs uppercase tracking-widest text-primary font-heading">
          {label}
        </p>
      )}
      {title && (
        <h2 className="text-2xl font-heading font-semibold text-primary-dark">{title}</h2>
      )}
      {description && (
        <p className="text-sm text-neutral-dark max-w-2xl font-body">{description}</p>
      )}
    </header>
  );
}

export default SectionHeader;

