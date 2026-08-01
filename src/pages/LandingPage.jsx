"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
    Github,
    Linkedin,
    Twitter,
    Youtube,
    X,
    ExternalLink,
    Mail,
    MapPin,
    Calendar,
    ChevronDown,
    Zap,
    Target,
    Star,
    Code,
} from "lucide-react"
import {
    SiPython,
    SiNodedotjs,
    SiNestjs,
    SiReact,
    SiNextdotjs,
    SiDocker,
    SiAwslambda,
    SiPostgresql,
    SiDjango,
    SiFastapi,
    SiExpress,
    SiRabbitmq,
    SiGo,
} from "react-icons/si"
import potrait from "../assets/potrait.jpg"
import sphere_dash from "../assets/sphere-dash.png"
import sphere_course from "../assets/sphere-course.png"
import sphere_learn from "../assets/sphere-learn.png"
import turboXpress from "../assets/turboXpress.png"
import growthpro_landing from "../assets/growthpro-landing.png"
import growthpro_learn from "../assets/growthpro-learn.png"
import growthpro_cert from "../assets/growthpro-cert.png"
import growthpro_course from "../assets/growthpro-course.png"
import growthpro_admin_dark from "../assets/growthpro-admin-dark.png"
import growthpro_admin_light from "../assets/growthpro-admin-light.png"
import sphere_landing from "../assets/sphere-landing.png"
import sphere_auth from "../assets/sphere-auth.png"
import sphere_admin_course from "../assets/sphere-admin-course.png"
import sphere_admin_course_light from "../assets/sphere-admin-course-light.png"
import sphere_learner from "../assets/sphere-learner.png"
import vendli_dashboard from "../assets/vendli-dashboard.png"
import vendli_wallet from "../assets/vendli-wallet.png"
import server_wiz from "../assets/server-wiz.png"
import { FaAws, FaDigitalOcean, FaJava, FaNetworkWired } from "react-icons/fa"
import { FaC } from "react-icons/fa6"
import { DiGithub, DiGoogleCloudPlatform, DiRedis } from "react-icons/di"
import SkillsGrid from "./skillsGrid"

// Skills data
const skillsData = [
    { name: "Python", level: 95, icon: SiPython, color: "#3776AB" },
    { name: "DRF", level: 90, icon: SiDjango, color: "#3776AB" },
    { name: "FastAPI", level: 90, icon: SiFastapi, color: "#009688" },
    { name: "Node.js", level: 90, icon: SiNodedotjs, color: "#3C873A" },
    { name: "NestJs", level: 90, icon: SiNestjs, color: "#E0234E" },
    { name: "ExpressJs", level: 85, icon: SiExpress, color: "#3C873A" },
    { name: "React", level: 85, icon: SiReact, color: "#61DAFB" },
    // { name: "NextJs", level: 80, icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "Docker", level: 80, icon: SiDocker, color: "#0db7ed" },
    { name: "RabbitMQ", level: 80, icon: SiRabbitmq, color: "#FF9900" },
    { name: "Redis", level: 80, icon: DiRedis, color: "#FF9900" },
    { name: "Git", level: 80, icon: Github, color: "#F05032" },
    { name: "GitHub", level: 80, icon: DiGithub, color: "#555555" },
    { name: "AWS", level: 75, icon: FaAws, color: "#FF9900" },
    { name: "GCP", level: 89, icon: DiGoogleCloudPlatform, color: "#4285F4" },
    { name: "DigitalOcean", level: 70, icon: FaDigitalOcean, color: "#0080ff" },
    { name: "PostgreSQL", level: 85, icon: SiPostgresql, color: "#336791" },
    { name: "Java", level: 70, icon: FaJava, color: "#007396" },
    { name: "C", level: 65, icon: FaC, color: "#555555" },
    { name: "MicroServices", level: 90, icon: FaNetworkWired, color: "#61DAFB" },
    { name: "Golang", level: 90, icon: SiGo, color: "#61DAFB"}
]

