import UniversityLogo from "../assets/SPPULogo.jpg";
import EdunetFoundationLogo from "../assets/EdunetFoundationIcon.png";
import SynconicLogo from "../assets/Synconic.png";

export const experience = [
  {
    id: 1,
    company: "Synconic Fintech Solutions",
    role: "AI/ML Software Intern",
    location: "Remote",
    duration: "Mar 2026 - Present",
    points: [
      "Built an occupational-code matching tool (FastAPI + React) with a hybrid RAG retriever (semantic + BM25), returning ranked suggestions in sub-second latency.",
      "Developed document auto-fill pipelines using Gemini 2.5 Flash to extract structured data from PDFs and images, with strict schema enforcement to eliminate hallucinated outputs.",
    ],
    logo: SynconicLogo,
  },
  {
    id: 2,
    company: "Edunet Foundation",
    role: "Web Development Intern",
    location: "Remote",
    duration: "Dec 2024 - Feb 2025",
    points: [
      "Built a full-stack MERN music streaming platform with audio playback, playlists, and user libraries over a REST API.",
      "Implemented JWT authentication with role-based access and deployed the app on Render.",
    ],
    logo: EdunetFoundationLogo,
  },
];

export const projects = [
  {
    id: 1,
    name: "Quack — Search Engine",
    stack: ["Python", "Node.js", "MongoDB", "Redis", "TF-IDF"],
    points: [
      "64-thread web crawler collecting ~20k pages per cycle, feeding an inverted index with TF-IDF scoring and PageRank ranking via sparse-matrix power iteration.",
      "REST search API with query parsing, stemming, snippet extraction, and Redis-backed caching — averaging ~0.02s query response time.",
    ],
    github: "https://github.com/dead-shadow-7/quack",
  },
  {
    id: 2,
    name: "OmniView — AI Satellite Intelligence",
    stack: ["Python", "PyTorch", "TensorFlow", "Electron", "Flask"],
    points: [
      "Cross-platform geospatial desktop app (Electron + Flask) integrating three deep-learning models for change detection, road extraction, and land-cover segmentation.",
      "Multi-source AI report pipeline aggregating disaster news and Sentinel-2 imagery via BLIP captioning + Gemini 2.5 Flash, producing structured incident reports with auto-generated charts.",
    ],
    github: "https://github.com/dead-shadow-7/OMNIVIEW",
  },
];

export const skills = [
  { category: "Languages", items: ["C++", "JavaScript", "Python", "Java"] },
  { category: "Frontend", items: ["React", "Vite", "HTML", "CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "FastAPI", "JWT"] },
  {
    category: "ML / AI",
    items: [
      "TensorFlow",
      "RAG",
      "sentence-transformers",
      "NLTK",
      "Hugging Face",
      "Gemini API",
    ],
  },
  { category: "Databases", items: ["MongoDB", "MySQL", "Redis"] },
  { category: "DevOps & Tools", items: ["Docker", "Git", "Postman", "Linux"] },
  {
    category: "Cloud",
    items: ["Railway", "Vercel", "Render", "Hugging Face Spaces"],
  },
];

export const certifications = [
  {
    id: 1,
    name: "Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "2026",
  },
  {
    id: 2,
    name: "OCI Foundations Associate",
    issuer: "Oracle University",
    year: "2025",
  },
  {
    id: 3,
    name: "MERN Stack Development",
    issuer: "Edunet Foundation",
    year: "2025",
  },
];

export const education = [
  {
    id: 1,
    institution: "AISSMS IOIT",
    degree: "B.Tech in Computer Engineering",
    location: "Pune, Maharashtra",
    duration: "Nov 2022 - May 2026",
    logo: UniversityLogo,
  },
];
