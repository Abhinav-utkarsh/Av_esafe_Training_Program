
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowUpRight,
  Code2,
  BrainCircuit,
  TestTube2,
  Database,
  Workflow,
  Sparkles,
  CheckCircle2,
  X,
  ArrowRight,
  Layers3,
} from "lucide-react";

import "./ProjectShowcase.css";

const projects = [
  {
    number: "01",
    category: "WEB DEVELOPMENT",
    title: "Smart Business Dashboard",
    description:
      "Create an interactive dashboard to display business information, organize records, and present useful insights.",
    skills: ["React.js", "JavaScript", "CSS"],
    icon: Code2,
    type: "Application Development",
    overview:
      "Explore how modern web applications bring information together in a clean, interactive interface. Build a dashboard layout and practice presenting business data in a way that is easy to understand.",
    outcomes: [
      "Create reusable React components",
      "Design responsive layouts using CSS",
      "Display and organize information in a dashboard",
      "Practice JavaScript interactions and state management",
    ],
    deliverables: [
      "A responsive dashboard interface",
      "Reusable UI components",
      "A structured project you can demonstrate",
    ],
  },
  {
    number: "02",
    category: "AI & GENERATIVE AI",
    title: "AI-Powered Assistant",
    description:
      "Explore an intelligent assistant that answers questions, follows structured prompts, and helps automate everyday workflows.",
    skills: ["Prompt Engineering", "LLMs", "API Integration"],
    icon: BrainCircuit,
    type: "AI Application",
    featured: true,
    overview:
      "Explore how a generative AI application accepts a user's question, sends instructions to a language model, and presents a useful response. Learn the fundamentals of prompt design and integrating an AI API into an application.",
    outcomes: [
      "Understand system prompts and user prompts",
      "Practice zero-shot and few-shot prompting",
      "Connect a frontend to an AI API",
      "Learn about hallucinations and responsible AI usage",
    ],
    deliverables: [
      "An AI assistant interface",
      "Reusable prompt instructions",
      "A basic AI-powered interaction workflow",
    ],
  },
  {
    number: "03",
    category: "SOFTWARE TESTING",
    title: "Test Automation Framework",
    description:
      "Develop reusable automated tests to validate application functionality and report test execution results.",
    skills: ["Selenium", "Java", "TestNG"],
    icon: TestTube2,
    type: "Quality Engineering",
    overview:
      "Discover how software testers automate repetitive checks and verify application behavior. Practice structuring test scripts, organizing test cases, and understanding execution results.",
    outcomes: [
      "Understand Selenium WebDriver fundamentals",
      "Write automated tests using Java",
      "Organize test cases with TestNG",
      "Understand assertions and test execution reports",
    ],
    deliverables: [
      "A basic automated test suite",
      "Reusable test methods",
      "A test execution summary",
    ],
  },
  {
    number: "04",
    category: "DATABASE & ANALYTICS",
    title: "Data Insights Explorer",
    description:
      "Work with structured data, write database queries, and transform results into understandable summaries.",
    skills: ["SQL", "Data Analysis", "Visualization"],
    icon: Database,
    type: "Data Application",
    overview:
      "Learn how to extract meaningful information from structured data. Use SQL queries to filter, sort, and summarize records, then explore ways to present the results clearly.",
    outcomes: [
      "Write SELECT queries and apply filters",
      "Use sorting, grouping, and aggregate functions",
      "Practice JOIN operations on related tables",
      "Interpret query results and present key insights",
    ],
    deliverables: [
      "A collection of useful SQL queries",
      "Sample data summaries",
      "A simple data insights presentation",
    ],
  },
  {
    number: "05",
    category: "WORKFLOW AUTOMATION",
    title: "Smart Task Organizer",
    description:
      "Design a task management application that organizes work, tracks progress, and explores AI-assisted prioritization.",
    skills: ["JavaScript", "APIs", "AI Workflows"],
    icon: Workflow,
    type: "Automation Application",
    overview:
      "Build a task organizer that helps users capture tasks, monitor their progress, and explore ways to prioritize work. This project introduces application logic and the fundamentals of workflow automation.",
    outcomes: [
      "Create, update, and organize tasks",
      "Track task status and progress",
      "Practice working with application data",
      "Explore rules or AI-assisted task prioritization",
    ],
    deliverables: [
      "A task management interface",
      "Task status and progress views",
      "A basic task organization workflow",
    ],
  },
  {
    number: "06",
    category: "CLOUD & DEPLOYMENT",
    title: "Application Deployment",
    description:
      "Learn the fundamentals of preparing an application for deployment and understanding cloud hosting workflows.",
    skills: ["Cloud Basics", "Git", "Deployment"],
    icon: Sparkles,
    type: "Cloud Fundamentals",
    overview:
      "Understand the journey from a project on your computer to an application that others can access. Explore version control, build preparation, hosting options, and basic deployment troubleshooting.",
    outcomes: [
      "Understand the purpose of Git and version control",
      "Prepare an application for deployment",
      "Explore cloud hosting fundamentals",
      "Recognize common deployment configuration issues",
    ],
    deliverables: [
      "A deployment-ready sample application",
      "A basic version control workflow",
      "A deployment checklist",
    ],
  },
];

