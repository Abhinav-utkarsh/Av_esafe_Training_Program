import { Link } from "react-router-dom";
import {
  ArrowRight,
  GraduationCap,
  Lightbulb,
  Target,
  UserRound,
} from "lucide-react";

import Navbar from "../components/Navbar";
import "./Founder.css";

export default function Founder() {
  return (
    <div className="founder-page">
      {/* Shared website navbar */}
      <Navbar />

      {/* Founder Hero Section */}
      <main>
        <section className="founder-hero">
          <div className="founder-eyebrow">
            <span />
            THE PERSON BEHIND AV_eSAFE
          </div>

          <div className="founder-content">
            {/* Founder Photo Placeholder */}
            <div
              className="founder-photo-placeholder"
              aria-label="Founder photo placeholder"
            >
              <UserRound size={76} strokeWidth={1.2} />
              <span>FOUNDER & DEVELOPER</span>
            </div>

            {/* Founder Introduction */}
            <div className="founder-intro">
              <p className="founder-kicker">MEET THE FOUNDER</p>

              <h1>
                Building technology.
                <span>Empowering people.</span>
              </h1>

              <h2>
                The vision behind Av_eSAFE Training
              </h2>

              <p>
                Av_eSAFE was created with a simple vision: make technology
                education practical, accessible, and career-focused. Learning
                should go beyond theory and help students develop the skills
                and confidence needed to build real-world solutions.
              </p>

              <p>
                Through Av_eSAFE Training, the goal is to bridge the gap
                between classroom learning and industry expectations with
                structured learning paths, hands-on practice, and project-based
                experiences.
              </p>

              <p>
                The journey is driven by curiosity, continuous learning, and
                the belief that the right guidance and practical exposure can
                help learners take their next step in technology.
              </p>

              <Link to="/#tracks" className="founder-cta">
                Explore Our Programs
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="founder-mission">
          <div className="founder-section-heading">
            <span>OUR PURPOSE</span>

            <h2>Learning that leads to real opportunities</h2>

            <p>
              We want to make technology education more engaging, practical,
              and relevant to the skills learners need to grow.
            </p>
          </div>

          <div className="founder-values">
            <article>
              <GraduationCap size={28} />

              <h3>Practical Learning</h3>

              <p>
                Learn core concepts through hands-on exercises, coding
                practice, and real-world projects instead of theory alone.
              </p>
            </article>

            <article>
              <Lightbulb size={28} />

              <h3>Innovation First</h3>

              <p>
                Explore modern technologies, experiment with ideas, and
                develop the problem-solving mindset needed in a changing
                technology landscape.
              </p>
            </article>

            <article>
              <Target size={28} />

              <h3>Career Readiness</h3>

              <p>
                Build confidence through structured learning, assessments,
                and practical skills that support your journey toward a
                technology career.
              </p>
            </article>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="founder-bottom">
          <h2>Your journey into technology starts here.</h2>

          <p>
            Explore our learning programs, strengthen your foundations, and
            take the next step toward becoming career-ready.
          </p>

          <Link to="/#tracks" className="founder-cta">
            Start Learning
            <ArrowRight size={18} />
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="founder-footer">
        <p>
          © {new Date().getFullYear()} Av_eSAFE Training. All rights reserved.
        </p>
      </footer>
    </div>
  );
}