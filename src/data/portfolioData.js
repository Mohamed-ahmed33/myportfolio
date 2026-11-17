/**
 * Centralized Portfolio Configuration
 * Mohamed Ahmed Shaban - Personal Portfolio Data
 * 
 * NOTE FOR MOHAMED:
 * You can update your contact information (email, linkedin, github, phone) below.
 * If any contact field is left as an empty string (""), the corresponding button
 * will automatically be hidden on the website.
 */

export const personalInfo = {
  fullName: "Mohamed Ahmed Shaban",
  roleTitle: "Management Information Systems Graduate",
  subTitle: "Web Development | Business Analysis | Problem Solving",
  location: "Cairo, Egypt",
  status: "Open to opportunities in Junior Web Development & Business Analysis",
  cvPath: "/Mohamed-Ahmed-Shaban-CV.pdf", // Expected at public/Mohamed-Ahmed-Shaban-CV.pdf

  // Contact details (Leave empty string "" if not yet set; buttons will hide automatically)
  contact: {
    email: "",         // e.g. "mohamed.ahmed@example.com"
    linkedin: "",      // e.g. "https://linkedin.com/in/mohamed-ahmed-shaban"
    github: "",        // e.g. "https://github.com/mohamed-ahmed-shaban"
    phone: "",         // e.g. "+20 100 000 0000"
  },

  summary: `I am a Management Information Systems graduate with a multidisciplinary background in web development, business processes, customer service, and human resources.

I have studied frontend and backend web development, database management, business requirements documentation, product planning, and AI-assisted development workflows.

I enjoy solving problems, analyzing requirements, understanding systems, and connecting technical solutions with real business needs.

My goal is to continuously develop my technical and analytical skills and contribute to meaningful projects.`,

  corePhilosophy: "I understand technology, I understand business, and I approach problems analytically."
};

export const aboutData = {
  intro: "Bridging the gap between technological capabilities and business objectives through structured analysis and modern web tools.",
  pillars: [
    {
      id: "mis-foundation",
      title: "MIS Education & Systems Thinking",
      category: "Academic Core",
      description: "My academic background in Management Information Systems equipped me to view software not in isolation, but as a crucial engine powering organizational workflows and data-driven decision making.",
      badge: "Degree & Core Discipline"
    },
    {
      id: "web-dev",
      title: "Web Development",
      category: "Technical Craft",
      description: "Trained in both frontend and backend modern development stacks. I craft clean, responsive user interfaces and understand server-side architectures, database schemas, and RESTful API interactions.",
      badge: "Frontend & Backend Basics"
    },
    {
      id: "business-analysis",
      title: "Business & Product Analysis",
      category: "Requirements & Planning",
      description: "Experienced in gathering requirements, authoring Business & Product Requirements Documents (BRD & PRD), framing user stories, defining epics, and facilitating sprint planning via Jira.",
      badge: "BRD / PRD / Jira"
    },
    {
      id: "people-operations",
      title: "Customer Support & HR Operations",
      category: "Communication & People",
      description: "Practical internship experience in corporate customer service combined with a certified HR diploma, giving me genuine user empathy, complaint management skills, and organizational insight.",
      badge: "Real Empathy & CRM"
    }
  ],
  strengths: [
    "Translating vague business requests into clear technical user stories",
    "Designing normalized relational database schemas (MySQL, PostgreSQL)",
    "Building accessible, responsive web interfaces with React and modern CSS",
    "Customer-centric communication and active listening under pressure",
    "Continuous learner rapidly adapting to modern AI-assisted development tools"
  ]
};

