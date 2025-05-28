"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
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
    Code,
    Globe,
    Download,
    ChevronDown,
    Star,
    Zap,
    Target,
} from "lucide-react"
import potrait from "../assets/potrait.jpg"
import sphere_dash from "../assets/sphere-dash.png"
import sphere_course from "../assets/sphere-course.png"
import sphere_learn from "../assets/sphere-learn.png"
import sphere_admin from "../assets/sphere-admin.png"
import sphere_quiz from "../assets/sphere-quiz.png"
import sphere_quiz_info from "../assets/sphere-quiz-info.png"
import turboXpress from "../assets/turboXpress.png"
import clickviral from "../assets/clickviral.png"
// Skills data
const skillsData = [
    { name: "Python", level: 95, icon: "🐍" },
    { name: "Node.js", level: 90, icon: "🟢" },
    { name: "Reactjs", level: 85, icon: "⚛️" },
    { name: "NextJs", level: 80, icon: "📦" },
    { name: "Docker", level: 80, icon: "🐳" },
    { name: "AWS", level: 75, icon: "☁️" },
    { name: "PostgreSQL", level: 85, icon: "🐘" },
]

// Example data
const experiencesData = [
    {
        role: "Full-Stack Software Engineer",
        company: "Peerpay Digital Assets Limited",
        duration: "April 2025 - Present",
        location: "Lagos, Nigeria",
        details:
          "Developed several high performance portals for In house Administration, Customer Support, and Merchant Management. Implemented a real-time transaction monitoring system, reducing fraud incidents by 30%.",
        technologies: ["NodeJs", "NestJs", "PostgreSQL", "Redis", "Docker", "NextJs"],
      },
    {
        role: "Backend Software Engineer",
        company: "Hubinit, Netherlands",
        duration: "Aug 2024 - April 2025",
        location: "Remote",
        details:
        "Designed and implemented a QR code-based loyalty card system, enabling seamless digital redemption for users. Built scalable microservices architecture handling 10K+ daily transactions.",
        technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    },
    {
        role: "Software Engineer",
        company: "MyTech Enterprise Services",
        duration: "Nov 2023 - Aug 2024",
        location: "Nigeria",
        details:
        "Developed a web application to streamline digital requests for automobile repairs and maintenance, enhancing user experience and reducing processing time by 30%. Collaborated with cross-functional teams to gather requirements and deliver high-quality software solutions.",
        technologies: ["Node.js", "Express", "React", "MongoDB", "AWS"],
    },
]

