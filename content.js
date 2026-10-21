/* ============================================================
   PORTFOLIO CONTENT — edit THIS file only, then refresh.
   ============================================================ */

window.PORTFOLIO = {

  theme: {
    "--bg": "#0e1014",
    "--surface": "#161a21",
    "--border": "#2a3140",
    "--text": "#e9ecf2",
    "--muted": "#9aa3b2",
    "--accent": "#6d8cff",
    "--accent-contrast": "#ffffff",
    "--radius": "12px"
  },

  site: {
    title: "[Your Name] — Developer & Technical Documenter",
    description: "Portfolio of [Your Name], a frontend developer and technical documenter. Selected projects in React, full-stack, and Android, plus skills and contact information.",
    logo: "[Your Name]."
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ],

  hero: {
    eyebrow: "Hi, my name is",
    name: "[Your Name]",
    accent: ".",
    subtitle: "Frontend developer & technical documenter.",
    intro: "I build clean, responsive interfaces — and I document them properly. My work spans React front-ends, a full-stack recipe app, and a native Android trivia game, backed by SRS writing, requirements traceability, and UAT testing. Below you'll find selected projects, the tools I use, and how to reach me.",
    buttons: [
      { label: "View my work", href: "#projects", style: "primary" },
      { label: "Get in touch", href: "#contact", style: "outline" }
    ]
  },

  about: {
    title: "A little about me",
    paragraphs: [
      "I care about clean interfaces and code that's easy to maintain — and I bring the same care to the documentation behind it. Across my capstone and course projects I've written Software Requirements Specifications, built requirements traceability matrices, and run user acceptance testing, while also shipping React front-ends, an Express + SQLite backend, and a native Android app.",
      "I'm currently strengthening my cloud fundamentals through AWS Educate and Microsoft Learn, and I'm looking for internships or entry-level roles that combine frontend development with solid technical documentation and QA."
    ],
    facts: [
      { label: "Location", value: "[City, Country]" },
      { label: "Focus", value: "Frontend & documentation" },
      { label: "Availability", value: "Open to internships & entry-level roles" },
      { label: "Email", value: "[you@example.com]", href: "mailto:you@example.com" }
    ]
  },

  skills: {
    title: "Tools & skills",
    intro: "A snapshot of the technologies, methods, and tools I use across development and documentation.",
    groups: [
      { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Responsive design"] },
      { title: "Backend & data", items: ["Python", "Java", "Node.js", "Express", "MySQL", "MongoDB", "SQLite"] },
      { title: "Documentation & QA", items: ["SRS writing", "Requirements traceability matrix", "UAT documentation", "Technical diagrams", "draw.io"] },
      { title: "Tools & platforms", items: ["Git", "GitHub Desktop", "VS Code", "Android Studio", "Vercel", "Render", "MS Office"] },
      { title: "Cloud & learning", items: ["AWS Educate — Cloud 101", "Azure App Service", "AD DS & Group Policy", "Windows Server", "Network security"] }
    ]
  },

  projects: {
    title: "Selected work",
    intro: "Projects I've designed, built, and documented over the past two years.",
    items: [
      {
        title: "Curatering",
        description: "Role: Documenter · October 2026. Authored the capstone manuscript and Software Requirements Specification, defining functional requirements and technical diagrams. Built a requirements traceability matrix mapping each requirement to its diagram and test case to track design and test coverage, and documented the UAT survey and results presented at the panel defense.",
        tags: ["SRS", "Requirements traceability", "UAT", "draw.io"],
        links: [
          { label: "Live site", url: "https://www.macrinas-kitchen.curatering.com" }
        ]
      },
      {
        title: "Bloomhouse",
        description: "Role: Front-End Developer · October 2025. Designed the user interface for a conceptual flower shop using React and Tailwind CSS, without backend functionality. Built a responsive hero section and featured-arrangements gallery, using Tailwind utility classes for CSS Grid, Flexbox, spacing, and typography.",
        tags: ["React", "Tailwind CSS", "Responsive design"],
        links: [
          { label: "Live site", url: "https://bloomhouse-ph.vercel.app" }
        ]
      },
      {
        title: "The Dirty Kitchen",
        description: "Role: Documenter & Programmer · September 2024. Developed and revised a full-stack recipe discovery app: improved React front-end routing, recipe search and filtering, and custom styling; updated the Express and SQLite comment backend and the Vercel + Render deployment setup.",
        tags: ["React", "Express", "SQLite", "Vercel", "Render"],
        links: [
          { label: "Live site", url: "https://the-dirty-kitchen-concept.vercel.app" }
        ]
      },
      {
        title: "Curiosities",
        description: "Role: Developer · March 2024. Built a native Android trivia app in Android Studio with categorized knowledge domains and custom UI themes. Used image-generation tools to create custom icons, splash screens, and trivia visuals for a cohesive interface.",
        tags: ["Java", "Android Studio", "UI design"],
        links: [
          { label: "Download APK", url: "https://tinyurl.com/curiosities-apk" }
        ]
      }
    ]
  },

  contact: {
    title: "Get in touch",
    text: "I'm currently open to internships, entry-level roles, and freelance work in frontend development, technical documentation, or QA. Whether you have a question or just want to say hi, my inbox is always open — I'll get back to you as soon as I can.",
    buttons: [
      { label: "Say hello", href: "mailto:you@example.com", style: "primary" },
      { label: "GitHub", href: "https://github.com/yourusername", style: "outline" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/yourusername", style: "outline" }
    ]
  },

  footer: {
    text: "[Your Name]. Built with plain HTML, CSS and JavaScript.",
    backToTop: "Back to top"
  }
};