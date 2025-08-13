'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, and admin dashboard.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, built using Next.js, Spring Boot, and WebSocket technology.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Spring Boot", "WebSocket", "MySQL"],
      link: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions and forecasts using external APIs and modern UI components.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Weather API"],
      link: "#"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "An analytics platform for social media metrics with interactive charts and data visualization capabilities.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Java", "MongoDB", "Chart.js"],
      link: "#"
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "A comprehensive LMS with course management, student tracking, and interactive learning modules.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Spring Boot", "PostgreSQL", "Redis"],
      link: "#"
    },
    {
      id: 6,
      title: "Real Estate Platform",
      description: "A modern real estate platform with property listings, search filters, and virtual tour integration.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Node.js", "MongoDB", "Mapbox"],
      link: "#"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
            variants={cardVariants}
          >
            Projetos em destaque
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="card overflow-hidden group cursor-pointer"
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20">
                    {project.id}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="btn-primary w-full group-hover:bg-blue-700 transition-colors duration-200">
                    View More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            variants={cardVariants}
          >
            <a
              href="#"
              className="btn-secondary inline-flex items-center gap-2 text-lg"
            >
              Visualizar todos os projetos
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects