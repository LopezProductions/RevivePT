import { STRIPE } from "../../config/stripeLinks.js";

function CheckoutButton({ tier = "basic", children, className = "" }) {
  const url =
    tier === "premium"
      ? STRIPE.PREMIUM
      : STRIPE.BASIC;

  const disabled = !url || url.includes("YOUR_");

  return (
    <a
      href={disabled ? "#" : url}
      target="_blank"
      className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
        tier === "premium"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "border border-blue-600 text-blue-600 hover:bg-blue-50"
      } ${disabled ? "opacity-40 pointer-events-none" : ""} ${className}`}
    >
      {children || (tier === "premium" ? "Buy Premium – $250" : "Buy Basic – $50")}
    </a>
  );
}

export default CheckoutButton;


