
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  FileText,
  MessageSquare,
  Users,
  BrainCircuit,
  GraduationCap,
  Award,
  ArrowUpRight,
  CheckCircle2,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import "./StudentBenefits.css";

const benefits = [
  {
    number: "01",
    title: "Personalized Resume Building",
    shortDescription:
      "Create a professional resume that highlights your skills and projects.",
    details:
      "Build a professional resume that presents your skills, academic background, projects, certifications, and achievements clearly. Learn how to showcase your strengths so recruiters can better understand your potential.",
    points: [
      "Professional resume structure and formatting",
      "Highlight relevant technical skills and projects",
      "Improve your profile for entry-level opportunities",
      "Present your achievements effectively",
    ],
    icon: FileText,
    tag: "Career Essentials",
  },
  {
    number: "02",
    title: "Technical Interview Practice",
    shortDescription:
      "Strengthen your fundamentals and practice technical questions.",
    details:
      "Prepare for technical interviews with focused practice on subjects relevant to your learning track. Strengthen your understanding of technical concepts and learn to explain your approach confidently.",
    points: [
      "Practice role-relevant technical questions",
      "Strengthen programming and subject fundamentals",
      "Explain solutions step by step",
      "Identify areas for improvement",
    ],
    icon: MessageSquare,
    tag: "Interview Readiness",
  },
  {
    number: "03",
    title: "Managerial & HR Preparation",
    shortDescription:
      "Prepare for HR discussions, behavioral questions, and workplace scenarios.",
    details:
      "Get familiar with common HR and managerial interview questions. Learn to structure your answers, communicate your experiences, discuss your strengths, and approach workplace scenarios professionally.",
    points: [
      "Practice common HR interview questions",
      "Learn the STAR method for behavioral answers",
      "Improve professional communication",
      "Prepare for situational questions",
    ],
    icon: Users,
    tag: "Communication",
  },
  {
    number: "04",
    title: "Practical Project Experience",
    shortDescription:
      "Apply what you learn through practical tasks and project activities.",
    details:
      "Move beyond theory by applying your knowledge to practical assignments and projects. Understand how concepts work in real development scenarios and learn to present your work during interviews.",
    points: [
      "Apply concepts through hands-on activities",
      "Build projects relevant to your learning track",
      "Develop debugging and problem-solving skills",
      "Explain project decisions in interviews",
    ],
    icon: BrainCircuit,
    tag: "Learn by Doing",
  },
  {
    number: "05",
    title: "Mentor Guidance",
    shortDescription:
      "Get direction on learning priorities, career preparation, and next steps.",
    details:
      "Get structured guidance to help you understand what to learn, where to focus, and how to prepare for your next career step. Mentorship is designed to bring clarity to your learning journey.",
    points: [
      "Guidance on learning priorities",
      "Support with technical preparation",
      "Suggestions for improving projects and profiles",
      "Direction for your career preparation",
    ],
    icon: GraduationCap,
    tag: "Guided Learning",
  },
  {
    number: "06",
    title: "Achievement & Recognition",
    shortDescription:
      "Showcase your learning progress and eligible achievements.",
    details:
      "Build confidence by tracking your progress and showcasing your completed work. Eligible participants may receive certificates or other recognition based on the program's published requirements.",
    points: [
      "Track learning and completed activities",
      "Showcase relevant projects and achievements",
      "Build evidence of your learning journey",
      "Understand applicable recognition criteria",
    ],
    icon: Award,
    tag: "Celebrate Progress",
  },
];

export default function StudentBenefits() {
  const [activeBenefit, setActiveBenefit] = useState(null);

  const closeModal = () => setActiveBenefit(null);

  useEffect(() => {
    if (!activeBenefit) return undefined;

    const previousOverflow = document.body.style.overflow;

    document.body.classList.add("student-benefit-modal-open");
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveBenefit(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("student-benefit-modal-open");
      document.body.style.overflow = previousOverflow;
    };
  }, [activeBenefit]);

  return (
    <>
      <section className="student-benefits-section" id="student-benefits">
        <div className="student-benefits-container">
          <div className="student-benefits-heading">
            <span className="student-benefits-eyebrow">
              <Sparkles size={15} />
              YOUR GROWTH, OUR PRIORITY
            </span>

            <h2>
              More Than Learning.
              <span>A Step Toward Your Career.</span>
            </h2>

            <p>
              Build practical skills, improve your confidence, and prepare for
              your next opportunity with support designed around your growth.
            </p>
          </div>

          <div className="student-benefits-grid">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.number}
                  className="student-benefit-card"
                  role="button"
                  tabIndex={0}
                  aria-haspopup="dialog"
                  aria-label={`Learn more about ${benefit.title}`}
                  onClick={() => setActiveBenefit(benefit)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveBenefit(benefit);
                    }
                  }}
                >
                  <div className="student-benefit-card-top">
                    <div className="student-benefit-icon">
                      <Icon size={25} strokeWidth={1.8} />
                    </div>

                    <span className="student-benefit-number">
                      {benefit.number}
                    </span>
                  </div>

                  <span className="student-benefit-tag">{benefit.tag}</span>

                  <h3>{benefit.title}</h3>

                  <p>{benefit.shortDescription}</p>

                  <div className="student-benefit-card-link">
                    Explore benefit
                    <ArrowUpRight size={17} />
                  </div>
                </article>
              );
            })}
          </div>

          <div className="student-benefits-footer">
            <div className="student-benefits-footer-icon">
              <GraduationCap size={25} />
            </div>

            <div className="student-benefits-footer-text">
              <h3>Your journey. Your skills. Your next opportunity.</h3>
              <p>
                Take the next step toward becoming career-ready with Av_eSAFE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {activeBenefit &&
        createPortal(
          <div
            className="student-benefit-modal-backdrop"
            onClick={closeModal}
          >
            <section
              className="student-benefit-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="student-benefit-modal-title"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="student-benefit-modal-top">
                <span className="student-benefit-modal-label">
                  <Sparkles size={14} />
                  AV_eSAFE STUDENT SUPPORT
                </span>

                <button
                  type="button"
                  className="student-benefit-modal__close"
                  onClick={closeModal}
                  aria-label="Close popup"
                  autoFocus
                >
                  <X size={21} />
                </button>
              </div>

              <div className="student-benefit-modal__icon">
                {(() => {
                  const Icon = activeBenefit.icon;
                  return <Icon size={30} strokeWidth={1.8} />;
                })()}
              </div>

              <span className="student-benefit-modal__eyebrow">
                BENEFIT {activeBenefit.number} · {activeBenefit.tag}
              </span>

              <h2 id="student-benefit-modal-title">
                {activeBenefit.title}
              </h2>

              <p className="student-benefit-modal__description">
                {activeBenefit.details}
              </p>

              <div className="student-benefit-modal__points">
                <h3>How this can help you</h3>

                {activeBenefit.points.map((point) => (
                  <div className="student-benefit-modal__point" key={point}>
                    <CheckCircle2 size={19} aria-hidden="true" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {activeBenefit.number === "06" && (
                <p className="student-benefit-modal__disclaimer">
                  Certificates and other recognition are subject to the
                  program's applicable requirements and published criteria.
                </p>
              )}

              <button
                type="button"
                className="student-benefit-modal__done"
                onClick={closeModal}
              >
                Got it
                <ArrowRight size={17} />
              </button>
            </section>
          </div>,
          document.body
        )}
    </>
  );
}