function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(null);

  const closeModal = () => setActiveProject(null);

  useEffect(() => {
    if (!activeProject) return undefined;

    const previousOverflow = document.body.style.overflow;

    document.body.classList.add("project-modal-open");
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("project-modal-open");
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProject]);

  return (
    <>
      <section
        className="project-showcase"
        id="projects"
        aria-labelledby="project-showcase-title"
      >
        <div className="project-showcase__container">
          <div className="project-showcase__eyebrow">
            <span className="project-showcase__eyebrow-dot" />
            LEARNING THROUGH REAL PROJECTS
          </div>

          <div className="project-showcase__heading">
            <div className="project-showcase__heading-copy">
              <h2 id="project-showcase-title">
                Turn ideas into
                <span> working projects.</span>
              </h2>

              <p>
                Apply what you learn by exploring practical project ideas
                across development, AI, testing, data, and cloud technologies.
              </p>
            </div>

            <div className="project-showcase__badge">
              <Code2 size={17} aria-hidden="true" />
              <span>Build. Test. Improve.</span>
            </div>
          </div>

          <div className="project-showcase__grid">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  className={`project-card ${
                    project.featured ? "project-card--featured" : ""
                  }`}
                  key={project.number}
                  role="button"
                  tabIndex={0}
                  aria-haspopup="dialog"
                  aria-label={`Explore ${project.title}`}
                  onClick={() => setActiveProject(project)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveProject(project);
                    }
                  }}
                >
                  <div className="project-card__top">
                    <div className="project-card__icon">
                      <Icon
                        size={24}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </div>

                    <span className="project-card__number">
                      {project.number}
                    </span>
                  </div>

                  <span className="project-card__category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p className="project-card__description">
                    {project.description}
                  </p>

                  <div className="project-card__skills">
                    {project.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>

                  <div className="project-card__bottom">
                    <span>{project.type}</span>
                    <span className="project-card__explore">
                      Explore <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="project-showcase__footer">
            <div className="project-showcase__footer-icon">
              <Sparkles size={21} aria-hidden="true" />
            </div>

            <div className="project-showcase__footer-copy">
              <h3>
                Your learning should lead to something you can demonstrate.
              </h3>
              <p>
                Project selection and scope can be adapted to the chosen
                training track and the finalized program curriculum.
              </p>
            </div>

            <a className="project-showcase__cta" href="#apply">
              Explore the program
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {activeProject &&
        createPortal(
          <div
            className="project-modal-backdrop"
            onClick={closeModal}
          >
            <section
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="project-modal__top">
                <span className="project-modal__brand">
                  <Sparkles size={14} aria-hidden="true" />
                  AV_eSAFE PROJECT EXPLORER
                </span>

                <button
                  type="button"
                  className="project-modal__close"
                  onClick={closeModal}
                  aria-label="Close project details"
                  autoFocus
                >
                  <X size={21} />
                </button>
              </div>

              <div className="project-modal__icon">
                {(() => {
                  const Icon = activeProject.icon;
                  return <Icon size={30} strokeWidth={1.8} />;
                })()}
              </div>

              <span className="project-modal__category">
                PROJECT {activeProject.number} · {activeProject.category}
              </span>

              <h2 id="project-modal-title">{activeProject.title}</h2>

              <p className="project-modal__description">
                {activeProject.overview}
              </p>

              <div className="project-modal__type">
                <Layers3 size={17} aria-hidden="true" />
                <span>{activeProject.type}</span>
              </div>

              <div className="project-modal__skills">
                <h3>Technologies and skills</h3>
                <div className="project-modal__skill-list">
                  {activeProject.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className="project-modal__list-section">
                <h3>What you'll learn</h3>

                {activeProject.outcomes.map((outcome) => (
                  <div className="project-modal__list-item" key={outcome}>
                    <CheckCircle2 size={19} aria-hidden="true" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>

              <div className="project-modal__list-section project-modal__deliverables">
                <h3>What you can work toward</h3>

                {activeProject.deliverables.map((deliverable) => (
                  <div
                    className="project-modal__list-item"
                    key={deliverable}
                  >
                    <ArrowRight size={17} aria-hidden="true" />
                    <span>{deliverable}</span>
                  </div>
                ))}
              </div>

              <p className="project-modal__note">
                These are illustrative project ideas. Final project scope and
                deliverables depend on the training track and program
                curriculum.
              </p>

              <button
                type="button"
                className="project-modal__done"
                onClick={closeModal}
              >
                Got it
                <ArrowRight size={17} aria-hidden="true" />
              </button>
            </section>
          </div>,
          document.body
        )}
    </>
  );
}

export default ProjectShowcase;
