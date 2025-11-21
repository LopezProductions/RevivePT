function Button({ children, variant = "primary", className = "", ...props }) {
  const base =
    "px-5 py-2 rounded-full text-sm font-semibold transition-all";

  const styles = {
    primary: "bg-primary text-white hover:bg-primary-dark font-body",
    outline:
      "border border-neutral text-neutral-dark hover:border-primary hover:text-primary font-body",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;

