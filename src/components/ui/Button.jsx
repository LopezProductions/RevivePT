function Button({ children, variant = "primary", className = "", ...props }) {
  const base =
    "px-5 py-2 rounded-full text-sm font-semibold transition-all";

  const styles = {
    primary: "bg-revive-teal text-white hover:bg-revive-green font-body shadow-md hover:shadow-lg",
    outline:
      "border border-revive-teal text-revive-green hover:bg-revive-teal hover:text-white font-body",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;

