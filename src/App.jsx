
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  GraduationCap,
  MessageCircle,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

import { useEffect, useState } from "react";
import "./App.css";

import TrainingTracks from "./components/TrainingTracks";
import ProjectShowcase from "./components/ProjectShowcase";
import StudentBenefits from "./components/StudentBenefits";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Founder from "./pages/Founder";
import About from "./pages/About";




const PROGRAM_FEE = 1299;

const programFeatures = [
  {
    icon: Code2,
    title: "Real-World Projects",
    description:
      "Build practical projects that demonstrate your technical skills and problem-solving ability.",
    number: "01",
  },
  {
    icon: BrainCircuit,
    title: "AI & Emerging Tech",
    description:
      "Explore AI-powered applications and learn how modern technologies solve real problems.",
    number: "02",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career-Ready Resume",
    description:
      "Create a professional, ATS-conscious resume tailored to your skills and career goals.",
    number: "03",
  },
  {
    icon: MessageCircle,
    title: "Interview Preparation",
    description:
      "Practice technical, managerial, and HR interviews with structured preparation sessions.",
    number: "04",
  },
];

const learningSteps = [
  {
    number: "01",
    title: "Learn with guidance",
    description:
      "Strengthen your fundamentals with structured learning and mentor guidance.",
  },
  {
    number: "02",
    title: "Build something real",
    description:
      "Apply what you learn by developing practical, portfolio-ready projects.",
  },
  {
    number: "03",
    title: "Prepare for interviews",
    description:
      "Improve your resume, communication, and confidence through practice.",
  },
];

const faqs = [
  {
    question: "Who can apply for this program?",
    answer:
      "Students and aspiring IT professionals who want practical project experience and structured career preparation can apply. Final eligibility and batch availability will be communicated during the application process.",
  },
  {
    question: "Will I receive a guaranteed job or placement?",
    answer:
      "No. Av_eSAFE provides training and placement support, not guaranteed employment. Hiring decisions depend on your skills, performance, available opportunities, and employer requirements.",
  },
  {
    question: "What is included in the ₹1,299 program fee?",
    answer:
      "The proposed fee covers the program's defined training and career-preparation services. The final inclusions, duration, batch schedule, and any additional charges will be disclosed before payment.",
  },
  {
    question: "Will I work on real-world or AI projects?",
    answer:
      "The program is designed around practical project development, including AI-based projects where applicable. Specific projects and technologies may vary by training track and batch.",
  },
  {
    question: "How does enrollment work?",
    answer:
      "Students will submit an application, review the program details, and complete payment through the designated payment process. Enrollment will be confirmed after eligibility and payment verification.",
  },
];

function SectionLabel({ children }) {
  return (
    <div className="section-label">
      <span className="section-label-dot" />
      {children}
    </div>
  );
}

function Brand({ footer = false }) {
  return (
    <a
      className={`brand${footer ? " brand-footer" : ""}`}
      href="#home"
      aria-label="Av_eSAFE Training and Placement Support home"
    >
      <span className="brand-symbol" aria-hidden="true">
        <span className="brand-symbol-inner">A</span>
      </span>
      <span className="brand-copy">
        <span className="brand-name">
          Av_<span>eSAFE</span>
        </span>
        <span className="brand-caption">TECHNOLOGY SOLUTIONS</span>
      </span>
    </a>
  );
}



