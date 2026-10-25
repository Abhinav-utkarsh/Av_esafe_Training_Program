
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "About Us", to: "/about" },
    { label: "Program", to: "/#tracks" },
    { label: "How it works", to: "/#process" },
    { label: "FAQs", to: "/#faq" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        
<Link
  to="/"
  className="brand"
  aria-label="Av_eSAFE home"
  onClick={closeMenu}
>
  <span className="brand-content">
    <img
      src="/logo.png"
      alt="Av_eSAFE"
      className="brand-logo"
    />
    <span className="brand-tagline">
      Classroom to Career-Ready
    </span>
  </span>
</Link>


        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          className={`main-nav${menuOpen ? " main-nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}

          <Link
            className="button button-primary nav-cta"
            to="/#apply"
            onClick={closeMenu}
          >
            Apply now <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
