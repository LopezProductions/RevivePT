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
    <header className="border-b border-slate-200 bg-white backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400"></div>
          <p className="text-sm font-semibold text-slate-900">SafeShield Insurance</p>
        </div>

        <div className="hidden sm:flex gap-6 text-sm">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
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

