
import {
  ArrowRight,
  GraduationCap,
  Lightbulb,
  Target,
  X,
  Menu,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";
import "./Founder.css";

// Header must be outside the Founder component
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/" aria-label="Av_eSAFE home">
          <span>Abhinav Utkarsh</span>
        </a>

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
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            className="button button-primary nav-cta"
            href="/#apply"
            onClick={() => setMenuOpen(false)}
          >
            Back <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}

function Founder() {
  return (
    <main className="founder-page">
      <Header />

      <section className="founder-hero">
        <div className="founder-eyebrow">
          <span /> THE PERSON BEHIND AV_eSAFE
        </div>

        <div className="founder-content">
          <div className="founder-photo-placeholder">
            <GraduationCap size={64} strokeWidth={1.3} />
            <span>FOUNDER PORTRAIT</span>
          </div>

          <div className="founder-intro">
            <p className="founder-kicker">MEET OUR FOUNDER</p>

            <h1>
              Turning ideas into
              <span> meaningful impact.</span>
            </h1>

            <h2>Founder &amp; Technology Enthusiast</h2>

            <p>
              Hello! I'm the founder of Av_eSAFE Technology Solutions.
              I believe technology and practical learning can open doors
              to new opportunities for students and aspiring professionals.
            </p>

            <p>
              Av_eSAFE was created with a vision to make technology
              education more practical, accessible, and connected to
              real-world challenges.
            </p>

            <a href="#founder-mission" className="founder-cta">
              Discover my vision <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="founder-mission" id="founder-mission">
        <div className="founder-section-heading">
          <span>THE VISION</span>
          <h2>Why I started Av_eSAFE</h2>
          <p>
            Demo content — this section will be updated with the
            founder's real story and motivations.
          </p>
        </div>

        <div className="founder-values">
          <article>
            <Lightbulb size={28} />
            <h3>Innovation</h3>
            <p>
              Exploring useful technology and turning ideas into
              practical solutions.
            </p>
          </article>

          <article>
            <GraduationCap size={28} />
            <h3>Education</h3>
            <p>
              Helping learners develop skills through hands-on
              projects and guided learning.
            </p>
          </article>

          <article>
            <Target size={28} />
            <h3>Purpose</h3>
            <p>
              Building meaningful digital experiences that address
              real needs and challenges.
            </p>
          </article>
        </div>
      </section>

      <section className="founder-bottom">
        <h2>Let's build something meaningful.</h2>
        <p>
          Explore the Av_eSAFE Training program and take your next step.
        </p>
        <a href="/#apply" className="founder-cta">
          Explore the program <ArrowRight size={17} />
        </a>
      </section>

      <footer className="founder-footer">
        © {new Date().getFullYear()} Av_eSAFE Technology Solutions
      </footer>
    </main>
  );
}

export default Founder;
