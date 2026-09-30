// ============================================================
// EDIT THIS FILE — all site content lives here.
// Replace placeholder text with your own info from your CV.
// ============================================================

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  arxiv?: string;
  openreview?: string;
  github?: string;
  bibtex?: string;
};

export type Experience = {
  role: string;
  organization: string;
  location?: string;
  start: string;
  end: string;
  description: string[];
  tags?: string[];
  logo?: string;
  note?: string;
};

export type Education = {
  degree: string;
  institution: string;
  location?: string;
  start: string;
  end: string;
  details?: string[];
};

export const site = {
  // --- Identity ---
  name: "Keshav Balaji",
  tagline:
    "M.S.E. in Computer & Information Science · University of Pennsylvania · Applying to PhD programs",
  email: "kbalaji5@engineering.upenn.edu",
  photo: "/photo.jpg",

  // --- Links (shown in hero + footer) ---
  links: {
    cv: "/cv.pdf", // drop your PDF in /public/cv.pdf
    github: "https://github.com/KeshavBalaji",
    linkedin: "https://www.linkedin.com/in/keshav-balaji-a76a15248/",
  } as Record<string, string>,

  // --- About ---
  about: {
    paragraphs: [
      "I am a second-year Computer Science master's student at the University of Pennsylvania, with a concentration in Artificial Intelligence. I am a graduate student researcher at NerDS Lab, advised by Prof. Eva Dyer.",
      "My current research focuses on self-supervised learning approaches for neural electrophysiological and behavioral data.",
      "I completed my B.S. in Computer Science at the University of Wisconsin-Madison. In my free time, I enjoy playing cricket and basketball, playing the guitar, and listening to classic rock.",
    ],
  },

  // --- Publications ---
  publications: [
    {
      title:
        "Population-Aware Contrastive Channel Embeddings for Intracranial EEG",
      authors:
        "Shivashriganesh P. Mahato*, Keshav Balaji*, Divyansha Lachi, Eva L. Dyer",
      venue: "In review at ICASSP",
      year: 2027,
    },
    {
      title:
        "BrainWideBench: A large-scale, multi-task benchmark for neuro-foundation models",
      authors:
        "Alexandre Andre*, Shivashriganesh P. Mahato*, Vinam Arora, Keshav Balaji, et al.",
      venue: "In review at ICLR",
      year: 2027,
      arxiv: "https://arxiv.org/abs/2609.22064",
      github: "https://github.com/neuro-galaxy/ibl-brain-wide-bench",
    },
  ] as Publication[],

  // --- Work & research experience ---
  experienceGroups: [
    {
      label: "Research",
      items: [
        {
          role: "Graduate ML Researcher",
          organization: "NerDS Lab",
          location: "Philadelphia, PA",
          start: "Aug 2025",
          end: "Present",
          note: "Advised by Prof. Eva Dyer",
          description: [],
          logo: "/logos/penn-white.png",
        },
        {
          role: "Undergraduate ML Researcher",
          organization: "UW Cosmos Project",
          location: "Madison, WI",
          start: "Mar 2023",
          end: "May 2024",
          note: "Advised by Prof. Shivaram Venkataraman",
          description: [],
          logo: "/logos/wisconsin.png",
        },
      ],
    },
    {
      label: "Professional",
      items: [
        {
          role: "Software Engineering Intern",
          organization: "Meta",
          location: "New York, NY",
          start: "May 2026",
          end: "Aug 2026",
          description: [],
          logo: "/logos/meta-white.png",
        },
        {
          role: "Software Engineering Intern",
          organization: "Meta",
          location: "New York, NY",
          start: "May 2025",
          end: "Aug 2025",
          description: [],
          logo: "/logos/meta-white.png",
        },
        {
          role: "Software Engineering Intern",
          organization: "PTC (Onshape)",
          location: "Boston, MA",
          start: "June 2024",
          end: "Aug 2024",
          description: [],
          logo: "/logos/ptc.png",
        },
      ],
    },
  ] as { label: string; items: Experience[] }[],

  // --- Education ---
  education: [
    {
      degree: "M.S.E in Computer & Information Science",
      institution: "University of Pennsylvania",
      location: "Philadelphia, PA",
      start: "2025",
      end: "Present",
    },
    {
      degree: "B.S. in Computer Science",
      institution: "University of Wisconsin-Madison",
      location: "Madison, WI",
      start: "2022",
      end: "2025",
    },
  ] as Education[],

  // --- Navigation ---
  nav: [
    { label: "Home", href: "#home" },
    { label: "Publications", href: "#publications" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
  ],
};

export type SiteContent = typeof site;
