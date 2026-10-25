import {
  ArrowRight,
  GraduationCap,
  Lightbulb,
  Target,
  Code2,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      {/* Shared Navbar */}
      <Navbar />

      <main>
        {/* About Hero */}
        <section className="about-hero">
          <div className="about-eyebrow">
            <span />
            ABOUT AV_eSAFE
          </div>

          <h1>
            Technology learning,
            <span> with a purpose.</span>
          </h1>

          <p>
            We believe everyone deserves the opportunity to learn technology
            through practical experience, creativity, and continuous growth.
          </p>

          <Link to="/founder" className="about-cta">
            Meet our founder <ArrowRight size={17} />
          </Link>
        </section>

        {/* Mission and Values */}
        <section className="about-mission">
          <div className="about-section-heading">
            <span>OUR MISSION</span>

            <h2>Making technology more practical and accessible</h2>

            <p>
              Av_eSAFE Training Program aims to help students and aspiring
              developers build technical knowledge through structured
              learning, coding practice, and project-based exploration.
            </p>
          </div>

          <div className="about-values">
            <article>
              <Code2 size={30} />

              <h3>Practical Learning</h3>

              <p>
                Explore programming concepts and strengthen your
                understanding through hands-on practice.
              </p>
            </article>

            <article>
              <Lightbulb size={30} />

              <h3>Innovation</h3>

              <p>
                Encourage curiosity, creative thinking, and turning
                ideas into useful digital solutions.
              </p>
            </article>

            <article>
              <GraduationCap size={30} />

              <h3>Skill Development</h3>

              <p>
                Build a strong foundation in essential technology
                skills and keep growing with every project.
              </p>
            </article>

            <article>
              <Target size={30} />

              <h3>Career Preparation</h3>

              <p>
                Work towards career readiness through skill development
                and interview preparation.
              </p>
            </article>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="about-bottom">
          <h2>Your next chapter in technology starts here.</h2>

          <p>
            Explore the training program and take your next step
            towards building practical skills.
          </p>

          <Link to="/#apply" className="about-cta">
            Explore the program <ArrowRight size={17} />
          </Link>
        </section>
      </main>
    </div>
  );
}