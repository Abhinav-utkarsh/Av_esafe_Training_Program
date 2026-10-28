
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Update navbar appearance while scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top when Home/logo is clicked
  const handleHomeClick = (event) => {
    setMenuOpen(false);

    if (location.pathname === "/") {
      event.preventDefault();

      if (window.location.hash) {
        navigate("/", { replace: true });
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // Navigate to a section on the home page
  const handleSectionClick = (event, sectionId) => {
    event.preventDefault();
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Keep the URL hash in sync
      window.history.replaceState(null, "", `/#${sectionId}`);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const links = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Program", to: "/#tracks", sectionId: "tracks" },
    { label: "Our Mentors", to: "/mentors" },
    { label: "FAQs", to: "/#faq", sectionId: "faq" },
  ];

  const closeMenu = () => setMenuOpen(false);

  // Navigate to Apply section from any page
  const handleApplyClick = (event) => {
    handleSectionClick(event, "apply");
  };

  return (
    <header
      className={`site-header${isScrolled ? " is-scrolled" : ""}`}
    >
      <div className="container header-inner">
        <Link
          to="/"
          className="brand"
          aria-label="Av_eSAFE home"
          onClick={handleHomeClick}
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
          aria-label={
            menuOpen ? "Close navigation" : "Open navigation"
          }
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
              key={link.label}
              to={link.to}
              onClick={(event) => {
                if (link.label === "Home") {
                  handleHomeClick(event);
                } else if (link.sectionId) {
                  handleSectionClick(event, link.sectionId);
                } else {
                  closeMenu();
                }
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            className="button button-primary nav-cta"
            to="/#apply"
            onClick={handleApplyClick}
          >
            Apply now <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