const projectsData = [
    {
        title: "Sphere",
        description:
        "An interactive e-learning platform built with React and NestJs microservices, featuring a user-friendly interface and comprehensive learning experience with real-time collaboration.",
        image: sphere_dash,
        album: [
        sphere_course,
        sphere_learn,
        sphere_admin,
        sphere_quiz,
        sphere_quiz_info,
        ],
        technologies: ["React", "NestJS", "PostgreSQL", "WebSocket", "Docker"],
        links: [
        {
            type: "Live",
            url: "https://sphere.click-viral.tech/",
            icon: Globe,
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
        title: "Social Media App",
        description:
        "A comprehensive social media application built with React and Node.js, featuring user authentication, real-time chat, post sharing, and a fully responsive design.",
        image: clickviral,
        album: [],
        technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
        links: [
        {
            type: "GitHub",
            url: "https://github.com/hardope/clickviral-v2/",
            icon: Github,
        },
        {
            type: "Live",
            url: "https://web.click-viral.tech/",
            icon: Globe,
        },
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

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        element?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-x-hidden">
        {/* Animated Background */}

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
                <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                >
                Opeoluwa Adeyeri
                </motion.div>
                <div className="hidden md:flex space-x-8">
                {["About", "Experience", "Projects", "Contact"].map((item) => (
                    <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                    {item}
                    </button>
                ))}
                </div>
            </div>
            </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Text content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
            >
                <div className="space-y-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center space-x-2 text-blue-400"
                >
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available for new opportunities</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl lg:text-7xl font-bold leading-tight"
                >
                    Hello, I'm{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Opeoluwa
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl lg:text-2xl text-gray-300 font-light"
                >
                    Backend Software Engineer
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg text-gray-400 max-w-2xl leading-relaxed"
                >
                    I craft scalable backend solutions and APIs that power modern applications. Passionate about clean code,
                    system architecture, and delivering exceptional user experiences.
                </motion.p>
                </div>

                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
                >
                <button
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105"
                    onClick={() => scrollToSection("projects")}
                >
                    View My Work
                </button>
                <button
                    className="px-6 py-3 border border-gray-600 text-gray-300 hover:bg-gray-800 font-semibold rounded-md transition-all duration-300"
                    onClick={() => scrollToSection("contact")}
                >
                    Get In Touch
                </button>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex space-x-4 pt-4"
                >
                {[
                    { icon: Github, href: "https://github.com/hardope", color: "hover:text-gray-400" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/opeoluwa-adeyeri/", color: "hover:text-blue-400" },
                    { icon: Twitter, href: "https://x.com/OpeoluwaAdeyeri", color: "hover:text-blue-400" },
                    { icon: Youtube, href: "https://www.youtube.com/@opeoluwaadeyeri", color: "hover:text-red-400" },
                ].map((social, index) => (
                    <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 ${social.color} transition-all duration-300 hover:scale-110`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    >
                    <social.icon size={20} />
                    </motion.a>
                ))}
                </motion.div>
            </motion.div>

            {/* Profile image */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: [0, 360] }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative flex justify-center lg:justify-end"
            >
                <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-2xl opacity-30 animate-pulse" />
                <img
                    src={potrait}
                    alt="Opeoluwa Adeyeri"
                    className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full border-4 border-blue-500 shadow-2xl object-cover"
                />
                </div>
            </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                className="cursor-pointer"
                onClick={() => scrollToSection("about")}
            >
                <ChevronDown className="w-6 h-6 text-gray-400" />
            </motion.div>
            </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                About Me
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8" />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
                >
                <p className="text-lg text-gray-300 leading-relaxed">
                    Experienced Full-Stack Software Engineer with a strong background in computer science and a keen interest
                    in the development and design of scalable applications.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Skilled in the design and implementation of software solutions that drive business development and
                    growth. Proficient in Python (Django Rest Framework, FastAPI), NodeJS (Express, NestJS), Docker, and
                    cloud services.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Expert in designing, implementing, and optimizing RESTful APIs, microservices architectures, and
                    database systems.
                </p>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
                >
                <h3 className="text-2xl font-semibold text-blue-400 mb-6">Skills & Technologies</h3>
                <div className="space-y-4">
                    {skillsData.map((skill, index) => (
                    <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                        <span className="flex items-center space-x-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="font-medium">{skill.name}</span>
                        </span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                        />
                        </div>
                    </div>
                    ))}
                </div>
                </motion.div>
            </div>

            {/* Achievements */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-20"
            >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                    <div
                    key={index}
                    className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                    >
                    <achievement.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">{achievement.value}</div>
                    <div className="text-sm text-gray-400">{achievement.label}</div>
                    </div>
                ))}
                </div>
            </motion.div>
            </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Work Experience
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto" />
            </motion.div>

            <div className="space-y-8">
                {experiencesData.map((exp, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 rounded-lg p-8">
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold text-blue-400 mb-2">{exp.role}</h3>
                        <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400">
                            <span className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.company}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                            </span>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500">
                            {exp.location}
                            </span>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-4">{exp.details}</p>
                        </div>
                        <div className="space-y-4">
                        <h4 className="font-semibold text-blue-400">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300"
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
        <section id="projects" className="py-20 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Featured Projects
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8" />
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
                {projectsData.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={project.featured ? "lg:col-span-2" : ""}
                >
                    <div
                    className="group bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer overflow-hidden rounded-lg"
                    onClick={() => setSelectedProject(project)}
                    >
                    <div className={`grid ${project.featured ? "lg:grid-cols-2" : ""} gap-6`}>
                        <div className="relative overflow-hidden">
                        <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {project.featured && (
                            <span className="absolute top-4 left-4 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500 text-white">
                            Featured
                            </span>
                        )}
                        </div>
                        <div className="p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-blue-400 mb-3">{project.title}</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech, techIndex) => (
                                <span
                                key={techIndex}
                                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border border-blue-400 text-blue-300"
                                >
                                {tech}
                                </span>
                            ))}
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            {project.links.map((link, linkIndex) => (
                            <button
                                key={linkIndex}
                                className="inline-flex items-center px-3 py-2 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-md text-sm font-medium"
                                onClick={(e) => {
                                e.stopPropagation()
                                window.open(link.url, "_blank")
                                }}
                            >
                                <link.icon className="w-4 h-4 mr-2" />
                                {link.type}
                            </button>
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

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Let's Work Together
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8" />
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
                ideas to life.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open("mailto:adeyeriopeoluwa05@gmail.com")}
                >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Me an Email
                </button>
                <button
                    className="inline-flex items-center px-6 py-3 border border-gray-600 text-gray-300 hover:bg-gray-800 font-semibold rounded-md transition-all duration-300"
                    onClick={() => window.open("https://www.linkedin.com/in/opeoluwa-adeyeri/", "_blank")}
                >
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                </button>
                </div>
            </motion.div>
            </div>
        </section>

        {/* Project Modal */}
        {selectedProject && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
            >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-slate-900 rounded-2xl border border-white/20"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative">
                <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-t-2xl"
                />
                <button
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-300"
                    onClick={() => setSelectedProject(null)}
                >
                    <X className="w-5 h-5" />
                </button>
                </div>

                <div className="p-8">
                <h3 className="text-3xl font-bold text-blue-400 mb-4">{selectedProject.title}</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">{selectedProject.description}</p>

                <div className="mb-6">
                    <h4 className="text-xl font-semibold text-blue-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                        <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border border-blue-400 text-blue-300"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                    {selectedProject.links.map((link, index) => (
                    <button
                        key={index}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-md transition-all duration-300"
                        onClick={() => window.open(link.url, "_blank")}
                    >
                        <link.icon className="w-4 h-4 mr-2" />
                        {link.type}
                    </button>
                    ))}
                </div>

                {selectedProject.album.length > 0 && (
                    <div>
                    <h4 className="text-xl font-semibold text-blue-400 mb-4">Project Gallery</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedProject.album.map((img, index) => (
                        <img
                            key={index}
                            src={img || "/placeholder.svg"}
                            alt={`${selectedProject.title} screenshot ${index + 1}`}
                            className="w-full h-48 object-cover rounded-lg border border-white/20"
                        />
                        ))}
                    </div>
                    </div>
                )}
                </div>
            </motion.div>
            </motion.div>
        )}

        {/* Footer */}
        <footer className="relative z-10 bg-black/50 border-t border-white/10 py-8">
            <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Opeoluwa Adeyeri. All rights reserved.</p>
            </div>
        </footer>
        </div>
    )
}
