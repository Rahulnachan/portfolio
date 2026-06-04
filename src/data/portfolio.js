export const skills = [
  {
    category: "Frontend Technologies",
    items: [
      { name: "React.js", level: 90, icon: "FaReact" },
      { name: "JavaScript", level: 85, icon: "FaJs" },
      { name: "HTML", level: 95, icon: "FaHtml5" },
      { name: "CSS", level: 90, icon: "FaCss3" },
      { name: "Tailwind CSS", level: 90, icon: "SiTailwindcss" },
    ]
  },
 {
  category: "Backend & Tools",
  items: [
    { name: "Core Java", level: 75, icon: "FaJava" },
    { name: "WordPress", level: 85, icon: "SiWordpress" },
    { name: "Elementor", level: 80, icon: "SiElementor" },
    { name: "WooCommerce", level: 75, icon: "SiWoocommerce" },
    { name: "Git & GitHub", level: 85, icon: "FaGithub" },
    { name: "API Integration", level: 80, icon: "MdApi" },
    { name: "Responsive Design", level: 92, icon: "MdDevices" },
  ]
}
];

export const experiences = [
  {
    id: 1,
    company: "Thynk Tech India Pvt Ltd",
    position: "Frontend Developer",
    duration: "Jan 2026 – Apr 2026",
    location: "Pune, India",
    description: "Developed responsive web applications using React.js and Tailwind CSS. Collaborated with design and backend teams to implement modern UI/UX designs.",
    achievements: [
      "Built reusable React.js components",
      "Improved website performance by 40%",
      "Implemented API integrations",
      "Collaborated with frontend and backend teams"
    ]
  },
  {
    id: 2,
    company: "Inflow Influencers LLP",
    position: "React.js Developer",
    duration: "June 2025 – Nov 2025",
    location: "Pune, India",
    description: "Developed responsive web applications using React.js, JavaScript, Tailwind CSS, and REST APIs. Built reusable UI components and optimized application performance.",
    achievements: [
      "Developed reusable React.js components",
      "Integrated REST APIs",
      "Improved UI responsiveness across devices",
      "Collaborated with designers and backend developers"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "RN Classes Website",
    description: "A modern educational platform built using React.js for frontend and Java Spring Boot for backend.",
    longDescription: "Full-featured educational platform with student dashboard, authentication, course management, and Java backend APIs.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    technologies: ["React.js", "Tailwind CSS", "Java", "Spring Boot", "REST API"],
    liveLink: "https://rn-classes-two.vercel.app/",
    githubLink: "https://github.com/Rahulnachan/RNClasses",   // ✅ Corrected
    features: [
      "Student Dashboard",
      "Course Management",
      "Authentication",
      "Java Spring Boot Backend",
      "REST API Integration"
    ]
  },
  {
    id: 2,
    title: "Grocery E-Commerce Website",
    description: "Full-stack e-commerce solution for grocery shopping with cart management and checkout functionality.",
    longDescription: "Complete e-commerce platform with product catalog, shopping cart, and integrated payment system.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "WooCommerce"],
    githubLink: "https://github.com/Rahulnachan/grocify",   // ✅ Corrected
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Payment Integration",
      "Order Management"
    ]
  }
];

export const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Modern, responsive web applications built with React.js, JavaScript, and Tailwind CSS.",
    icon: "FaCode"
  },
  {
    id: 2,
    title: "WordPress Development",
    description: "Custom WordPress websites with Elementor, WooCommerce, and advanced plugins.",
    icon: "SiWordpress"
  },
  {
    id: 3,
    title: "Responsive Design",
    description: "Mobile-first responsive designs that work seamlessly across all devices.",
    icon: "MdDevices"
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Beautiful, user-centered interfaces with modern design principles and animations.",
    icon: "MdDesignServices"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Chetan Sathe",
    role: "Project Manager at Tech Corp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    content: "Rahul is an exceptional frontend developer. His attention to detail and ability to translate designs into responsive web applications is outstanding."
  },
  {
    id: 2,
    name: "Shruti Landge",
    role: "UI/UX Designer at Creative Studio",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    content: "Working with Rahul has been a pleasure. He brings creative ideas to the table and delivers pixel-perfect implementations."
  },
  {
    id: 3,
    name: "Mike Chen",
    role: "CEO at StartUp Labs",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    content: "Rahul helped us build our entire product frontend. His performance optimization skills are impressive and the result speaks for itself."
  }
];

export const socialLinks = [
  { icon: "FaGithub", url: "https://github.com/Rahulnachan", label: "GitHub" },
  { icon: "FaLinkedin", url: "https://linkedin.com/in/rahul-nachan-88335a372", label: "LinkedIn" },
  { icon: "FaWhatsapp", url: "https://wa.me/919022799695", label: "WhatsApp" },
  { icon: "FaEnvelope", url: "mailto:nachanrahul8@gmail.com", label: "Email" }
];

export const navigation = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Experience", href: "experience" },
  { name: "Projects", href: "projects" },
  { name: "Services", href: "services" },
  { name: "Contact", href: "contact" }
];

export const personalInfo = {
  name: "Rahul Nachan",
  role: "Frontend Developer",
  location: "Pune, India",
  email: "nachanrahul8@gmail.com",
  phone: "+91 9022799695",
  bio: "Passionate Frontend Developer with 1+ year of experience building responsive, modern web applications using React.js and Tailwind CSS.",
  education: {
    degree: "Bachelor of Computer Science (BCS)",
    university: "Savitribai Phule Pune University",
    year: "2026"
  }
};