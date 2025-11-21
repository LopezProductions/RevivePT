function Button({ children, variant = "primary", className = "", ...props }) {
  const base =
    "px-5 py-2 rounded-full text-sm font-semibold transition-all";

  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline:
      "border border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;

