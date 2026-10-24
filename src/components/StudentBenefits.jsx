
import {
  FileText,
  MessageSquare,
  Users,
  BrainCircuit,
  GraduationCap,
  Award,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import "./StudentBenefits.css";

const benefits = [
  {
    number: "01",
    title: "Personalized Resume Building",
    description:
      "Improve your resume structure, highlight relevant skills, and present your projects and experience clearly.",
    icon: FileText,
    tags: ["Resume review", "Project highlights"],
  },
  {
    number: "02",
    title: "Technical Interview Practice",
    description:
      "Strengthen your fundamentals and practise explaining technical concepts, coding tasks, and project decisions.",
    icon: MessageSquare,
    tags: ["Technical rounds", "Mock interviews"],
  },
  {
    number: "03",
    title: "Managerial & HR Preparation",
    description:
      "Prepare for behavioral questions, teamwork scenarios, communication, and common HR interview discussions.",
    icon: Users,
    tags: ["Behavioral questions", "HR preparation"],
  },
  {
    number: "04",
    title: "Practical Project Experience",
    description:
      "Apply your learning through guided development projects, including opportunities to explore AI-based applications.",
    icon: BrainCircuit,
    tags: ["Hands-on practice", "AI project concepts"],
  },
  {
    number: "05",
    title: "Mentor Guidance",
    description:
      "Get structured guidance as you learn, work through challenges, and improve your technical and professional skills.",
    icon: GraduationCap,
    tags: ["Guided learning", "Skill development"],
  },
  {
    number: "06",
    title: "Achievement & Recognition",
    description:
      "Receive a training completion certificate subject to program requirements. The top five performers may be eligible for a Letter of Recommendation under published criteria.",
    icon: Award,
    tags: ["Completion criteria", "Merit-based recognition"],
  },
];

function StudentBenefits() {
  return (
    <section
      className="student-benefits"
      id="benefits"
      aria-labelledby="student-benefits-title"
    >
      <div className="student-benefits__container">
        <div className="student-benefits__eyebrow">
          <span />
          MORE VALUE FOR YOUR NEXT STEP
        </div>

        <div className="student-benefits__heading">
          <div className="student-benefits__heading-copy">
            <h2 id="student-benefits-title">
              More than training.
              <span> Support that moves you forward.</span>
            </h2>

            <p>
              Build practical skills, communicate your strengths, and prepare
              for career opportunities with structured guidance and practice.
            </p>
          </div>

          <a className="student-benefits__top-link" href="#apply">
            Start your journey
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="student-benefits__grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                className="student-benefit-card"
                key={benefit.number}
              >
                <div className="student-benefit-card__top">
                  <div className="student-benefit-card__icon">
                    <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  <span>{benefit.number}</span>
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>

                <div className="student-benefit-card__tags">
                  {benefit.tags.map((tag) => (
                    <span key={tag}>
                      <CheckCircle2 size={13} aria-hidden="true" />
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="student-benefits__note">
          <div className="student-benefits__note-icon">
            <GraduationCap size={23} aria-hidden="true" />
          </div>

          <div>
            <h3>Prepare with confidence. Progress with purpose.</h3>
            <p>
              Av_eSAFE provides training and placement support. Participation
              does not guarantee a job, internship, or placement.
            </p>
          </div>

          <a href="#apply" aria-label="Enquire about the program">
            Enquire now
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default StudentBenefits;
