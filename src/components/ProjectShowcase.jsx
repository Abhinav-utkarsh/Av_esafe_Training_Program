
import {
  ArrowUpRight,
  Code2,
  BrainCircuit,
  TestTube2,
  Database,
  Workflow,
  Sparkles,
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
  },
];

function ProjectShowcase() {
  return (
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
          <div>
            <h2 id="project-showcase-title">
              Turn ideas into
              <span> working projects.</span>
            </h2>

            <p>
              Apply what you learn by exploring practical project ideas across
              development, AI, testing, data, and cloud technologies.
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
              >
                <div className="project-card__top">
                  <div className="project-card__icon">
                    <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
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
                  <ArrowUpRight size={17} aria-hidden="true" />
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
            <h3>Your learning should lead to something you can demonstrate.</h3>
            <p>
              Project selection and scope can be adapted to the chosen training
              track and the finalized program curriculum.
            </p>
          </div>

          <a className="project-showcase__cta" href="#apply">
            Explore the program
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectShowcase;
