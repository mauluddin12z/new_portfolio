import html from "@/assets/skills/html.svg";
import css from "@/assets/skills/css.svg";
import js from "@/assets/skills/js.svg";
import nextjs from "@/assets/skills/nextjs.svg";
import expressjs from "@/assets/skills/expressjs.svg";
import mysql from "@/assets/skills/mysql.svg";
import firebase from "@/assets/skills/firebase.svg";
import aws from "@/assets/skills/aws.svg";
import tensorflow from "@/assets/skills/tensorflow.svg";
import python from "@/assets/skills/python.svg";
import docker from "@/assets/skills/docker.svg";
import { Github, Linkedin, Mail } from "lucide-react";

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { k: "5+", v: "Years building" },
  { k: "30+", v: "Shipped projects" },
  { k: "12", v: "Happy clients" },
  { k: "99.9%", v: "Uptime SLA" },
];

export const projects = [
  {
    title: "AI Esports Training Companion",
    tag: "AI Product",
    year: "2026",
    blurb:
      "AI-powered esports coaching platform that simulates structured training sessions to improve player decision-making, gameplay habits, and mindset.",
    stack: ["Next.js", "Gemini AI"],
    image: "/images/projects/ai_esport_training_companion.png",
    liveDemo: "https://ai-esports-training-companion.vercel.app/",
    links: [
      {
        label: "Github",
        url: "https://github.com/mauluddin12z/ai-esports-training-companion",
      },
    ],
    accent: "from-cyan-400/30 to-blue-500/10",
  },
  {
    title: "AI Sales Page Builder",
    tag: "AI SaaS Tool",
    year: "2026",
    blurb:
      "Full-stack AI system that converts structured product inputs into high-converting sales pages with multiple templates and exportable HTML output.",
    stack: ["Next.js", "Gemini AI", "Laravel", "MySQL"],
    image: "/images/projects/sales_page_builder.png",
    liveDemo: "https://sales-page-builder.hidayatmauluddin.my.id/",
    links: [
      {
        label: "Frontend",
        url: "https://github.com/mauluddin12z/sales-page-builder-frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/mauluddin12z/sales-page-builder-backend",
      },
    ],
    accent: "from-violet-400/30 to-fuchsia-500/10",
  },
  {
    title: "Attendance PWA - FKIP Universitas Sriwijaya",
    tag: "Enterprise PWA",
    year: "2025",
    blurb:
      "Location-based attendance system with role-based access control, geolocation validation, and full CRUD management for users and records.",
    stack: ["Next.js", "Express.js", "MySQL"],
    image: "/images/projects/attendance_pwa.png",
    liveDemo: "https://attendance-pwa.hidayatmauluddin.my.id",
    links: [
      {
        label: "Frontend",
        url: "https://github.com/mauluddin12z/frontend-attendance-app-fkip-unsri",
      },
      {
        label: "Backend",
        url: "https://github.com/mauluddin12z/backend-attendance-app-fkip-unsri",
      },
    ],
    accent: "from-emerald-400/30 to-teal-500/10",
  },
  {
    title: "Point of Sale - Warung 19",
    tag: "POS System",
    year: "2025",
    blurb:
      "Web-based POS system to streamline ordering, transactions, and restaurant operations with full admin management support.",
    stack: ["Next.js", "Express.js", "MySQL"],
    image: "/images/projects/pos_warung19.png",
    liveDemo: "https://pos-resto.hidayatmauluddin.my.id",
    links: [
      {
        label: "Frontend",
        url: "https://github.com/mauluddin12z/POS_RESTO19_FRONTEND",
      },
      {
        label: "Backend",
        url: "https://github.com/mauluddin12z/POS_RESTO19_BACKEND",
      },
    ],
    accent: "from-amber-400/30 to-orange-500/10",
  },
  {
    title: "Hambali Furniture",
    tag: "E-Commerce Website",
    year: "2023",
    blurb:
      "E-commerce platform with admin dashboard for product and content management, improving online visibility and store operations.",
    stack: ["Next.js", "Express.js", "MySQL"],
    image: "/images/projects/hambali_furniture.png",
    liveDemo: "https://hambali-furniture.hidayatmauluddin.my.id",
    links: [
      {
        label: "Frontend",
        url: "https://github.com/mauluddin12z/HAMBALI-FURNITURE-WEB-FRONTEND",
      },
      {
        label: "Backend",
        url: "https://github.com/mauluddin12z/HAMBALI-FURNITURE-WEB-BACKEND",
      },
    ],
    accent: "from-pink-400/30 to-rose-500/10",
  },
  {
    title: "Score Tracker",
    tag: "Education System",
    year: "2024",
    blurb:
      "Academic score management system for tracking, analyzing, and visualizing student performance with dashboards and reports.",
    stack: ["Vite React", "Express.js", "MySQL"],
    image: "/images/projects/score_tracker.png",
    liveDemo: "https://score-tracker.hidayatmauluddin.my.id",
    links: [
      {
        label: "Frontend",
        url: "https://github.com/mauluddin12z/performance-analysis-frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/mauluddin12z/performance-analysis-backend",
      },
    ],
    accent: "from-sky-400/30 to-indigo-500/10",
  },
  {
    title: "Isuzu Salesperson Website",
    tag: "Company Website",
    year: "2022",
    blurb:
      "Product catalog and admin management system for an automotive salesperson to manage listings and customer inquiries.",
    stack: ["CodeIgniter", "MySQL"],
    image: "/images/projects/isuzu_sumsel.png",
    liveDemo: "https://isuzu-sumsel.hidayatmauluddin.my.id",
    links: [
      {
        label: "Fullstack",
        url: "https://github.com/mauluddin12z/website-for-isuzu-sales-person",
      },
    ],
    accent: "from-stone-400/30 to-zinc-500/10",
  },
  {
    title: "Store Finder UI/UX",
    tag: "Frontend Project",
    year: "2024",
    blurb:
      "Location-based store discovery platform designed to help users find stores and products based on proximity and category.",
    stack: ["Vite React"],
    image: "/images/projects/storefindercover.png",
    liveDemo: "https://store-finder.hidayatmauluddin.my.id",
    links: [
      {
        label: "Frontend",
        url: "https://github.com/mauluddin12z/store-finder",
      },
      {
        label: "Case Study",
        url: "https://uxdesigner-portfolio-hidayat-mauluddin.vercel.app/casestudy/store-finder-web-responsive-design",
      },
    ],
    accent: "from-lime-400/30 to-green-500/10",
  },
];