function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-decoration hero-decoration-one" />
      <div className="hero-decoration hero-decoration-two" />

      <div className="container hero-grid">
        <div className="hero-content">
          <div className="eyebrow-pill">
            <Sparkles size={15} />
            <span>Learn. Build. Become career-ready.</span>
          </div>

          <h1>
            Your potential is real.
            <br />
            <span>Your next step starts here.</span>
          </h1>

          <p className="hero-description">
            Turn what you know into what you can do. Build real-world
            projects, sharpen your technical skills, and prepare for
            your next career opportunity with Av_eSAFE.
          </p>

          <div className="hero-actions">
            <a className="button button-primary button-large" href="/founder">
              Meet Our Founder <ArrowRight size={18} />
            </a>
            <a className="button button-primary-a button-large" href="#tracks">
              Explore the program <ArrowRight size={18} />
            </a>
            
          </div>

          <div className="hero-trust">
            <div className="trust-icon">
              <Users size={18} />
            </div>
            <p>
              <strong>Built around practical learning</strong>
              <span>Projects, mentorship & interview preparation</span>
            </p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Program highlights">
          <div className="visual-orbit visual-orbit-outer" />
          <div className="visual-orbit visual-orbit-inner" />

          <div className="visual-glow" />

          <div className="visual-center">
            <div className="visual-center-icon">
              <GraduationCap size={43} strokeWidth={1.6} />
            </div>
            <span className="visual-center-brand">Av_eSAFE</span>
            <span className="visual-center-subtitle">
              TRAINING & CAREER SUPPORT
            </span>
          </div>

          <div className="floating-card floating-card-project">
            <div className="floating-icon icon-mint">
              <Code2 size={20} />
            </div>
            <div>
              <strong>Build real projects</strong>
              <span>Learn by doing</span>
            </div>
            <Check className="floating-check" size={17} />
          </div>

          <div className="floating-card floating-card-ai">
            <div className="floating-icon icon-lavender">
              <BrainCircuit size={21} />
            </div>
            <div>
              <strong>Explore AI</strong>
              <span>Build future-ready skills</span>
            </div>
          </div>

          <div className="floating-card floating-card-career">
            <div className="career-card-top">
              <span className="career-card-icon">
                <Target size={18} />
              </span>
              <strong style={{ marginLeft: "10px" }}>Prepare with purpose.</strong>
              <span className="career-card-tag">YOUR NEXT CHAPTER</span>
            </div>

            <span>Resume · Interviews · Mentorship</span>

          </div>

          <div className="visual-sparkle sparkle-one">
            <Sparkles size={21} />
          </div>
          <div className="visual-sparkle sparkle-two">
            <Zap size={17} />
          </div>
        </div>
      </div>

      <a className="hero-scroll" href="#about">
        <span>Discover the program</span>
        <ArrowDown size={15} />
      </a>
    </section>
  );
}