export const skillsData = [
  {
    category: "Frontend Development",
    iconName: "Layout",
    description: "Building responsive, modern, user-friendly client interfaces",
    skills: [
      { name: "HTML5", highlight: true },
      { name: "CSS3", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "TypeScript", highlight: false },
      { name: "React.js", highlight: true },
      { name: "Bootstrap", highlight: false },
      { name: "Responsive Web Design", highlight: true }
    ]
  },
  {
    category: "Backend Development & Databases",
    iconName: "Database",
    description: "Server-side logic, relational modeling, and API testing",
    skills: [
      { name: "PHP", highlight: true },
      { name: "Laravel", highlight: true },
      { name: "MySQL", highlight: true },
      { name: "PostgreSQL", highlight: false },
      { name: "Postman", highlight: true },
      { name: "Database Management Basics", highlight: false }
    ]
  },
  {
    category: "Business Analysis & Product Development",
    iconName: "FileCheck",
    description: "Structuring requirements, agile ceremonies, and product documentation",
    skills: [
      { name: "Business Requirements Documents (BRD)", highlight: true },
      { name: "Product Requirements Documents (PRD)", highlight: true },
      { name: "Requirements Gathering", highlight: true },
      { name: "User Stories", highlight: true },
      { name: "Epics", highlight: false },
      { name: "Jira", highlight: true },
      { name: "Sprint Planning", highlight: false },
      { name: "Requirements Clarification", highlight: true },
      { name: "Debugging", highlight: false }
    ]
  },
  {
    category: "Developer Tools",
    iconName: "Wrench",
    description: "Version control, workflow efficiency, and modern toolsets",
    skills: [
      { name: "Git", highlight: true },
      { name: "GitHub", highlight: true },
      { name: "AI Development Tools", highlight: true },
      { name: "APIs", highlight: true }
    ]
  },
  {
    category: "Office & General IT",
    iconName: "Monitor",
    description: "Information processing, research, and operating systems",
    skills: [
      { name: "Microsoft Excel", highlight: true },
      { name: "Microsoft Word", highlight: false },
      { name: "Data Entry", highlight: false },
      { name: "Web Research", highlight: false },
      { name: "Windows OS", highlight: false }
    ]
  },
  {
    category: "Human Resources Knowledge",
    iconName: "Users",
    description: "Labor regulations, talent acquisition, and performance frameworks",
    skills: [
      { name: "Recruitment & Selection", highlight: false },
      { name: "Job Description Creation", highlight: true },
      { name: "Candidate Screening", highlight: false },
      { name: "Performance Management", highlight: false },
      { name: "KPI Setting", highlight: true },
      { name: "Organization Development", highlight: false },
      { name: "Training Needs Analysis", highlight: false },
      { name: "Payroll Fundamentals", highlight: false },
      { name: "Egyptian Labor Law", highlight: true },
      { name: "Egyptian Social Insurance Law", highlight: false }
    ]
  }
];

export const featuredProject = {
  title: "Blood Plasma Donation System",
  projectType: "Graduation Project",
  technologies: ["HTML5", "CSS3", "JavaScript"],
  tagline: "Connecting volunteer donors with healthcare centers through an intelligent matching and scheduling workflow.",
  overview: "Designed and developed a specialized web application for blood plasma donation. The system allows donors to register their critical information and supports matching them with the nearest qualified donation center while scheduling an appointment seamlessly.",
  impactNote: "Applied core web standards to solve a critical healthcare logistics problem, focusing on simplicity, rapid donor intake, and user accessibility.",
  features: [
    {
      title: "Donor Registration",
      desc: "Structured online registration interface enabling volunteers to create donor profiles with minimal friction."
    },
    {
      title: "Donor Information Collection",
      desc: "Comprehensive intake of essential medical eligibility factors and personal demographic data."
    },
    {
      title: "Nearest Donation Center Assignment",
      desc: "Algorithmic mapping that pairs each registered donor with the geographically closest medical facility."
    },
    {
      title: "Appointment Scheduling",
      desc: "Interactive time-slot reservation system to balance donation center intake and eliminate long waiting times."
    },
    {
      title: "Simplified Donation Matching Workflow",
      desc: "Streamlined end-to-end pipeline connecting the initial registration directly to the confirmed appointment."
    }
  ],
  workflowSteps: [
    {
      step: "01",
      title: "Donor Registration & Intake",
      summary: "Volunteers submit contact info, blood group eligibility details, and preferred donation parameters through a validated form.",
      visualBadge: "Step 1: Input"
    },
    {
      step: "02",
      title: "Donation Center Matching",
      summary: "The system processes donor location data against registered blood plasma centers to assign the optimal nearby medical facility.",
      visualBadge: "Step 2: Processing"
    },
    {
      step: "03",
      title: "Appointment Scheduling",
      summary: "A confirmation schedule is generated with center details, assigned time slot, and preparation guidelines for the donor.",
      visualBadge: "Step 3: Output"
    }
  ]
};