export const experience = [
  {
    role: "Freelance Fullstack Developer — Attendance Progressive Web Application",
    company: "Sriwijaya University",
    period: "Oct — Dec 2025",
    bullets: [
      "Developed a location-based Progressive Web App using Next.js and Node.js.",
      "Built RESTful APIs for attendance tracking and secure user authentication.",
      "Implemented role-based access control for different user roles.",
      "Integrated geolocation validation to ensure accurate attendance marking.",
      "Designed and optimized MySQL database schemas for performance and scalability.",
      "Debugged and improved performance across both web and mobile interfaces.",
    ],
  },
  {
    role: "Freelance Fullstack Developer — POS Web Application",
    company: "Pempek 19 Cafe",
    period: "Aug 2025",
    bullets: [
      "Built a web-based Point of Sale system using Next.js and Node.js.",
      "Designed relational database structure for transactions and inventory management.",
      "Developed secure authentication and authorization system for admin access.",
      "Implemented full CRUD operations for products, sales, and inventory flow.",
    ],
  },
  {
    role: "Freelance Fullstack Developer — Company Website & Admin Dashboard",
    company: "Hambali Furniture",
    period: "Jun — Jul 2023",
    bullets: [
      "Developed a responsive company website using Next.js.",
      "Built an admin dashboard for managing content dynamically.",
      "Created and integrated REST APIs between frontend and backend systems.",
      "Optimized database queries to improve overall application performance.",
    ],
  },
  {
    role: "Freelance Web Developer — Automotive Sales Platform",
    company: "Isuzu Sales (South Sumatra)",
    period: "Mar 10, 2022 — Mar 17, 2022",
    bullets: [
      "Built a full website from scratch using CodeIgniter 3 and MySQL.",
      "Developed an admin panel for managing listings and customer inquiries.",
      "Implemented backend logic for content and data management.",
      "Delivered a functional sales website within a short development timeline.",
    ],
  },
];