function ProgramHighlights() {
  return (
    <section className="highlights-strip" aria-label="Program highlights">
      <div className="container highlights-inner">
        <div className="highlight-item">
          <span className="highlight-icon">
            <Code2 size={20} />
          </span>
          <span>
            <strong>Project-based</strong>
            <small>Practical experience</small>
          </span>
        </div>

        <div className="highlight-item">
          <span className="highlight-icon">
            <BrainCircuit size={20} />
          </span>
          <span>
            <strong>AI-aware learning</strong>
            <small>Modern technologies</small>
          </span>
        </div>

        <div className="highlight-item">
          <span className="highlight-icon">
            <MessageCircle size={20} />
          </span>
          <span>
            <strong>Mock interviews</strong>
            <small>Practice with purpose</small>
          </span>
        </div>

        <div className="highlight-item">
          <span className="highlight-icon">
            <GraduationCap size={20} />
          </span>
          <span>
            <strong>Mentor guidance</strong>
            <small>Structured preparation</small>
          </span>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <SectionLabel>ABOUT THE PROGRAM</SectionLabel>
          <h2>
            More than learning.
            <br />
            <span>It's about doing.</span>
          </h2>

          <p className="section-description">
            Knowing the concepts is one thing. Applying them with
            confidence is another. Our training and placement support
            program is designed to help bridge that gap.
          </p>

          <p className="body-copy">
            Through guided learning, practical projects, personalized
            career preparation, and interview practice, we help you
            develop skills you can demonstrate—not just list on a
            resume.
          </p>

          <a className="text-link" href="#process">
            See how the program works <ArrowRight size={17} />
          </a>
        </div>

        <div className="about-panel">
          <div className="about-panel-header">
            <span className="panel-indicator" />
            <span>THE AV_eSAFE APPROACH</span>
          </div>

          <div className="approach-list">
            {learningSteps.map((step) => (
              <div className="approach-item" key={step.number}>
                <span className="approach-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-panel-footer">
            <Sparkles size={17} />
            <span>Learn with purpose. Grow with confidence.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramSection() {
  return (
    <section className="section program-section" id="program">
      <div className="container">
        <div className="section-heading">
          <SectionLabel>WHAT YOU'LL GET</SectionLabel>
          <h2>
            Skills that go
            <br className="desktop-break" /> beyond the classroom.
          </h2>
          <p>
            A structured learning experience focused on technical
            capability, practical work, and career readiness.
          </p>
        </div>

        <div className="feature-grid">
          {programFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <article className="feature-card" key={feature.number}>
                <div className="feature-card-top">
                  <span className="feature-icon">
                    <Icon size={23} strokeWidth={1.8} />
                  </span>
                  <span className="feature-number">{feature.number}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a
                  className="feature-link"
                  href="#apply"
                  aria-label={`Apply to learn more about ${feature.title}`}
                >
                  <ArrowUpRight size={19} />
                </a>
              </article>
            );
          })}
        </div>

        <div className="program-note">
          <div className="program-note-icon">
            <GraduationCap size={24} />
          </div>
          <div>
            <strong>Recognition for outstanding performance</strong>
            <p>
              Eligible participants can receive a training completion
              certificate. A Letter of Recommendation is planned for the
              top five performers, based on published assessment criteria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="section-heading section-heading-centered">
          <SectionLabel>YOUR JOURNEY</SectionLabel>
          <h2>
            From learning to
            <br /> career preparation.
          </h2>
          <p>
            A clear, guided process to help you get the most from your
            training experience.
          </p>
        </div>

        <div className="process-grid">
          {learningSteps.map((step, index) => (
            <article className="process-card" key={step.number}>
              <div className="process-card-number">
                <span>{step.number}</span>
                {index < learningSteps.length - 1 && (
                  <div className="process-connector" />
                )}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="interview-banner">
          <div className="interview-banner-icon">
            <MessageCircle size={26} />
          </div>
          <div className="interview-banner-copy">
            <span>CAREER PREPARATION</span>
            <h3>Walk into interviews better prepared.</h3>
            <p>
              Practice technical discussions, managerial rounds, and HR
              conversations in a structured learning environment.
            </p>
          </div>
          <a className="button button-light" href="#apply">
            Get started <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="container pricing-grid">
        <div className="pricing-copy">
          <SectionLabel>PROGRAM INVESTMENT</SectionLabel>
          <h2>
            Invest in your
            <br /> next step.
          </h2>
          <p>
            Practical training and career preparation designed to help
            you build demonstrable skills and approach opportunities
            with greater confidence.
          </p>

          <div className="pricing-points">
            <span><Check size={17} /> Practical project development</span>
            <span><Check size={17} /> Resume and interview preparation</span>
            <span><Check size={17} /> Structured mentor guidance</span>
          </div>
        </div>

        <div className="pricing-card">
          <div className="pricing-card-label">
            <Sparkles size={16} /> PROPOSED PROGRAM FEE
          </div>

          <div className="pricing-amount">
            <span className="currency">₹</span>
            <span>{PROGRAM_FEE.toLocaleString("en-IN")}</span>
          </div>

          <p className="pricing-subtitle">Per student · Proposed fee</p>

          <div className="pricing-divider" />

          <p className="pricing-includes-title">Designed to include</p>
          <ul className="pricing-list">
            <li><Check size={17} /> Guided technical learning</li>
            <li><Check size={17} /> Practical project experience</li>
            <li><Check size={17} /> Resume improvement support</li>
            <li><Check size={17} /> Technical and HR interview practice</li>
          </ul>

          <a className="button button-primary pricing-button" href="#contact">
            Register your interest <ArrowRight size={17} />
          </a>

          <p className="pricing-disclaimer">
            Final inclusions, dates, duration, and payment terms will be
            confirmed before registration and payment.
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-grid">
        <div className="faq-intro">
          <SectionLabel>GOT QUESTIONS?</SectionLabel>
          <h2>
            Good questions.
            <br />
            Clear answers.
          </h2>
          <p>
            Everything you should know before taking your next step.
          </p>
          <a className="text-link" href="#contact">
            Still have questions? Contact us <ArrowRight size={17} />
          </a>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article className="faq-item" key={faq.question}>
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={19}
                    className={isOpen ? "faq-chevron faq-chevron-open" : "faq-chevron"}
                  />
                </button>

                {isOpen && <p className="faq-answer">{faq.answer}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const indianCities = [
  "Agartala", "Agra", "Ahmedabad", "Aizawl", "Ajmer", "Akola",
  "Aligarh", "Alappuzha", "Alwar", "Amravati", "Amritsar",
  "Anand", "Anantapur", "Arrah", "Asansol", "Aurangabad",
  "Ayodhya", "Azamgarh",
  "Baddi", "Bagalkot", "Bahraich", "Balasore", "Ballari",
  "Banswara", "Bareilly", "Bathinda", "Beawar", "Belagavi",
  "Bengaluru", "Berhampur", "Betul", "Bhagalpur", "Bharuch",
  "Bharatpur", "Bhavnagar", "Bhilai", "Bhilwara", "Bhiwandi",
  "Bhiwani", "Bhopal", "Bhubaneswar", "Bhuj", "Bikaner",
  "Bilaspur", "Bokaro", "Bundi", "Burhanpur",
  "Chandigarh", "Chandrapur", "Chennai", "Chhapra",
  "Chhindwara", "Chikkamagaluru", "Chitradurga", "Chittoor",
  "Coimbatore", "Cuddalore", "Cuttack",
  "Dahod", "Darbhanga", "Davanagere", "Dehradun", "Deoghar",
  "Dewas", "Dhanbad", "Dharamshala", "Dharmavaram", "Dibrugarh",
  "Dimapur", "Dindigul", "Durg", "Durgapur",
  "Eluru", "Erode",
  "Etawah",
  "Faridabad", "Farrukhabad", "Fatehpur", "Firozabad",
  "Gandhinagar", "Ganganagar", "Gangtok", "Gaya", "Ghaziabad",
  "Ghazipur", "Giridih", "Godhra", "Gonda", "Gorakhpur",
  "Greater Noida", "Guntur", "Gurugram", "Guwahati", "Gwalior",
  "Haldwani", "Hamirpur", "Hapur", "Hardoi", "Haridwar",
  "Hassan", "Hazaribagh", "Hisar", "Hoshiarpur", "Hosur",
  "Howrah", "Hubballi",
  "Imphal", "Indore", "Itanagar",
  "Jabalpur", "Jaipur", "Jalandhar", "Jalgaon", "Jalna",
  "Jammu", "Jamnagar", "Jamshedpur", "Jaunpur", "Jhansi",
  "Jodhpur", "Junagadh",
  "Kadapa", "Kaithal", "Kakinada", "Kalaburagi", "Kalyan",
  "Kanchipuram", "Kannur", "Kanpur", "Karaikudi", "Karimnagar",
  "Karnal", "Karur", "Kashipur", "Katihar", "Khammam",
  "Kharagpur", "Kochi", "Kolhapur", "Kolkata", "Kollam",
  "Kota", "Kottayam", "Kozhikode", "Krishnagiri", "Kullu",
  "Kurnool",
  "Latur", "Loni", "Lucknow", "Ludhiana",
  "Machilipatnam", "Madurai", "Mahbubnagar", "Malappuram",
  "Mangaluru", "Mathura", "Meerut", "Mehsana", "Mirzapur",
  "Moga", "Moradabad", "Morbi", "Motihari", "Mumbai",
  "Munger", "Muzaffarnagar", "Muzaffarpur", "Mysuru",
  "Nadiad", "Nagaon", "Nagapattinam", "Nagpur", "Nainital",
  "Nanded", "Nandyal", "Nashik", "Navi Mumbai", "Nellore",
  "New Delhi", "Nizamabad", "Noida",
  "Ongole",
  "Palakkad", "Palanpur", "Pali", "Panaji", "Panipat",
  "Parbhani", "Pathankot", "Patiala", "Patna", "Pilibhit",
  "Pimpri-Chinchwad", "Pondicherry", "Porbandar", "Prayagraj",
  "Pudukkottai", "Pune", "Puri", "Purnia",
  "Raebareli", "Raichur", "Raiganj", "Raipur", "Rajahmundry",
  "Rajkot", "Rajnandgaon", "Ramagundam", "Rampur", "Ranchi",
  "Ratlam", "Rewa", "Rishikesh", "Rohtak", "Rourkela",
  "Sagar", "Saharanpur", "Salem", "Sambalpur", "Sangli",
  "Satara", "Satna", "Secunderabad", "Sehore", "Shillong",
  "Shimla", "Shivamogga", "Sikar", "Silchar", "Siliguri",
  "Sirsa", "Sitapur", "Solan", "Solapur", "Sonipat",
  "Srinagar", "Surat", "Surendranagar",
  "Thane", "Thanjavur", "Thiruvananthapuram", "Thoothukudi",
  "Thrissur", "Tiruchirappalli", "Tirunelveli", "Tirupati",
  "Tiruppur", "Tumakuru", "Udaipur", "Udupi", "Ujjain",
  "Ulhasnagar", "Una", "Unnao", "Vadodara", "Valsad",
  "Vapi", "Varanasi", "Vasai-Virar", "Vellore", "Vijayawada",
  "Viluppuram", "Virudhunagar", "Visakhapatnam", "Vizianagaram",
  "Warangal", "Wardha", "Yamunanagar", "Yavatmal"
].sort((a, b) => a.localeCompare(b));

const indianColleges = [
  // Greater Noida / Noida
  "Galgotias University",
  "Sharda University",
  "Bennett University",
  "Shiv Nadar University",
  "Noida Institute of Engineering and Technology (NIET)",
  "G.L. Bajaj Institute of Technology and Management",
  "Birla Institute of Management Technology (BIMTECH)",
  "Greater Noida Institute of Technology (GNIOT)",
  "Galgotias College of Engineering and Technology",
  "Gautam Buddha University (GBU)",
  "Lloyd Law College",
  "IIMT College Group",
  "Accurate Institute of Management and Technology",
  "ITS Engineering College",
  "Noida International University (NIU)",
  "JIMS Engineering Management Technical Campus (JEMTEC)",
  "KCC Institute of Technology and Management",
  "IEC College of Engineering and Technology",
  "Dronacharya Group of Institutions",
  "IILM Greater Noida",

  // Bengaluru
  "Indian Institute of Science (IISc Bangalore)",
  "Indian Institute of Management Bangalore (IIM Bangalore)",
  "National Law School of India University (NLSIU)",
  "International Institute of Information Technology Bangalore (IIITB)",
  "R.V. College of Engineering (RVCE)",
  "M.S. Ramaiah Institute of Technology (MSRIT)",
  "B.M.S. College of Engineering (BMSCE)",
  "PES University",
  "Christ University",
  "Bangalore Institute of Technology (BIT)",
  "Dayananda Sagar College of Engineering (DSCE)",
  "Nitte Meenakshi Institute of Technology (NMIT)",
  "St. John's Medical College",
  "Bangalore Medical College and Research Institute (BMCRI)",
  "New Horizon College of Engineering (NHCE)",
  "BMS Institute of Technology and Management (BMSIT)",
  "Jain University",
  "St. Joseph's College of Commerce (SJCC)",
  "Kristu Jayanti College",
  "M.S. Ramaiah University of Applied Sciences (RUAS)",

  // IIHMR institutions
  "IIHMR Bangalore",
  "IIHMR Jaipur",
  "IIHMR Delhi",

  // Other existing suggestions
  "IIT Madras",
  "IIT Delhi",
  "IIT Bombay",
  "IIT Kanpur",
  "IIT Kharagpur",
  "IIT Roorkee",
  "IIT Guwahati",
  "IIT Hyderabad",
  "NIT Tiruchirappalli",
  "NIT Karnataka, Surathkal",
  "NIT Warangal",
  "NIT Calicut",
  "NIT Rourkela",
  "BITS Pilani",
  "BITS Goa",
  "BITS Hyderabad",
  "Delhi University",
  "Jawaharlal Nehru University",
  "Jamia Millia Islamia",
  "Banaras Hindu University",
  "University of Mumbai",
  "University of Calcutta",
  "Anna University",
  "Jadavpur University",
  "Savitribai Phule Pune University",
  "University of Hyderabad",
  "Osmania University",
  "Andhra University",
  "Visvesvaraya Technological University",
  "Manipal Academy of Higher Education",
  "Amity University",
  "VIT Vellore",
  "SRM Institute of Science and Technology",
  "PSG College of Technology",
  "College of Engineering Pune",
  "Lovely Professional University",
  "Chandigarh University",
  "Thapar Institute of Engineering and Technology",
  "Aligarh Muslim University",
  "Institute of Engineering and Technology, Lucknow",
  "HBTU Kanpur",
  "KIET Group of Institutions",
  "Graphic Era University",
  "UPES Dehradun",
  "DIT University",
  "Vignan University",
  "Koneru Lakshmaiah Education Foundation",
  "Siksha 'O' Anusandhan",
  "Kalinga Institute of Industrial Technology",
  "BIT Mesra",
  "Jain College", "Sir M. Visvesvaraya Institute of Technology",

  // Always keep Other at the bottom
  "Other"
].filter((college, index, colleges) =>
  college !== "Other" || index === colleges.lastIndexOf("Other")
).sort((a, b) => {
  if (a === "Other") return 1;
  if (b === "Other") return -1;
  return a.localeCompare(b);
});

function ApplySection() {
  const [collegeChoice, setCollegeChoice] = useState("");
  const [otherCollege, setOtherCollege] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    currentCity: "",
    track: "",
    currentStatus: "",
    goals: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrorMessage("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (submitting) return;

    setSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "b47e9ccd-f83c-403b-96ad-63097d6ff4bb",
            subject: "New Av_eSAFE Training Application",
            from_name: "Av_eSAFE Training Website",

            "Full Name": formData.fullName,
            "Email Address": formData.email,
            "Phone Number": formData.phone,
            "College / University": formData.college || "Not provided",
            "Current City": formData.currentCity || "Not provided",
            "Interested Training Track": formData.track,
            "Current Status": formData.currentStatus,
            "Goals": formData.goals.trim() || "Not provided",
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to submit your application."
        );
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Web3Forms error:", error);

      setErrorMessage(
        error.message ||
        "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="apply-section" id="apply">
      <div className="container">
        <div className="apply-card application-card">
          <div className="apply-decoration apply-decoration-one" />
          <div className="apply-decoration apply-decoration-two" />

          <div className="apply-content application-intro">
            <span className="apply-eyebrow">
              <Sparkles size={15} /> YOUR NEXT STEP STARTS HERE
            </span>

            <h2>
              Ready to build skills
              <br /> that move you forward?
            </h2>

            <p>
              Tell us a little about yourself and the training you are
              interested in. The details will help us understand your goals
              and discuss the program with you.
            </p>

            <div className="application-points">
              <span>
                <Check size={17} /> Practical, project-based learning
              </span>
              <span>
                <Check size={17} /> Resume and interview preparation
              </span>
              <span>
                <Check size={17} /> Guidance on your next career step
              </span>
            </div>

            <span className="apply-note">
              Training and placement support. No job guarantee.
            </span>
          </div>

          <div className="application-form-wrap">
            {submitted ? (
              <div
                className="application-success"
                role="status"
                aria-live="polite"
              >
                <span className="application-success-icon">
                  <Check size={28} />
                </span>

                <h3>
                  Thank you, {formData.fullName.split(" ")[0]}!
                </h3>

                <p>
                  Your application has been submitted successfully.
                  Our team has received your details and will contact
                  you using the information you provided.
                </p>

                <button
                  className="button button-primary"
                  type="button"
                  onClick={() => {
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      track: "",
                      currentStatus: "",
                      goals: "",
                    });
                    setSubmitted(false);
                    setErrorMessage("");
                  }}
                >
                  Submit another application
                  <ArrowRight size={17} />
                </button>
              </div>
            ) : (
              <form
                className="application-form"
                onSubmit={handleSubmit}
              >
                <div className="application-form-heading">
                  <span>APPLICATION FORM</span>
                  <h3>Let’s get to know you.</h3>
                  <p>Fields marked * are required.</p>
                </div>

                <div className="application-field-grid">
                  <label className="application-field">
                    <span>Full name *</span>
                    <input
                      type="text"
                      name="fullName"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      minLength={2}
                    />
                  </label>

                  <label className="application-field">
                    <span>Email address *</span>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label className="application-field">
                    <span>Phone number *</span>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      minLength={10}
                    />
                  </label>

                  <label className="application-field">
                    <span>College / University Name *</span>

                    <input
                      type="text"
                      name="college"
                      list="college-suggestions"
                      placeholder="Search or select your college"
                      value={collegeChoice}
                      onChange={(e) => {
                        const value = e.target.value;
                        setCollegeChoice(value);

                        if (value === "Other") {
                          setOtherCollege("");
                          handleChange({
                            target: {
                              name: "college",
                              value: ""
                            }
                          });
                        } else {
                          setOtherCollege("");
                          handleChange({
                            target: {
                              name: "college",
                              value: value
                            }
                          });
                        }
                      }}
                      autoComplete="off"
                      required
                    />

                    <datalist id="college-suggestions">
                      {indianColleges.map((college) => (
                        <option key={college} value={college} />
                      ))}
                    </datalist>

                    {collegeChoice === "Other" && (
                      <input
                        type="text"
                        name="otherCollege"
                        placeholder="Enter your college or university name"
                        value={otherCollege}
                        onChange={(e) => {
                          const value = e.target.value;
                          setOtherCollege(value);

                          handleChange({
                            target: {
                              name: "college",
                              value: value
                            }
                          });
                        }}
                        required
                      />
                    )}
                  </label>

                </div>

                <div className="application-field">
                  <label className="application-field">
                    <span>Current City *</span>
                    <input
                      type="text"
                      name="currentCity"
                      list="city-suggestions"
                      placeholder="Search or enter your current city"
                      value={formData.currentCity}
                      onChange={handleChange}
                      autoComplete="off"
                      required
                    />

                    <datalist id="city-suggestions">
                      {indianCities.map((city) => (
                        <option key={city} value={city} />
                      ))}
                    </datalist>
                  </label>

                  <label className="application-field">
                    <span>Interested training track *</span>
                    <select
                      name="track"
                      value={formData.track}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose a track</option>
                      <option value="Web Development">
                        Web Development
                      </option>
                      <option value="Java Programming">
                        Java Programming
                      </option>
                      <option value="Python Programming">
                        Python Programming
                      </option>
                      <option value="SQL and Database">
                        SQL and Database
                      </option>
                      <option value="Software Testing">
                        Software Testing
                      </option>
                      <option value="AI and Generative AI">
                        AI and Generative AI
                      </option>
                      <option value="Not sure yet">
                        Not sure yet
                      </option>
                    </select>
                  </label>

                  <label className="application-field application-field-full">
                    <span>Current status *</span>
                    <select
                      name="currentStatus"
                      value={formData.currentStatus}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Choose your current status
                      </option>
                      <option value="Student">Student</option>
                      <option value="Recent graduate">
                        Recent graduate
                      </option>
                      <option value="Working professional">
                        Working professional
                      </option>
                      <option value="Career switcher">
                        Looking to switch careers
                      </option>
                    </select>
                  </label>

                  <label className="application-field application-field-full">
                    <span>Your goals (optional)</span>
                    <textarea
                      name="goals"
                      placeholder="Tell us what you want to learn or achieve"
                      value={formData.goals}
                      onChange={handleChange}
                      rows={3}
                    />
                  </label>
                </div>

                {errorMessage && (
                  <p
                    className="application-error"
                    role="alert"
                    aria-live="polite"
                  >
                    {errorMessage}
                  </p>
                )}

                <button
                  className="button button-primary application-submit"
                  type="submit"
                  disabled={submitting}
                >
                  {submitting
                    ? "Submitting..."
                    : "Submit application"}
                  {!submitting && <ArrowRight size={18} />}
                </button>

                <p className="application-privacy-note">
                  Your information should only be collected and handled
                  in accordance with Av_eSAFE’s privacy practices.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


function LandingPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ProgramHighlights />
        <AboutSection />
        <TrainingTracks />
        <ProjectShowcase />
        <StudentBenefits />
        <ProcessSection />
        <PricingSection />
        <FAQSection />
        <ApplySection />
      </main>
    </>
  );
}

function ScrollToSection() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      if (pathname !== "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const sectionId = decodeURIComponent(hash.slice(1));

    // Wait until the destination page has rendered before scrolling.
    const frameId = window.requestAnimationFrame(() => {
      const target = document.getElementById(sectionId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [pathname, hash]);

  return null;
}



function App() {
  return (
    <BrowserRouter>
      <ScrollToSection />
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/founder"
          element={<Founder />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}


function NotFound() {
  return (
    <main className="container" style={{ padding: "100px 24px" }}>
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/">Return to Home</a>
    </main>
  );
}

export default App;