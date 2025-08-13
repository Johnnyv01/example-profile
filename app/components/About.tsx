'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
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
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
            variants={itemVariants}
          >
            Sobre mim
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Desenvolvedor Full Stack com Paixão por Inovação
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Sou um Desenvolvedor Full Stack dedicado com vasta experiência nos ecossistemas Java e JavaScript.
                Minha jornada no desenvolvimento de software me equipou com uma compreensão abrangente das tecnologias
                web modernas e das melhores práticas.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Sou especialista em criar aplicações web escaláveis usando tecnologias de ponta como React, Next.js,
                Spring Boot e Node.js. Minha abordagem combina princípios de código limpo com design centrado no
                usuário para proporcionar experiências digitais excepcionais.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={itemVariants}
            >
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Frontend Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {['Angular','React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'].map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Backend Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {['Java', 'Spring Boot', 'Node.js','Quarkus', 'PostgreSQL', 'MySQL'].map((tech) => (
                    <span key={tech} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Devops & Others</h4>
                <div className="flex flex-wrap gap-3">
                  {['Git', 'Docker', 'AWS', 'REST APIs'].map((tech) => (
                    <span key={tech} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About