export const stack = [
  { name: "HTML", icon: html, group: "Languages" },
  { name: "CSS", icon: css, group: "Languages" },
  { name: "JavaScript", icon: js, group: "Languages" },

  { name: "Next.js", icon: nextjs, group: "Framework" },
  { name: "Express.js", icon: expressjs, group: "Framework" },

  { name: "MySQL", icon: mysql, group: "Database" },

  { name: "Firebase", icon: firebase, group: "Cloud" },
  { name: "AWS", icon: aws, group: "Cloud" },

  { name: "TensorFlow", icon: tensorflow, group: "AI/ML" },

  { name: "Python", icon: python, group: "Languages" },
  { name: "Docker", icon: docker, group: "DevOps" },
];

export const certs = [
  {
    title: "Fundamentals of JavaScript Programming",
    org: "Dicoding",
    year: "2023",
    link: "https://drive.google.com/file/d/1wZK59Prb6-ZNsDpdGU9ozoGtONVTBv3W/view?usp=drive_link",
  },
  {
    title: "Building Back-End Applications for Beginners",
    org: "Dicoding",
    year: "2023",
    link: "https://drive.google.com/file/d/1MntTMNm1JmWyJxQw1l049WzcMzjVvMk_/view?usp=drive_link",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    org: "Dicoding",
    year: "2024",
    link: "https://drive.google.com/file/d/1IM80B6zZBeSfg_CpMvMwwTsBbHfb3lTM/view?usp=drive_link",
  },
  {
    title: "Data Analysis Using Python",
    org: "IBM",
    year: "2022",
    link: "https://drive.google.com/file/d/1cXzsBjnVvzNuSFt_mc3AFpZhObzfEGEU/view?usp=drive_link",
  },
  {
    title: "Data Visualization Using Python",
    org: "IBM",
    year: "2022",
    link: "https://drive.google.com/file/d/14a0B2SRHdxANivKTf5wqEpxCUfadwjEW/view?usp=drive_link",
  },
  {
    title: "Machine Learning Developer",
    org: "Independent",
    year: "2022",
    link: "https://drive.google.com/file/d/16Cg8r98-VJlyPgD6aOHAZK0Czm5V0XK2/view?usp=drive_link",
  },
  {
    title: "Applied Machine Learning",
    org: "Dicoding",
    year: "2023",
    link: "https://drive.google.com/file/d/1Fs_Jv9_uM1xlmiPXOUXSKhBXLUyeyLZH/view?usp=drive_link",
  },
  {
    title: "UX Design",
    org: "Google x Kominfo",
    year: "2022",
    link: "https://drive.google.com/file/d/1x-D-3wSLVykRpXEtg6YZX5CB8pooctTD/view?usp=drive_link",
  },
];

export const contacts = {
  github: {
    icon: Github,
    url: "https://github.com/mauluddin12z",
    label: "GitHub",
  },

  linkedin: {
    icon: Linkedin,
    url: "https://linkedin.com/in/hidayatmauluddin",
    label: "LinkedIn",
  },

  mail: {
    icon: Mail,
    url: "mailto:mauludindayat@gmail.com",
    label: "Email",
  },
};
