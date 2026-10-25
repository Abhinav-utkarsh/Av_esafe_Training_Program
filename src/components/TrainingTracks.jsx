
import {
  Code2,
  Coffee,
  BrainCircuit,
  TestTube2,
  Database,
  Bot,
  BarChart3,
  Cloud,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import "./TrainingTracks.css";

const trainingTracks = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    description:
      "Build responsive, modern websites and interactive web applications from the ground up.",
    skills: ["HTML & CSS", "JavaScript", "React.js"],
    icon: Code2,
    category: "Development",
  },
  {
    id: "java",
    number: "02",
    title: "Java Programming",
    description:
      "Strengthen programming fundamentals and learn to develop structured, maintainable applications.",
    skills: ["Core Java", "OOP Concepts", "Collections"],
    icon: Coffee,
    category: "Programming",
  },
  {
    id: "python",
    number: "03",
    title: "Python Programming",
    description:
      "Learn Python through practical coding exercises, automation tasks, and application development.",
    skills: ["Python Basics", "OOP", "Automation"],
    icon: Bot,
    category: "Programming",
  },
  {
    id: "software-testing",
    number: "04",
    title: "Software Testing",
    description:
      "Understand software quality and practice designing and executing meaningful test scenarios.",
    skills: ["Manual Testing", "Selenium", "TestNG"],
    icon: TestTube2,
    category: "Quality Engineering",
  },
  {
    id: "sql",
    number: "05",
    title: "SQL & Databases",
    description:
      "Work with relational databases and learn to retrieve, analyze, and manage structured data.",
    skills: ["SQL Queries", "Joins", "Database Design"],
    icon: Database,
    category: "Data",
  },
  {
    id: "ai-generative-ai",
    number: "06",
    title: "AI & Generative AI",
    description:
      "Explore AI concepts and build practical applications using prompts, LLMs, and AI-powered workflows.",
    skills: ["Prompt Engineering", "LLMs", "AI Applications"],
    icon: BrainCircuit,
    category: "Emerging Technology",
    featured: true,
  },
  {
    id: "data-analytics",
    number: "07",
    title: "Data Analytics",
    description:
      "Turn data into useful insights by learning data preparation, analysis, and visualization fundamentals.",
    skills: ["Excel", "SQL", "Data Visualization"],
    icon: BarChart3,
    category: "Data",
  },
  {
    id: "cloud-computing",
    number: "08",
    title: "Cloud Computing",
    description:
      "Understand cloud fundamentals, deployment concepts, and the services behind modern applications.",
    skills: ["Cloud Fundamentals", "Deployment", "Cloud Services"],
    icon: Cloud,
    category: "Infrastructure",
  },
];

function TrainingTracks() {
  return (
    <section
      className="training-tracks section-padding"
      id="tracks"
      aria-labelledby="training-tracks-title"
    >
      <div className="training-tracks__container">
        <div className="training-tracks__heading">
          <div className="training-tracks__eyebrow">
            <span className="training-tracks__eyebrow-dot" />
            LEARN WITH PURPOSE
          </div>

          <div className="training-tracks__heading-row">
            <div>
              <h2 id="training-tracks-title">
                Choose your path.
                <span> Build your future.</span>
              </h2>

              <p className="training-tracks__intro">
                Explore practical learning tracks designed to strengthen your
                technical foundations, help you build real-world projects, and
                prepare for your next career opportunity.
              </p>
            </div>

            <div className="training-tracks__count">
              <Sparkles size={17} aria-hidden="true" />
              <span>08 learning tracks</span>
            </div>
          </div>
        </div>

        <div className="training-tracks__grid">
          {trainingTracks.map((track) => {
            const Icon = track.icon;

            return (
              <article
                className={`training-card ${
                  track.featured ? "training-card--featured" : ""
                }`}
                key={track.id}
              >
                <div className="training-card__top">
                  <div className="training-card__icon">
                    <Icon
                      size={23}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="training-card__number">
                    {track.number}
                  </span>
                </div>

                <div className="training-card__content">
                  <span className="training-card__category">
                    {track.category}
                  </span>

                  <h3>{track.title}</h3>

                  <p>{track.description}</p>
                </div>

                <div className="training-card__skills">
                  {track.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="training-tracks__note">
          <div className="training-tracks__note-icon">
            <Sparkles size={20} aria-hidden="true" />
          </div>

          <p>
            <strong>Learn by building, not just watching.</strong>
            <span>
              Training activities and project work can be aligned with the
              selected track and the program structure.
            </span>
          </p>

          <a href="#contact" className="training-tracks__cta">
            Register your interest
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default TrainingTracks;