// Example data
const experiencesData = [
    {
        role: "Backend Software Engineer",
        company: "Esimtime",
        duration: "December 2025 - Present",
        location: "Delaware, USA",
        details:
            "Optimized and Developed scalable backend systems for a global eSIM management platform. Implemented a real-time analytics dashboard, improving operational efficiency by 15%.",
        technologies: ["NodeJs", "NestJs", "PostgreSQL", "Redis", "Docker", "Stripe", "Twilio", "AWS"],
    },
    {
        role: "Full-Stack Software Engineer",
        company: "Peerpay Digital Assets Limited",
        duration: "April 2025 - Present",
        location: "Lagos, Nigeria",
        details:
            "Developed several high performance portals for In house Administration, Customer Support, and Merchant Management. Implemented a real-time transaction monitoring system, reducing fraud incidents by 30%.",
        technologies: ["NodeJs", "NestJs", "PostgreSQL", "Redis", "Docker", "NextJs", "Kafka"],
    },
    {
        role: "Backend Software Engineer",
        company: "WarbleLive",
        duration: "December 2025 - Present",
        location: "Lagos, Nigeria",
        details:
            "Developed secure, scalable and high performance backend system for a Blockchain powered ticketing platform. Implemented a real-time event notification system, improving user engagement by 25%.",
        technologies: ["NodeJs", "ExpressJs", "NestJs", "PostgreSQL", "Redis", "Docker", "GCP"],
    },
    {
        role: "Founding Engineer",
        company: "Sphere - Growthpro Africa",
        duration: "Jan 2025 - Present",
        location: "Lagos, Nigeria",
        details:
            "Designed and implemented a scalable microservices architecture for an e-learning platform, handling 5K+ daily active users. Developed a real-time notification and collaboration feature, increasing user engagement by 20%.",
        technologies: ["NodeJs", "NestJs", "PostgreSQL", "Redis", "Docker", "ReactJs", "rabbitMQ", "AWS"],
    },
    {
        role: "Backend Software Engineer",
        company: "Hubinit",
        duration: "Aug 2024 - April 2025",
        location: "Amsterdam, Netherlands (Remote)",
        details:
            "Designed and implemented a QR code-based loyalty card system, enabling seamless digital redemption for users. Built scalable microservices architecture handling 10K+ daily transactions.",
        technologies: ["NestJs", "NodeJs", "PostgreSQL", "Redis", "Docker", "AWS"],
    },
    {
        role: "Software Engineer",
        company: "MyTech Enterprise Services",
        duration: "Nov 2023 - Aug 2024",
        location: "Nigeria",
        details:
            "Developed a web application to streamline digital requests for automobile repairs and maintenance, enhancing user experience and reducing processing time by 30%. Collaborated with cross-functional teams to gather requirements and deliver high-quality software solutions.",
        technologies: ["Python", "FastAPI", "React", "MongoDB", "AWS"],
    },
]

const projectsData = [
    {
        title: "Growthpro Africa (powered by Sphere)",
        description:
            "An interactive e-learning platform built with React and NestJs microservices, featuring advanced analytics, real time notification with assesments and assignments",
        image: growthpro_admin_light,
        album: [
            growthpro_admin_dark,
            growthpro_admin_light,
            growthpro_landing,
            growthpro_learn,
            growthpro_cert,
            growthpro_course,
        ],
        technologies: ["React", "NestJS", "PostgreSQL", "WebSocket", "Docker", "Zustand"],
        links: [
            {
                type: "Live",
                url: "https://ilearn.growthproafrica.com/",
                icon: ExternalLink,
            },
        ],
        featured: true,
    },
    {
        title: "Sphere",
        description:
            "An white-label e-learning platform built with React and NestJs microservices, featuring advanced analytics, real time notification with assesments and assignments",
        image: sphere_landing,
        album: [
            sphere_dash,
            sphere_admin_course,
            sphere_admin_course_light,
            sphere_learner,
            sphere_course,
            sphere_auth,
            sphere_learn,
        ],
        technologies: ["React", "NestJS", "PostgreSQL", "WebSocket", "Docker"],
        links: [
            {
                type: "Live",
                url: "https://sphere.growthproafrica.com/",
                icon: ExternalLink,
            },
        ],
        featured: true,
    },
    {
        title: "turboXpress",
        description:
            "A powerful Framework & CLI tool designed to help developers quickly create and scaffold Express-based projects with built-in logging, static file serving, and JSON request handling.",
        image: turboXpress,
        album: [],
        technologies: ["Node.js", "Express", "CLI", "NPM"],
        links: [
            {
                type: "GitHub",
                url: "https://github.com/hardope/turboXpress/",
                icon: Github,
            },
            {
                type: "NPM",
                url: "https://www.npmjs.com/package/turbo-xpress/",
                icon: ExternalLink,
            },
        ],
        featured: false,
    },
    {
        title: "Vendli.ng",
        description:
            "Multi-Vendor Seller workspace",
        image: vendli_dashboard,
        album: [vendli_dashboard, vendli_wallet],
        technologies: ["Golang", "NextJs", "PostgreSQL"],
        links: [
            {
                type: "Live",
                url: "https://vendli.ng/",
                icon: ExternalLink,
            }
        ],
        featured: true,
    },
    {
        title: "Server-Wiz",
        description:
            "A set of tools to speedup server provisioning and deployment on linux machines.",
        image: server_wiz,
        album: [],
        technologies: ["Golang"],
        links: [
            {
                type: "Live",
                url: "https://vendli.ng/",
                icon: ExternalLink,
            }
        ],
        featured: true,
    },
]

