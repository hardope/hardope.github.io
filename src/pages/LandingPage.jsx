import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
    FaTimes,
    FaNpm,
    FaPython,
    FaGlobe,
    FaExternalLinkAlt
} from "react-icons/fa";

// Replace these with your own images
import potrait from "../assets/potrait.jpg";
import sphere from "../assets/sphereLanding.png";
import turboXpress from "../assets/turboXpress.png";
import clickviral from "../assets/clickviral.png";

// Example data
const experiencesData = [
    {
        role: "Backend Software Engineer",
        company: "Hubinit, Netherlands",
        duration: "Aug 2024 - Date",
        details:
        "Designed and implemented a QR code-based loyalty card system, enabling seamless digital redemption for users."
    },
    {
        role: "Software Engineer",
        company: "MyTech Enterprise Services",
        duration: "Nov 2023 - Aug 2024",
        details:
            "Developed a web application to streamline digital requests for automobile repairs and maintenance, enhancing user experience and reducing processing time by 30%. Collaborated with cross-functional teams to gather requirements and deliver high-quality software solutions."
    }
];

const projectsData = [
    {
        title: "E-Learning app",
        description: "An interactive e-learning platform built with React and NestJs microservices, featuring a user-friendly interface and learning experience",
        album: [],
        image: sphere,
        links: [
            // {
            //     type: "GitHub",
            //     url: "https://github.com/opeoluwa/my-react-library"
            // },
            {
                type: "Live",
                url: "https://sphere.click-viral.tech/"
            }
        ],
    },
    {
        title: "turboXpress",
        description: "turboXpress is a Framework & CLI tool designed to help you quickly create and scaffold Express-based projects. It is built on top of ExpressJs and includes built-in logging, static file serving, and JSON request handling by default, so you can focus on building your application.",
        image: turboXpress,
        album: [],
        links: [
            {
                type: "GitHub",
                url: "https://github.com/hardope/turboXpress/"
            },
            {
                type: "NPM",
                url: "https://www.npmjs.com/package/turbo-xpress/"
            }
        ],
    },
    {
        title: "Social Media app",
        description: "A social media application built with React and Node.js, featuring user authentication, real-time chat, and a responsive design.",
        image: clickviral,
        album: [],
        links: [
            {
                type: "GitHub",
                url: "https://github.com/hardope/clickviral-v2/"
            },
            {
                type: "Live",
                url: "https://web.click-viral.tech/"
            }
        ],
    }
];

