import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/quote", label: "Quote" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <header className="border-b border-revive-soft bg-white backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-heading text-xl font-semibold text-revive-green">
          <svg
            className="h-8 w-8 text-revive-teal"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span>RevivePT</span>
        </div>

        <div className="hidden sm:flex gap-6 text-sm">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "text-revive-teal font-semibold" : "text-slate-700 hover:text-revive-green transition-colors"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

