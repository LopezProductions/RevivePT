function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      {title && <h3 className="text-slate-900 text-sm font-semibold">{title}</h3>}
      <div className="mt-2 text-sm text-slate-600">{children}</div>
    </div>
  );
}

export default Card;

