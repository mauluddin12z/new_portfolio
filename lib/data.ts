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
      "AI-powered esports coaching platform designed to simulate structured training sessions, helping players improve decision-making, gameplay consistency, and competitive mindset through personalized feedback.",
    stack: ["Next.js", "Gemini AI"],
    image: "/images/projects/ai_esport_training_companion.png",
    liveDemo: "https://esports-training-companion.hidayatmauluddin.my.id/",
    links: [
      {
        label: "Github",
        url: "https://github.com/mauluddin12za/ai-esports-training-companion",
      },
    ],
    accent: "from-cyan-400/30 to-blue-500/10",
  },
  {
    title: "AI Sales Page Builder",
    tag: "AI SaaS Tool",
    year: "2026",
    blurb:
      "Full-stack AI platform that transforms structured product inputs into responsive, conversion-focused sales pages with multiple layouts and exportable HTML output.",
    stack: ["Next.js", "Gemini AI", "Laravel", "MySQL"],
    image: "/images/projects/sales_page_builder.png",
    liveDemo: "https://sales-page-builder.hidayatmauluddin.my.id/",
    links: [
      {
        label: "Frontend",
        url: "https://github.com/mauluddin12za/sales-page-builder-frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/mauluddin12za/sales-page-builder-backend",
      },
    ],
    accent: "from-violet-400/30 to-fuchsia-500/10",
  },
  {
    title: "Attendance PWA - FKIP Universitas Sriwijaya",
    tag: "Enterprise PWA",
    year: "2025",
    blurb:
      "Location-aware attendance management system with role-based access control, geolocation validation, and centralized record management for academic environments.",
    stack: ["Next.js", "Express.js", "MySQL"],
    image: "/images/projects/attendance_pwa.png",
    liveDemo: "https://attendance-pwa.hidayatmauluddin.my.id",
    links: [
      {
        label: "Frontend",
        url: "https://github.com/mauluddin12za/frontend-attendance-pwa-fkip-unsri",
      },
      {
        label: "Backend",
        url: "https://github.com/mauluddin12za/backend-attendance-pwa-fkip-unsri",
      },
    ],
    accent: "from-emerald-400/30 to-teal-500/10",
  },
  {
    title: "Point of Sale - Warung 19",
    tag: "POS System",
    year: "2025",
    blurb:
      "Restaurant POS platform built to simplify ordering, transaction processing, and inventory workflows through a centralized admin management system.",
    stack: ["Next.js", "Express.js", "MySQL"],
    image: "/images/projects/pos_warung19.png",
    liveDemo: "https://pos-resto.hidayatmauluddin.my.id",
    links: [
      {
        label: "Frontend",
        url: "https://github.com/mauluddin12za/pos-resto19-frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/mauluddin12za/pos-resto19-backend",
      },
    ],
    accent: "from-amber-400/30 to-orange-500/10",
  },
  {
    title: "Hambali Furniture",
    tag: "Company Profile Website",
    year: "2023",
    blurb:
      "Furniture company website with a custom admin dashboard for managing product catalogs, business content, and showroom information through a centralized interface.",
    stack: ["Next.js", "Express.js", "MySQL"],
    image: "/images/projects/hambali_furniture.png",
    liveDemo: "https://hambali-furniture.hidayatmauluddin.my.id",
    links: [
      {
        label: "Frontend",
        url: "https://github.com/mauluddin12za/hambali-furniture-frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/mauluddin12za/hambali-furniture-backend",
      },
    ],
    accent: "from-pink-400/30 to-rose-500/10",
  },
  {
    title: "Score Tracker",
    tag: "Education System",
    year: "2024",
    blurb:
      "Academic performance management system for tracking, analyzing, and visualizing student scores through interactive dashboards and reporting tools.",
    stack: ["Vite React", "Express.js", "MySQL"],
    image: "/images/projects/score_tracker.png",
    liveDemo: "https://score-tracker.hidayatmauluddin.my.id",
    links: [
      {
        label: "Frontend",
        url: "https://github.com/mauluddin12za/score-tracker-frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/mauluddin12za/score-tracker-backend",
      },
    ],
    accent: "from-sky-400/30 to-indigo-500/10",
  },
  {
    title: "Isuzu Salesperson Website",
    tag: "Company Website",
    year: "2022",
    blurb:
      "Automotive product catalog and inquiry management platform built to help sales representatives manage listings and customer interactions more efficiently.",
    stack: ["CodeIgniter", "MySQL"],
    image: "/images/projects/isuzu_sumsel.png",
    liveDemo: "https://isuzu-sumsel.hidayatmauluddin.my.id",
    links: [
      {
        label: "Fullstack",
        url: "https://github.com/mauluddin12za/isuzu-sumsel",
      },
    ],
    accent: "from-stone-400/30 to-zinc-500/10",
  },
  {
    title: "Store Finder UI/UX",
    tag: "Frontend Project",
    year: "2024",
    blurb:
      "Location-based store discovery interface designed to help users explore nearby stores and products through category filtering and responsive user experience design.",
    stack: ["Vite React"],
    image: "/images/projects/storefindercover.png",
    liveDemo: "https://store-finder.hidayatmauluddin.my.id",
    links: [
      {
        label: "Frontend",
        url: "https://github.com/mauluddin12za/store-finder",
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
      "Developed a location-aware Progressive Web Application using Next.js and Node.js.",
      "Built RESTful APIs for attendance management and secure authentication workflows.",
      "Implemented role-based access control for administrators, staff, and users.",
      "Integrated geolocation validation to support accurate attendance verification.",
      "Designed and optimized MySQL database schemas for maintainability and scalability.",
      "Improved application responsiveness across desktop and mobile platforms.",
    ],
  },
  {
    role: "Freelance Fullstack Developer — POS Web Application",
    company: "Pempek 19 Cafe",
    period: "Aug 2025",
    bullets: [
      "Built a web-based Point of Sale application using Next.js and Node.js.",
      "Designed relational database structures for transactions and inventory management.",
      "Implemented secure authentication and authorization for administrative access.",
      "Developed CRUD workflows for products, sales transactions, and inventory records.",
    ],
  },
  {
    role: "Freelance Fullstack Developer — Company Website & Admin Dashboard",
    company: "Hambali Furniture",
    period: "Jun — Jul 2023",
    bullets: [
      "Developed a responsive company website using Next.js.",
      "Built an admin dashboard for dynamic content and product management.",
      "Created and integrated REST APIs between frontend and backend services.",
      "Optimized database queries and application performance for smoother operations.",
    ],
  },
  {
    role: "Freelance Web Developer — Automotive Sales Platform",
    company: "Isuzu Sales (South Sumatra)",
    period: "Mar 10, 2022 — Mar 17, 2022",
    bullets: [
      "Built a complete automotive sales website using CodeIgniter 3 and MySQL.",
      "Developed an admin panel for managing product listings and customer inquiries.",
      "Implemented backend logic for content and operational data management.",
      "Delivered the project within a short development timeline while maintaining functionality and usability.",
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
    username: "mauluddin12z",
    url: "https://github.com/mauluddin12za",
    label: "GitHub",
  },

  linkedin: {
    icon: Linkedin,
    username: "hidayatmauluddin",
    url: "https://linkedin.com/in/hidayatmauluddin",
    label: "LinkedIn",
  },

  mail: {
    icon: Mail,
    email: "mauludindayat@gmail.com",
    url: "mailto:mauludindayat@gmail.com",
    label: "Email",
  },
};
