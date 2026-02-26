// src/i18n/ui.ts
export const ui = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      toggleTheme: "Toggle theme",
    },
    hero: {
      greeting: "Hey I'm Eloy",
      badge: "Available for hire",
      experience: "1 year of experience.",
      role: "Web Developer.",
      location: "From Galicia, Spain.",
      specialty: "Specialized in building unique applications.",
      altAvatar: "Eloy photo",
    },
    social: {
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "esanchezmeijide@gmail.com",
    },
    about: {
      title: "About me",
      p1: "Hi! I'm Eloy, a technology enthusiast who found in programming the perfect mix of logic and creativity.",
      p2: "My approach goes beyond writing lines of code; I focus on building complete solutions. I'm fluent in the React and Next.js ecosystem, and I enjoy designing solid data structures with PostgreSQL.",
      p3: "For me, every project is an opportunity to balance extreme performance (thanks to tools like Astro) with a polished aesthetic using Tailwind CSS.",
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Projects",
      intro:
        "Some recent projects. If you want to see more, I have private repos and demos available upon request.",
      ctaGithub: "View on GitHub",
      card1: {
        title: "Project name",
        type: "Web App",
        desc:
          "Short project description. What problem it solves and what makes it interesting.",
        tags: ["Astro", "Tailwind", "TypeScript"],
        live: "Live",
        code: "Code",
      },
      card2: {
        title: "Project name",
        type: "Landing",
        desc:
          "Short project description. Metrics, speed, accessibility, etc.",
        tags: ["React", "Next.js", "SEO"],
        live: "Live",
        code: "Code",
      },
    },
    contact: {
      eyebrow: "Let’s build",
      title: "Contact",
      intro: "Do you have a project in mind? Message me and I’ll reply quickly.",
      cards: {
        emailLabel: "Email",
        emailValue: "youremail@domain.com",
        linkedinLabel: "LinkedIn",
        linkedinValue: "Connect",
        githubLabel: "GitHub",
        githubValue: "View repos",
      },
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@email.com",
        message: "Message",
        messagePlaceholder: "Tell me what you need…",
        submit: "Send",
        note:
          "(This form is UI only. If you want it to actually send emails, tell me if you’ll use Netlify Forms, Formspree, or your own endpoint.)",
      },
    },
  },

  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
      toggleTheme: "Cambiar tema",
    },
    hero: {
      greeting: "Hey, soy Eloy",
      badge: "Dispobible para trabajar",
      experience: "1 año de experiencia.",
      role: "Desarrollador Web.",
      location: "De Galicia, España.",
      specialty: "Especializado en crear aplicaciones únicas.",
      altAvatar: "Foto de Eloy",
    },
    social: {
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "esanchezmeijide@gmail.com",
    },
    about: {
      title: "Sobre mí",
      p1: "¡Hola! Soy Eloy, un apasionado de la tecnología que encontró en la programación la mezcla perfecta entre lógica y creatividad.",
      p2: "Mi enfoque va más allá de escribir líneas de código; me dedico a crear soluciones completas. Me muevo con fluidez en el ecosistema de React y Next.js, y disfruto diseñando estructuras de datos sólidas en PostgreSQL.",
      p3: "Para mí, cada proyecto es una oportunidad de equilibrar un rendimiento extremo (gracias a herramientas como Astro) con una estética impecable usando Tailwind CSS.",
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Proyectos",
      intro:
        "Algunos proyectos recientes. Si quieres ver más, tengo repos privados y demos bajo petición.",
      ctaGithub: "Ver en GitHub",
      card1: {
        title: "Nombre del proyecto",
        type: "Web App",
        desc:
          "Descripción corta del proyecto. Qué problema resuelve y qué lo hace interesante.",
        tags: ["Astro", "Tailwind", "TypeScript"],
        live: "Live",
        code: "Code",
      },
      card2: {
        title: "Nombre del proyecto",
        type: "Landing",
        desc:
          "Descripción corta del proyecto. Métricas, velocidad, accesibilidad, etc.",
        tags: ["React", "Next.js", "SEO"],
        live: "Live",
        code: "Code",
      },
    },
    contact: {
      eyebrow: "Let’s build",
      title: "Contacto",
      intro: "¿Tienes un proyecto en mente? Escríbeme y te respondo rápido.",
      cards: {
        emailLabel: "Email",
        emailValue: "tuemail@dominio.com",
        linkedinLabel: "LinkedIn",
        linkedinValue: "Conectar",
        githubLabel: "GitHub",
        githubValue: "Ver repos",
      },
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        email: "Email",
        emailPlaceholder: "tu@email.com",
        message: "Mensaje",
        messagePlaceholder: "Cuéntame qué necesitas…",
        submit: "Enviar",
        note:
          "(Este formulario es UI. Si quieres que envíe emails de verdad, dime si usarás Netlify Forms, Formspree o un endpoint propio.)",
      },
    },
  },
} as const;

export type Locale = keyof typeof ui;