const achievements = [
    { icon: Zap, value: "40%", label: "API Response Time Reduction" },
    { icon: Target, value: "20%", label: "System Downtime Decrease" },
    { icon: Star, value: "10K+", label: "Daily Transactions Handled" },
    { icon: Code, value: "50+", label: "Projects Completed" },
]

export default function ModernPortfolio() {
    const [selectedProject, setSelectedProject] = useState(null)
    const [pointer, setPointer] = useState({ x: 0, y: 0 })
    const [hasPointer, setHasPointer] = useState(false)
    const skillsBoxRef = useRef(null)
    const iconRefs = useRef([])

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [selectedProject])

    const handlePointerMove = (e) => {
        if (!skillsBoxRef.current) return
        const rect = skillsBoxRef.current.getBoundingClientRect()
        const clientX = e.clientX ?? e.touches?.[0]?.clientX
        const clientY = e.clientY ?? e.touches?.[0]?.clientY
        if (clientX == null || clientY == null) return

        setHasPointer(true)
        setPointer({
            x: clientX - rect.left,
            y: clientY - rect.top,
        })
    }

    const handlePointerLeave = () => {
        setHasPointer(false)
    }

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        element?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className="min-h-screen relative overflow-x-hidden bg-slate-950 text-slate-50">
            {/* Ambient background */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                {/* Base gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#020617_0,_#020617_45%,_#020617_65%,_#000000_100%)]" />
                {/* Soft color glows */}
                <div className="absolute -top-40 -left-24 h-80 w-80 rounded-full bg-sky-500/25 blur-3xl" />
                <div className="absolute top-1/3 -right-32 h-72 w-72 rounded-full bg-indigo-500/20 blur-[80px]" />
                <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-cyan-500/15 blur-[90px]" />
                {/* Subtle grid texture */}
                <div className="absolute inset-0 opacity-[0.14] bg-[linear-gradient(to_right,rgba(148,163,184,0.24)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:40px_40px] mix-blend-soft-light" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-950/70 backdrop-blur-xl border-b border-slate-800/70">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
                    <div className="flex items-center justify-between">
                        <motion.span
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-lg sm:text-xl font-semibold tracking-tight bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent"
                        >
                            Opeoluwa Adeyeri
                        </motion.span>
                        <div className="hidden md:flex items-center gap-7 text-sm">
                            {["About", "Experience", "Projects", "Contact"].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="relative text-slate-300/90 hover:text-slate-50 transition-colors duration-200 group"
                                >
                                    <span>{item}</span>
                                    <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-sky-400 to-indigo-400 transition-transform duration-200 group-hover:scale-x-100" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                id="hero"
                className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-5 lg:pt-28"
            >
                <div className="max-w-5xl lg:max-w-6xl w-full grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-center relative z-10">
                    {/* Profile image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.86 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="relative flex justify-center lg:justify-end order-1 lg:order-2 lg:self-center"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-sky-500/30 blur-3xl" />
                            {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                <div className="relative h-64 w-64 sm:h-72 sm:w-72 lg:h-[21rem] lg:w-[21rem]">
                                    <div className="absolute inset-6 rounded-full border border-slate-100/10" />
                                    <div className="absolute inset-3 rounded-full border border-slate-100/5" />
                                    <div className="absolute inset-0 rounded-full border border-sky-500/35" />
                                </div>
                            </div> */}
                            <img
                                src={potrait}
                                alt="Opeoluwa Adeyeri"
                                className="relative w-80 h-80 sm:w-72 sm:h-72 lg:w-[19rem] lg:h-[19rem] rounded-full border border-slate-100/20 shadow-[0_22px_60px_rgba(15,23,42,0.9)] object-cover bg-slate-900/90"
                            />
                        </div>
                    </motion.div>

                    {/* Hero text */}
                    <motion.div
                        initial={{ opacity: 0, y: 36 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-5 lg:space-y-4 order-2 lg:order-1 text-center lg:text-left"
                    >
                        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-[0.7rem] sm:text-xs font-medium text-sky-200/90 mb-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Available for backend & platform engineering roles</span>
                        </div> */}

                        <div className="space-y-3 lg:space-y-2">
                            <motion.h1
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 }}
                                className="text-[2.4rem] sm:text-[2.8rem] lg:text-[3.3rem] xl:text-[3.6rem] font-semibold leading-tight tracking-tight"
                            >
                                <span className="block text-slate-200/95">Hi, I&apos;m</span>
                                <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                    Opeoluwa Adeyeri
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 }}
                                className="text-base sm:text-lg lg:text-xl text-slate-200/90 font-normal"
                            >
                                Full-Stack Software Engineer
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.33 }}
                                className="text-sm sm:text-[0.95rem] lg:text-[0.98rem] text-slate-300/80 max-w-xl leading-relaxed mx-auto lg:mx-0"
                            >
                                I craft scalable backend solutions and APIs that power modern applications and design intuitive user
                                interfaces. Passionate about clean code, system architecture, and delivering exceptional user
                                experiences.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45 }}
                            className="flex justify-center lg:justify-start gap-3 pt-3 lg:pt-2"
                        >
                            {[
                                { icon: Github, href: "https://github.com/hardope", color: "hover:text-slate-200" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/opeoluwa-adeyeri/", color: "hover:text-sky-400" },
                                { icon: Twitter, href: "https://x.com/OpeoluwaAdeyeri", color: "hover:text-sky-400" },
                                { icon: Youtube, href: "https://www.youtube.com/@opeoluwaadeyeri", color: "hover:text-red-400" },
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`h-10 w-10 rounded-xl bg-slate-900/70 border border-slate-700/70 text-slate-300/90 flex items-center justify-center ${social.color} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(15,23,42,0.85)]`}
                                    whileHover={{ scale: 1.06 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon size={18} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.button
                    type="button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="absolute bottom-7 left-1/2 -translate-x-1/2 text-slate-400/80 hover:text-slate-100 transition-colors"
                    onClick={() => scrollToSection("about")}
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
                        className="h-9 w-9 flex items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/70 backdrop-blur-md"
                    >
                        <ChevronDown className="w-4 h-4" />
                    </motion.div>
                </motion.button>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4 sm:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Headings row */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-8 lg:mb-12"
                    >
                        <div className="grid gap-10 lg:gap-8 lg:grid-cols-2 lg:items-end">
                            <div>
                                <h2 className="text-2xl lg:text-3xl font-semibold mb-3 bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                                    About Me
                                </h2>
                                <div className="w-16 h-[2px] bg-gradient-to-r from-sky-400 to-indigo-400 mb-4" />
                                <p className="text-sm lg:text-base text-slate-400">
                                    Who I am and what I do.
                                </p>
                            </div>
                            {/* <div className="text-left lg:text-right">
                                <h3 className="text-lg lg:text-2xl font-medium text-sky-300 mb-2">Skills & Technologies</h3>
                                <p className="text-xs lg:text-sm text-slate-400">
                                    Core tools and stacks I use to build scalable, reliable systems.
                                </p>
                            </div> */}
                        </div>
                    </motion.div>

                    {/* Content row */}
                    <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -32 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true, margin: "-80px" }}
                            className="space-y-5"
                        >
                            <p className="text-[0.97rem] lg:text-base text-slate-200 leading-relaxed">
                                Experienced Full-Stack Software Engineer with a strong background in computer science and a keen
                                interest in the development and design of scalable applications.
                            </p>
                            <p className="text-[0.97rem] lg:text-base text-slate-200 leading-relaxed">
                                Skilled in Golang, Python (Django Rest Framework, FastAPI), NodeJS (Express, NestJS), Docker, and cloud
                                services. Expert in designing and optimizing RESTful APIs, microservices architectures, and database
                                systems.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 32 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true, margin: "-80px" }}
                            className="flex items-center justify-center"
                        >
                            <div className="relative rounded-3xl bg-gradient-to-br from-slate-950/85 via-slate-900/85 to-slate-950/95 border border-slate-700/80 overflow-hidden px-4 py-6 shadow-[0_0_45px_rgba(15,23,42,0.95)] flex items-center justify-center w-full min-h-[320px]">
                                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.45),transparent_55%),radial-gradient(circle_at_80%_100%,rgba(129,140,248,0.45),transparent_55%)]" />
                                <div className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:32px_32px] mix-blend-soft-light" />
                                <div className="relative flex items-center justify-center w-full">
                                    <SkillsGrid />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Achievements */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, margin: "-60px" }}
                        className="mt-16 lg:mt-20"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {achievements.map((a, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl bg-slate-900/70 border border-slate-700/80 px-4 py-5 text-center shadow-[0_14px_40px_rgba(15,23,42,0.9)]"
                                >
                                    <a.icon className="mx-auto mb-3 text-sky-400" size={22} />
                                    <div className="text-xl sm:text-2xl font-semibold text-slate-50">{a.value}</div>
                                    <div className="mt-1 text-[0.7rem] sm:text-xs text-slate-400">{a.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 px-4 sm:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-3xl lg:text-4xl font-semibold mb-4 bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                            Work Experience
                        </h2>
                        <div className="w-20 h-[2px] bg-gradient-to-r from-sky-400 to-indigo-400 mx-auto" />
                    </motion.div>

                    <div className="space-y-7">
                        {experiencesData.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.65, delay: index * 0.08 }}
                                viewport={{ once: true, margin: "-80px" }}
                            >
                                <div className="rounded-2xl bg-slate-900/75 border border-slate-700/80 hover:border-sky-500/60 hover:bg-slate-900/90 transition-colors duration-200 px-5 py-6 sm:px-7 sm:py-7">
                                    <div className="grid gap-5 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.3fr)] lg:items-start">
                                        <div>
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                                                <h3 className="text-lg sm:text-xl font-semibold text-slate-50">{exp.role}</h3>
                                                <span className="text-sm font-medium text-sky-300">{exp.company}</span>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-3 text-[0.7rem] sm:text-xs text-slate-400 mb-3">
                                                <span className="inline-flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {exp.duration}
                                                </span>
                                                <span className="inline-flex items-center gap-1">
                                                    <MapPin className="w-3 h-3" />
                                                    {exp.location}
                                                </span>
                                            </div>
                                            <p className="text-[0.9rem] sm:text-[0.95rem] text-slate-200/90 leading-relaxed">{exp.details}</p>
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-sky-300">Technologies</h4>
                                            <div className="flex flex-wrap gap-1.5">
                                                {exp.technologies.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="inline-flex items-center rounded-full border border-sky-500/45 bg-sky-500/10 px-2 py-0.5 text-[0.7rem] font-medium text-sky-100"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-4 sm:px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-3xl lg:text-4xl font-semibold mb-4 bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                            Featured Projects
                        </h2>
                        <div className="w-20 h-[2px] bg-gradient-to-r from-sky-400 to-indigo-400 mx-auto mb-5" />
                        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
                            Recent projects showcasing my skills and passion for innovative solutions.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
                        {projectsData.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.07 }}
                                viewport={{ once: true, margin: "-80px" }}
                                whileHover={{ y: -4 }}
                                className="group cursor-pointer rounded-2xl bg-slate-900/75 border border-slate-700/80 hover:border-sky-500/60 hover:bg-slate-900/95 transition-colors duration-200 overflow-hidden flex flex-col"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative h-44 sm:h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    {project.featured && (
                                        <span className="absolute top-3 right-3 rounded-full bg-sky-500 text-slate-950 px-2 py-0.5 text-[0.7rem] font-semibold shadow-sm">
                                            Featured
                                        </span>
                                    )}
                                </div>
                                <div className="flex-1 p-4 sm:p-5 flex flex-col">
                                    <div className="mb-3">
                                        <h3 className="font-semibold text-slate-50 text-[0.98rem] sm:text-[1.02rem] mb-1.5">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs sm:text-[0.8rem] text-slate-400 line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="mb-3 flex flex-wrap gap-1.5">
                                        {project.technologies.slice(0, 4).map((t, j) => (
                                            <span
                                                key={j}
                                                className="rounded-full bg-slate-800/80 text-slate-100 px-2 py-0.5 text-[0.65rem] font-medium border border-slate-700/80"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-auto flex gap-3">
                                        {project.links.map((link, j) => (
                                            <button
                                                key={j}
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    window.open(link.url, "_blank")
                                                }}
                                                className="inline-flex items-center gap-1.5 text-[0.7rem] sm:text-xs text-sky-300 hover:text-sky-200 transition-colors"
                                            >
                                                <link.icon size={14} />
                                                {link.type}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-80px" }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-4 bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                        Let&apos;s Work Together
                    </h2>
                    <div className="w-20 h-[2px] bg-gradient-to-r from-sky-400 to-indigo-400 mx-auto mb-6" />
                    <p className="text-sm sm:text-base text-slate-400 mb-8">
                        I&apos;m always interested in new opportunities and exciting projects.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => window.open("mailto:adeyeriopeoluwa05@gmail.com")}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 text-slate-950 px-6 py-3 text-sm font-semibold shadow-[0_18px_45px_rgba(56,189,248,0.4)] hover:bg-sky-400 transition-colors"
                        >
                            <Mail size={18} />
                            Send Me an Email
                        </button>
                        <button
                            onClick={() => window.open("https://www.linkedin.com/in/opeoluwa-adeyeri/", "_blank")}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900/80 text-slate-100 px-6 py-3 text-sm font-semibold border border-slate-700/80 hover:border-sky-500/60 hover:text-sky-100 transition-colors"
                        >
                            <Linkedin size={18} />
                            Connect on LinkedIn
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t border-slate-800/80 py-7 bg-slate-950/80">
                <p className="text-center text-[0.7rem] sm:text-xs text-slate-500">
                    © {new Date().getFullYear()} Opeoluwa Adeyeri. All rights reserved.
                </p>
            </footer>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-2xl bg-slate-950 border border-slate-800/90 shadow-[0_22px_70px_rgba(15,23,42,0.95)]"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative">
                                {selectedProject.image && (
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-56 sm:h-64 object-cover rounded-t-2xl"
                                    />
                                )}
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 rounded-full bg-slate-950/70 border border-slate-700/80 p-1.5 text-slate-300 hover:text-slate-50 hover:border-slate-500 transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                            <div className="px-5 sm:px-7 py-6">
                                <h3 className="text-xl sm:text-2xl font-semibold text-slate-50 mb-3">
                                    {selectedProject.title}
                                </h3>
                                <p className="text-sm sm:text-[0.95rem] text-slate-300 mb-4">
                                    {selectedProject.description}
                                </p>
                                <div className="mb-4 flex flex-wrap gap-1.5">
                                    {selectedProject.technologies.map((t, i) => (
                                        <span
                                            key={i}
                                            className="rounded-full border border-sky-500/45 bg-sky-500/10 px-2 py-0.5 text-[0.7rem] font-medium text-sky-100"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="mb-6 flex flex-wrap gap-3">
                                    {selectedProject.links.map((link, i) => (
                                        <button
                                            key={i}
                                            onClick={() => window.open(link.url, "_blank")}
                                            className="inline-flex items-center gap-1.5 rounded-md bg-slate-900/80 border border-slate-700/80 px-3 py-2 text-xs sm:text-sm font-medium text-sky-200 hover:border-sky-500/70 hover:text-sky-100 transition-colors"
                                        >
                                            <link.icon size={15} />
                                            {link.type}
                                        </button>
                                    ))}
                                </div>
                                {selectedProject.album.length > 0 && (
                                    <div className="space-y-3">
                                        <h4 className="text-sm font-semibold text-slate-100">Gallery</h4>
                                        <div className="grid grid-cols-2 gap-3">
                                            {selectedProject.album.map((img, i) => (
                                                <img
                                                    key={i}
                                                    src={img}
                                                    alt={`${selectedProject.title} ${i + 1}`}
                                                    className="w-full h-28 sm:h-32 object-cover rounded-lg border border-slate-800/80"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
