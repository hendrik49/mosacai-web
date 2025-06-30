'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, MapPin } from 'lucide-react'
import { InfiniteMovingCards } from './ui/infinite-moving-card'

const EnhancedProjects = () => {
  const projects = [
    {
      title: "Smart Healthcare Analytics",
      description: "AI-powered healthcare data analysis platform that provides real-time insights for medical professionals.",
      image: "/images/projects/healthcare.jpg",
      tech: ["TensorFlow", "Python", "React", "PostgreSQL"],
      results: "40% improvement in diagnosis accuracy",
      client: "MedTech Solutions",
      year: "2023"
    },
    {
      title: "Intelligent Supply Chain",
      description: "Machine learning solution for optimizing supply chain operations and predicting demand patterns.",
      image: "/images/projects/supply-chain.jpg",
      tech: ["PyTorch", "AWS", "Node.js", "MongoDB"],
      results: "25% reduction in operational costs",
      client: "LogiFlow Corp",
      year: "2023"
    },
    {
      title: "Natural Language Assistant",
      description: "Advanced NLP chatbot for customer service automation with sentiment analysis capabilities.",
      image: "/images/projects/chatbot.jpg",
      tech: ["Transformers", "FastAPI", "Vue.js", "Redis"],
      results: "60% faster response times",
      client: "ServiceBot Inc",
      year: "2023"
    }
  ];

  const testimonials = [
    {
      quote: "Mosaic AI transformed our data analysis capabilities. The insights we gained led to a 40% improvement in our decision-making process.",
      name: "Sarah Chen",
      title: "CTO, TechFlow Solutions"
    },
    {
      quote: "Working with Mosaic AI was exceptional. Their machine learning solution increased our operational efficiency by 35%.",
      name: "Michael Rodriguez",
      title: "Director of Operations, DataCorp"
    },
    {
      quote: "The AI integration provided by Mosaic AI revolutionized our customer service. Response times improved by 60%.",
      name: "Emily Zhang",
      title: "Product Manager, ServiceFirst"
    },
    {
      quote: "Mosaic AI's expertise in deep learning helped us achieve breakthrough results in our research project.",
      name: "Dr. James Wilson",
      title: "Research Lead, InnovLab"
    },
    {
      quote: "The predictive analytics platform delivered by Mosaic AI exceeded our expectations in every way.",
      name: "Lisa Thompson",
      title: "VP of Analytics, FutureData"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />
      </div>

      <div className="container-center relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.h2 
            className="section-title text-gradient mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Discover how we've helped businesses transform their operations 
            with cutting-edge AI solutions and achieve measurable results.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-dark-100/50 backdrop-blur-sm border border-white/10 hover:border-primary-400/50 transition-all duration-300 hover-lift">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-700/20" />
                  <motion.div 
                    className="absolute inset-0 bg-primary-500/10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-primary-500/20 hover:bg-primary-500/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-primary-400" />
                      </motion.button>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-xs rounded-full bg-primary-500/20 text-primary-300 border border-primary-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Details */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{project.client}</span>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mt-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                    <div className="text-sm font-medium text-green-400">
                      Result: {project.results}
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Testimonials */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h3 
            className="text-3xl font-bold text-center text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h3>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <motion.button 
              className="btn-primary px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
            <motion.button 
              className="btn-secondary px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/3 right-10 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-10 w-48 h-48 bg-primary-400/5 rounded-full blur-2xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </section>
  )
}

export default EnhancedProjects 