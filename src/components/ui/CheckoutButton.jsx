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
      rel="noopener noreferrer"
      className={`px-8 py-3 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg ${
        tier === "premium"
          ? "bg-revive-teal text-white hover:bg-revive-green font-body"
          : "border-2 border-revive-teal text-revive-green hover:bg-revive-teal hover:text-white font-body"
      } ${disabled ? "opacity-40 pointer-events-none" : ""} ${className}`}
    >
      {children || (tier === "premium" ? "Buy Premium Template – $250" : "Buy Basic Template – $50")}
    </a>
  );
}

export default CheckoutButton;



