/* ============================================================
   PORTFOLIO CONTENT — edit THIS file only, then refresh.
   ============================================================ */

window.PORTFOLIO = {

  theme: {
    "--bg": "#1d2129",
    "--surface": "#212c3f",
    "--border": "#2a3140",
    "--text": "#ffffff",
    "--muted": "#9aa3b2",
    "--accent": "#009ba0",
    "--accent-contrast": "#ffffff",
    "--radius": "12px"
  },

  site: {
    title: "Georgette's Site",
    description: "Portfolio of Georgette.",
    logo: "Georgette."
  },

  nav: [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ],

  hero: {
    eyebrow: "Hi, my name is",
    name: "Georgette",
    accent: ".",
    subtitle: "I code sometimes.",
    intro: "IT student who ended up on the documentation side of a capstone and stayed there: SRS, traceability matrix, UAT cases. I'm interested in how systems are supposed to work, not just how they get built. Careful, adapatable, and open to internships and entry-level roles across development, documentation, QA, analysis, and support.",
    buttons: [
      { label: "View my work", href: "#projects", style: "primary" },
      { label: "Get in touch", href: "#contact", style: "outline" }
    ]
  },

  about: {
    facts: [
      { label: "Location", value: "Makati, Philippines" },
      { label: "Focus", value: "Frontend & documentation" },
      { label: "Availability", value: "Open to internships & entry-level roles" },
      { label: "Email", value: "real.gette13@gmail.com", href: "mailto:real.gette13@gmail.com" }
    ]
  },

  skills: {
    title: "Skills & Interests",
    intro: "Tools and methods I've worked with across projects and coursework.",
    groups: [
      { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "TypeScript (learning)", "Figma"] },
      { title: "Backend & data", items: ["Python", "Java", "Node.js", "Express", "MySQL", "MongoDB", "SQLite", "Postman", "Spring Boot", "NetBeans"] },
      { title: "Documentation", items: ["SRS writing", "Requirements traceability (RTM)", "UAT documentation", "Markdown (docs-as-code)"] },
      { title: "Tools & build", items: ["Git", "VS Code", "Prettier", "Android Studio", "Vercel", "Render"] },
      { title: "Online courses & badges", items: ["AWS Educate: Introduction to Cloud 101 (2026)", "Microsoft Learn: AD DS, Group Policy, WS administration, network security, Azure App Service (2025)"] }
    ]
  },

  projects: {
    title: "Selected work",
    intro: "Projects I've designed, built, and documented over the past two years.",
    items: [
      {
        title: "Curatering",
        description: "Documenter · October 2026. Authored the capstone manuscript and SRS, built a requirements traceability matrix, and documented UAT results for panel defense.",
        tags: ["SRS", "Requirements traceability", "UAT", "draw.io"],
        links: [
          { label: "Live site", url: "https://www.macrinas-kitchen.curatering.com" }
        ]
      },
      {
        title: "Bloomhouse",
        description: "Front-End Developer · October 2025. Designed a conceptual flower shop UI in React and Tailwind CSS (frontend only), including a responsive hero and featured-arrangements gallery.",
        tags: ["React", "Tailwind CSS", "Responsive design"],
        links: [
          { label: "Live site", url: "https://bloomhouse-ph.vercel.app" }
        ]
      },
      {
        title: "The Dirty Kitchen",
        description: "Documenter & Programmer · September 2024. Full-stack recipe discovery app with React search/filtering and an Express + SQLite backend.",
        tags: ["React", "Express", "SQLite", "Vercel", "Render"],
        links: [
          { label: "Live site", url: "https://the-dirty-kitchen-concept.vercel.app" }
        ]
      },
      {
        title: "Curiosities",
        description: "Developer · March 2024. Built a native Android trivia app in Android Studio with categorized domains, custom UI themes, and AI-generated icons, splash screens, and visuals.",
        tags: ["Java", "Android Studio", "UI design"],
        links: [
          { label: "Download APK", url: "https://tinyurl.com/curiosities-apk" }
        ]
      }
    ]
  },

  contact: {
    title: "Get in touch",
    text: "Whether you have a question or just want to say hi, my inbox is always open. I'll get back to you as soon as I can.",
    buttons: [
      { label: "Say hello", href: "mailto: real.gette13@gmail.com", style: "primary" },
      { label: "GitHub", href: "https://github.com/diyordiyett", style: "outline" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/georgette-tulod/", style: "outline" }
    ]
  },

  footer: {
    text: "Georgette. Built with plain HTML, CSS and JavaScript.",
    backToTop: "Back to top"
  }
};