export const experienceData = [
  {
    company: "El Araby Group",
    role: "Customer Service Intern",
    type: "Internship",
    location: "Egypt",
    responsibilities: [
      "Recorded and managed accurate customer data using internal corporate systems.",
      "Processed diverse customer inquiries and provided clear product guidance.",
      "Handled technical maintenance requests and routed them to service departments.",
      "Coordinated installation scheduling between technicians and clients.",
      "Managed customer complaints with professional de-escalation techniques.",
      "Communicated professionally with clients across various support channels.",
      "Maintained strict focus on timely resolutions and high-quality customer support."
    ],
    skillsGained: [
      "Communication",
      "Customer Relationship Management (CRM)",
      "Data Accuracy",
      "Problem-Solving",
      "Organization",
      "Professional Responsibility"
    ]
  }
];

export const educationData = {
  degree: {
    institution: "Thebes Higher Institute of Management and Information Technology",
    major: "Management Information Systems (MIS)",
    period: "2018 – 2022",
    grade: "Good",
    description: "Four-year comprehensive curriculum integrating computing technologies, database modeling, systems analysis, management principles, and enterprise information systems."
  },
  courses: [
    {
      id: "web-master",
      title: "Web Master Full Stack",
      provider: "IT Share",
      location: "Dokki, Giza",
      year: "2023",
      category: "Full Stack Web Engineering",
      topics: {
        frontend: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "TypeScript",
          "React.js",
          "Bootstrap",
          "Responsive Web Design"
        ],
        backend: [
          "PHP",
          "Laravel",
          "MySQL",
          "PostgreSQL",
          "Postman",
          "Database Management Basics"
        ]
      }
    },
    {
      id: "hr-diploma",
      title: "Professional Diploma in Human Resources",
      provider: "Professional Services – Proserv",
      location: "Maadi, Cairo",
      year: "2024",
      category: "Human Resources & Labor Law",
      topicsList: [
        "Management Strategies",
        "Organization Development",
        "Performance Management & Appraisals",
        "Recruitment & Selection",
        "Training & Development",
        "Talent Management",
        "Compensation & Benefits",
        "Payroll",
        "Egyptian Labor Law No. 12 of 2003",
        "Egyptian Social Insurance Law No. 148 of 2019"
      ]
    },
    {
      id: "icareer",
      title: "Icareer Technical Track",
      provider: "Icareer",
      location: "Cairo",
      year: "2026",
      category: "Product Management & AI-Assisted Engineering",
      topicsList: [
        "BRD & PRD Foundations",
        "Requirements Gathering",
        "PRD to Jira Delivery Planning",
        "Epics and User Stories",
        "Sprint Planning",
        "AI Development Stack",
        "APIs and AI Tools",
        "Git & GitHub Collaboration",
        "Code Reviews",
        "Debugging",
        "Requirements Clarification",
        "End-to-End Technical Project Delivery"
      ]
    }
  ]
};

export const beyondTechnology = {
  title: "Beyond Technology: Strategic Thinking & Chess",
  subtitle: "How analytical discipline on the 64 squares translates to robust software and systems thinking.",
  overview: "Chess is not just a game; it has been my intellectual laboratory for developing critical decision-making frameworks. Approaching problems methodically under pressure mirrors the exact analytical mindset required in systems analysis and software engineering.",
  disciplines: [
    {
      title: "Strategic Problem-Solving",
      description: "Looking beyond immediate tactical moves to envision long-term positional advantages and systemic outcomes."
    },
    {
      title: "Analytical Thinking",
      description: "Evaluating complex branching possibilities, calculating trade-offs, and choosing the optimal path systematically."
    },
    {
      title: "Risk Assessment & Resilience",
      description: "Anticipating opponent counterplay, minimizing vulnerabilities, and recovering composure after setbacks."
    },
    {
      title: "Decision-Making & Focus",
      description: "Operating decisively within clock limits while sustaining high attention to minute details and edge cases."
    },
    {
      title: "Resource Management",
      description: "Maximizing the utility of every piece on the board, ensuring balance and coordination across all elements."
    },
    {
      title: "Adaptability",
      description: "Pivoting strategies smoothly when unexpected moves or altered board dynamics challenge original plans."
    }
  ],
  constraintExperience: {
    highlight: "Constrained Chess & Pawn-Only Challenges",
    description: "My engagement with advanced chess constraints—including pawn-only endgame studies and heavily limited piece positions—taught me the art of extracting maximum value from scarce resources. In software and business analysis, you rarely have unlimited budget, compute, or time; learning to achieve critical objectives under strict constraints is one of the most transferable problem-solving habits I possess."
  }
};