export default function OpePortfolioNewLayout() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
        {/* Hero Section */}
            <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-6">
                {/* Animated background shapes */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 1 }}
                    style={{
                        background:
                        "radial-gradient(circle at 50% 50%, rgba(66,135,245,0.4) 0%, transparent 70%)"
                    }}
                />
                <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10 relative z-10 md:p-15">
                {/* Text content */}
                    <div className="flex-1 flex flex-col space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="text-4xl md:text-5xl font-bold"
                        >
                            <div className="mt-10 md:mt-0">
                                Hello, I'm{" "}
                                <span className="text-blue-400">Opeoluwa Adeyeri</span>
                            </div>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-gray-300 text-lg md:text-xl max-w-lg leading-relaxed"
                        >
                            Software Engineer
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="flex space-x-4"
                        >
                            {/* Social Links */}
                            <a
                                href="https://github.com/hardope"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300"
                            >
                                <FaGithub size={20} />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/opeoluwa-adeyeri/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-blue-700 hover:bg-blue-600 transition-all duration-300"
                            >
                                <FaLinkedin size={20} />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a
                                href="https://x.com/OpeoluwaAdeyeri"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-blue-500 hover:bg-blue-400 transition-all duration-300"
                            >
                                <FaTwitter size={20} />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a
                                href="https://www.youtube.com/@opeoluwaadeyeri"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-red-600 hover:bg-red-500 transition-all duration-300"
                            >
                                <FaYoutube size={20} />
                                <span className="sr-only">YouTube</span>
                            </a>
                        </motion.div>
                    </div>
                        {/* Profile image */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1, rotate: [0, 360] }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex-1 flex justify-center md:justify-end"
                        >
                            <img
                            src={potrait}
                            alt="Opeoluwa Adeyeri"
                            className="w-60 h-60 md:w-80 md:h-80 rounded-full border-4 border-blue-500 shadow-lg object-cover"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-16 px-6 md:px-12 lg:px-24 bg-black border-t border-gray-800">
                    <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
                        About Me
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                        Experienced backend Software Engineer with a strong background in computer science and a keen interest in 
                        the development and design of scalable applications. Skilled in the design and implementation of software 
                        solutions that drive business development and growth. Proficient in Python (Django Rest Framework, FastAPI), 
                        NodeJS (Express, NestJS), Docker, and Postman, amongst other technologies, with extensive experience in cloud 
                        services and architecture. Expert in designing, implementing, and optimizing RESTful APIs, microservices 
                        architectures, and database systems, contributing to a 40% reduction in API response time and an estimated 20% 
                        decrease in system downtime.
                    </p>
                    </div>
                </section>

                {/* Work Experience as a Timeline */}
                <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-t border-gray-800">
                    <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10 text-center">
                        Work Experience
                    </h2>
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-blue-600/50 md:border-0 z-0" />
                        <div className="flex flex-col space-y-12">
                        {experiencesData.map((exp, index) => (
                            <div
                            key={index}
                            className={`relative flex flex-col bg-[#0a0a0a] items-center text-center md:text-left ${
                                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            }`}
                            >
                            {/* Timeline Circle */}
                            <div className="z-10 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center border-4 border-[#0a0a0a]" />
                            <div
                                className={`md:w-1/2 ${
                                index % 2 === 0
                                    ? "md:ml-8 md:items-start"
                                    : "md:mr-8 md:items-end"
                                } mt-4 md:mt-0 flex flex-col`}
                            >
                                <h3 className="text-xl font-semibold text-blue-300 mb-2">
                                {exp.role}
                                </h3>
                                <p className="text-gray-400">
                                <strong>Company:</strong> {exp.company}
                                </p>
                                <p className="text-gray-400">
                                <strong>Duration:</strong> {exp.duration}
                                </p>
                                <p className="text-gray-300 mt-2">{exp.details}</p>
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects (Album) Section - Masonry Style */}
            <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#0f0f0f] border-t border-gray-800">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10">
                        Projects
                    </h2>
                    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                        {projectsData.map((project, index) => (
                            <div onClick={() => {setSelectedProject({ project })}} key={index}>
                                <motion.div
                                    key={index}
                                    className="relative w-full mb-4 overflow-hidden rounded-lg border border-blue-500/20 group"
                                    whileHover={{ scale: 1.02, zIndex: 10 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {/* Project Image */}
                                    <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* (Optional) Project Overlay or Title */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <div className="p-4">
                                            <h3 className="text-xl font-semibold text-blue-400">
                                            {project.title}
                                            </h3>
                                            <p className="text-gray-300 text-sm line-clamp-2">
                                            {project.description}
                                            </p>
                                            <p className="text-sm text-blue-400 mt-1">
                                            Click to view more details
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                                {/* Quick Action Links (Under the Image) */}
                                <div className="p-2 flex space-x-10 items-center justify-center rounded-lg">
                                    {project.links.map((link, idx) => (
                                        <a
                                            key={idx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${link.type === "GitHub" ? "bg-gray-700" : link.type === "NPM" ? "bg-red-600" : link.type === "PyPI" ? "bg-blue-600" : link.type === "Live" ? "bg-blue-500" : ""} hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-300`}
                                        >
                                            {link.type === "GitHub" && <FaGithub size={20} color="black" />}
                                            {link.type === "NPM" && <FaNpm size={20} />}
                                            {link.type === "PyPI" && <FaPython size={20} />}
                                            {link.type === "Live" && <FaGlobe size={20} />}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal for Project Details */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md overflow-auto">
                    <div className="max-w-3xl w-full">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="bg-black/90 p-4 rounded-lg"
                            onClick={() => setSelectedProject(null)}
                        >
                        {/* Main content */}
                        <motion.div
                            className="relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedProject.project.image}
                                alt={selectedProject.project.title}
                                className="w-full h-auto object-contain rounded-lg shadow-[0_0_40px_rgba(66,135,245,0.4)]"
                            />
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 transition-colors rounded-full p-3"
                            >
                                <FaTimes size={24} className="text-white" />
                                <span className="sr-only">Close</span>
                            </button>
                        </motion.div>

                        {/* Project Details */}
                        <div className="mt-4 p-4 border-t border-blue-500/20 text-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
                                {selectedProject.project.title}
                            </h3>
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
                                {selectedProject.project.description}
                            </p>
                            <div className="flex flex-wrap justify-center space-x-4 space-y-2 md:space-y-0">
                                {selectedProject.project.links.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white font-semibold"
                                    >
                                        <FaExternalLinkAlt />
                                        <span>{link.type}</span>
                                    </a>
                                ))}
                            </div>
                            {selectedProject.project.album.length > 0 && (
                                <div className="mt-4 p-4 border-t border-blue-500/20 text-center">
                                    <div className="grid grid-cols-1 md:grid-cols-2 space-x-3 space-y-3 overflow-x-auto justify-center">
                                        {selectedProject.project.album.map((img, idx) => (
                                        <img
                                            key={idx}
                                            src={img}
                                            alt={`Album image ${idx + 1}`}
                                            className="w-[100%] md:w-[97%] object-contain rounded-md"
                                        />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        </motion.div>
                    </div>
                </div>
            )}

            {/* Call to Action */}
            <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-t border-gray-800">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
                        Let's Connect
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                        Interested in working together or discussing an idea? Feel free to
                        reach out.
                    </p>
                    <a
                        href="mailto:adeyeriopeoluwa05@gmail.com"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold"
                    >
                        Send Me an Email
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full bg-black border-t border-gray-800 py-6 mt-auto">
                <div className="max-w-6xl mx-auto text-center text-gray-300">
                    <p>
                        &copy; {new Date().getFullYear()} Opeoluwa Adeyeri. All rights
                        reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
