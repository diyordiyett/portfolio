/* ============================================================
   PORTFOLIO CONTENT — edit THIS file only, then refresh.
   Everything shown on index.html comes from here.
   - Change text by editing the values between quotes.
   - Add a project / skill group / nav link by copying a block.
   - Remove a nav link by deleting its line.
   ============================================================ */

window.PORTFOLIO = {

  /* Colors — CSS variables. Change a value, refresh, done. */
  theme: {
    "--bg": "#0e1014",               /* page background */
    "--surface": "#161a21",          /* cards, menus */
    "--border": "#2a3140",           /* borders */
    "--text": "#e9ecf2",             /* main text */
    "--muted": "#9aa3b2",            /* secondary text */
    "--accent": "#6d8cff",           /* links, buttons, highlights */
    "--accent-contrast": "#ffffff",  /* text on accent buttons */
    "--radius": "12px"               /* card corner roundness */
  },

  /* Browser tab + SEO */
  site: {
    title: "Georgette Tulod — Portfolio",
    description: "Portfolio of Georgette Tulod, frontend developer and designer. Selected projects, skills and contact information.",
    logo: "Georgette."
  },

  /* Top navigation — delete a line to hide that link.
     Each href must match a section id in index.html
     (#about, #skills, #projects, #contact, #home). */
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ],

  /* Top of the page */
  hero: {
    eyebrow: "Hi, my name is",
    name: "Georgette Tulod",
    accent: ".",                    /* the colored part after the name */
    subtitle: "I build fast, accessible websites for the web.",
    intro: "I'm a frontend developer based in Berlin who loves turning ideas into polished, user-friendly products. Below you'll find a selection of my work, the tools I use, and the best ways to reach me.",
    buttons: [
      { label: "View my work", href: "#projects", style: "primary" },
      { label: "Get in touch", href: "#contact", style: "outline" }
    ]
  },

  /* About — paragraphs and quick facts */
  about: {
    title: "A little about me",
    paragraphs: [
      "I care about clean interfaces, sensible performance and code that's easy to maintain. Over the last few years I've worked with startups and agencies to ship marketing sites, dashboards and internal tools that people actually enjoy using.",
      "When I'm not coding, you'll find me photographing city streets, contributing to open source, or exploring hiking trails with a camera in one hand and a coffee in the other."
    ],
    facts: [
      { label: "Location", value: "Berlin, Germany" },
      { label: "Experience", value: "4+ years" },
      { label: "Availability", value: "Open to freelance" },
      { label: "Email", value: "hello@alexmorgan.dev", href: "mailto:hello@alexmorgan.dev" }
    ]
  },

  /* Skills — copy a whole { title, items } block to add a group */
  skills: {
    title: "Tools I work with",
    intro: "A snapshot of the technologies and disciplines I use every day.",
    groups: [
      { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS"] },
      { title: "Backend & tools", items: ["Node.js", "REST APIs", "PostgreSQL", "Git", "Vite", "Docker"] },
      { title: "Design & craft", items: ["Figma", "Responsive design", "Accessibility", "Performance", "SEO"] }
    ]
  },

  /* Projects — copy a whole { ... } block to add another project */
  projects: {
    title: "Selected work",
    intro: "A few things I've designed and built recently.",
    items: [
      {
        title: "Nova Dashboard",
        description: "A real-time analytics dashboard for SaaS teams with custom charts, role-based access and a dark mode that doesn't hurt the eyes.",
        tags: ["React", "TypeScript", "D3.js"],
        links: [
          { label: "Live demo", url: "https://example.com" },
          { label: "Source code", url: "https://github.com/yourusername/project" }
        ]
      },
      {
        title: "Wanderlog",
        description: "An offline-first travel planner that stores itineraries locally and syncs when you're back online. Installable as a progressive web app.",
        tags: ["Vanilla JS", "PWA", "IndexedDB"],
        links: [
          { label: "Live demo", url: "https://example.com" },
          { label: "Source code", url: "https://github.com/yourusername/project" }
        ]
      },
      {
        title: "Brewfinder",
        description: "A fast, searchable directory of specialty coffee shops with map views, filters and reviews contributed by the community.",
        tags: ["Eleventy", "CSS", "Mapbox"],
        links: [
          { label: "Live demo", url: "https://example.com" },
          { label: "Source code", url: "https://github.com/yourusername/project" }
        ]
      }
    ]
  },

  /* Contact — style is "primary" (filled) or "outline" */
  contact: {
    title: "Get in touch",
    text: "I'm currently available for freelance projects and full-time roles. Whether you have a question or just want to say hi, my inbox is always open — I'll get back to you as soon as I can.",
    buttons: [
      { label: "Say hello", href: "mailto:hello@alexmorgan.dev", style: "primary" },
      { label: "GitHub", href: "https://github.com/yourusername", style: "outline" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/yourusername", style: "outline" }
    ]
  },

  /* Footer — the year is added automatically */
  footer: {
    text: "Alex Morgan. Built with plain HTML, CSS and JavaScript.",
    backToTop: "Back to top"
  }
};
