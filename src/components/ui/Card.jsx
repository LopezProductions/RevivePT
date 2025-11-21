function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-revive-soft bg-white p-5 shadow-sm hover:shadow-md transition">
      {title && <h3 className="text-revive-green text-sm font-heading font-semibold">{title}</h3>}
      <div className="mt-2 text-sm text-slate-600 font-body">{children}</div>
    </div>
  );
}

export default Card;

