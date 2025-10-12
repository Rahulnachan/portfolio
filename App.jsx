import React  from "react";
import axios from  "axios";
import { Github, Linkedin, Mail, FileDown, ArrowRight, ExternalLink, Phone } from "lucide-react";

// ====== PROFILE ======
const PROFILE = {
  name: "Rahul Rameshwar Nachan",
  role: "Front-End Developer (Fresher)",
  summary: "Enthusiastic React developer with a knack for clean UI, reusable components, and pixel‑perfect execution. I love building fast, accessible, and responsive web apps.",
  location: "Pune, Maharashtra",
  email: "nachanrahul8@gmail.com",
  phone: "+919022799695",
  resumeUrl: "#",
  avatar: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800&auto=format&fit=",
  links: {
    github: "https://github.com/Rahulnachan",
    linkedin: "https://www.linkedin.com/in/Rahul Nachan/",
    portfolio: "Rahul-portfolio",
  },
};

// ====== SKILLS ======
const SKILLS = [
  "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Vite",
  "Redux Toolkit", "TailwindCSS", "REST APIs", "Git & GitHub", "Basics of Node.js", "Responsive Design", "Accessibility (a11y)"
];

// ====== PROJECTS ======
const PROJECTS = [
  {
    title: "TaskTrackr – Productivity App",
    description: "A lightweight task manager with drag‑and‑drop, filters, and local storage sync. Built with React + Zustand + Tailwind.",
    tech: ["React", "Zustand", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    demo: "#", repo: "#",
  },
 
  {
    title: "ShopLite – Mini E‑commerce UI",
    description: "Responsive product listing, cart state, and checkout mock. Focus on UI patterns and component composition.",
    tech: ["React", "Context API", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop",
    demo: "#", repo: "#",
  },
];

// ====== Components ======
const Chip = ({ children }) => (
  <span className="inline-block rounded-full border px-3 py-1 text-xs md:text-sm">{children}</span>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="py-16 md:py-20">
    <div className="w-full px-4 md:px-8 lg:px-16 mx-auto">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      <div className="mt-6 md:mt-8">{children}</div>
    </div>
  </section>
);

const Header = () => {
  const NavLink = ({ href, children }) => (
    <a href={href} className="text-sm font-medium text-gray-600 transition hover:text-gray-900">{children}</a>
  );

  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="flex w-full px-4 md:px-8 lg:px-16 items-center justify-between py-3">
        <a href="#home" className="font-semibold tracking-tight">{PROFILE.name}</a>
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <a href={PROFILE.resumeUrl} className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition hover:shadow">
            <FileDown className="h-4 w-4" /> Resume
          </a>
        </div>
      </div>
    </header>
  );
};

const Hero = () => (
  <section id="home" className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
    <div className="w-full px-4 md:px-8 lg:px-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-gray-600">
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> Open to Work
        </div>
        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
          Hi, I’m <span className="text-emerald-600">{PROFILE.name}</span>
        </h1>
        <p className="mt-3 text-lg text-gray-600 md:text-xl">{PROFILE.role}</p>
        <p className="mt-4 max-w-xl text-gray-600">{PROFILE.summary}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-white shadow transition hover:bg-emerald-700">
            View Projects <ArrowRight className="h-4 w-4" />
          </a>
          <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-gray-800 transition hover:shadow">
            <Mail className="h-4 w-4" /> Contact Me
          </a>
        </div>
        <div className="mt-6 flex items-center gap-4 text-gray-600">
          <a href={PROFILE.links.github} className="hover:text-gray-900"><Github className="h-5 w-5" /></a>
          <a href={PROFILE.links.linkedin} className="hover:text-gray-900"><Linkedin className="h-5 w-5" /></a>
          <a href={PROFILE.links.portfolio} className="hover:text-gray-900"><ExternalLink className="h-5 w-5" /></a>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-sm">
        <div className="absolute -inset-4 -z-10 rounded-3xl bg-emerald-100 blur-2xl" />
        <img src={PROFILE.avatar} alt={`${PROFILE.name} avatar`} className="w-full rounded-3xl object-cover shadow-lg" />
      </div>
    </div>
  </section>
);

const Projects = () => (
  <Section id="projects" title="Projects">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.map((p, idx) => (
        <article key={idx} className="group overflow-hidden rounded-2xl border bg-white transition hover:shadow-lg">
          <div className="aspect-[16/10] overflow-hidden">
            <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          </div>
          <div className="space-y-3 p-4">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.description}</p>
            <div className="flex flex-wrap gap-2">{p.tech.map((t) => <Chip key={t}>{t}</Chip>)}</div>
            <div className="flex items-center gap-3 pt-1">
              <a href={p.demo} className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 hover:underline">Live Demo <ExternalLink className="h-4 w-4" /></a>
              <a href={p.repo} className="inline-flex items-center gap-1 text-sm font-medium text-gray-800 hover:underline">Code <Github className="h-4 w-4" /></a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </Section>
);

const Skills = () => (
  <Section id="skills" title="Skills">
    <div className="flex flex-wrap gap-2">{SKILLS.map((s) => <Chip key={s}>{s}</Chip>)}</div>
  </Section>
);

const About = () => (
  <Section id="about" title="About">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="md:col-span-2">
        <p className="text-gray-700">I’m a fresher passionate about building delightful front‑ends...</p>
        <ul className="mt-4 list-inside list-disc text-gray-700">
          <li>Strong fundamentals in JavaScript, React, and modern CSS.</li>
          <li>Hands‑on with Vite/Next.js tooling, Git, and REST APIs.</li>
          <li>Comfortable collaborating via GitHub and documenting work clearly.</li>
        </ul>
      </div>
      <div>
        <div className="rounded-2xl border bg-white p-4">
          <h4 className="font-semibold">Quick Info</h4>
          <div className="mt-3 space-y-2 text-gray-700">
            <p><span className="font-medium">Location:</span> {PROFILE.location}</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> {PROFILE.email}</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> {PROFILE.phone}</p>
            <p><a href={PROFILE.resumeUrl} className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium hover:shadow"><FileDown className="h-4 w-4" /> Download Resume</a></p>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      await axios.post("http://localhost:5000/contact", data);
      alert(`Thanks, ${data.name}! Your message has been sent.`);
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  return (
    <Section id="contact" title="Contact">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <p className="text-gray-700">Have a role, internship, or project in mind? I’d love to collaborate...</p>
          <div className="mt-4 space-x-4">
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"><Mail className="h-4 w-4" /> {PROFILE.email}</a>
            <a href={PROFILE.links.linkedin} className="inline-flex items-center gap-2 rounded-full border px-4 py-2 hover:shadow"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl border bg-white p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <label className="space-y-1">
              <span className="text-sm text-gray-600">Name</span>
              <input name="name" required className="w-full rounded-xl border px-3 py-2 outline-none ring-emerald-200 focus:ring" placeholder="Your full name" />
            </label>
            <label className="space-y-1">
              <span className="text-sm text-gray-600">Email</span>
              <input type="email" name="email" required className="w-full rounded-xl border px-3 py-2 outline-none ring-emerald-200 focus:ring" placeholder="you@example.com" />
            </label>
            <label className="md:col-span-2 space-y-1">
              <span className="text-sm text-gray-600">Message</span>
              <textarea name="message" required rows={4} className="w-full rounded-xl border px-3 py-2 outline-none ring-emerald-200 focus:ring" placeholder="Tell me about your project..." />
            </label>
          </div>
          <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700">Send Message <ArrowRight className="h-4 w-4" /></button>
        </form>
      </div>
    </Section>
  );
};

const Footer = () => (
  <footer className="border-t bg-white py-8">
    <div className="flex w-full px-4 md:px-8 lg:px-16 flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-gray-600">© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
      <div className="flex items-center gap-4 text-gray-600">
        <a href={PROFILE.links.github} className="hover:text-gray-900"><Github className="h-5 w-5" /></a>
        <a href={PROFILE.links.linkedin} className="hover:text-gray-900"><Linkedin className="h-5 w-5" /></a>
        <a href={`mailto:${PROFILE.email}`} className="hover:text-gray-900"><Mail className="h-5 w-5" /></a>
      </div>
    </div>
  </footer>
);

export default function PortfolioSite() {
  React.useEffect(() => {
    const handler = (e) => {
      const target = e.target;
      const a = target && target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (id?.startsWith('#') && id.length > 1) {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="min-h-screen scroll-smooth bg-white text-gray-900">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
