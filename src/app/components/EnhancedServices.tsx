'use client'

import { motion } from 'framer-motion'
import { Brain, Database, LineChart, Users, Cog, Lightbulb } from 'lucide-react'
import { HoverEffect } from './ui/floating-cards'
import { Spotlight } from './ui/spotlight'

const EnhancedServices = () => {
  const services = [
    {
      title: "Machine Learning",
      description: "Advanced machine learning algorithms and model development to solve complex business problems with intelligent automation and predictive analytics.",
      icon: <Brain className="w-12 h-12 text-primary-400" />,
    },
    {
      title: "Deep Learning",
      description: "Neural network architectures and deep learning frameworks for computer vision, natural language processing, and advanced pattern recognition.",
      icon: <Database className="w-12 h-12 text-primary-400" />,
    },
    {
      title: "Data Analysis",
      description: "Comprehensive data mining, statistical analysis, and business intelligence solutions to extract valuable insights from your data.",
      icon: <LineChart className="w-12 h-12 text-primary-400" />,
    },
    {
      title: "AI Consulting",
      description: "Strategic AI consulting services to help businesses identify opportunities and implement AI-driven solutions for competitive advantage.",
      icon: <Users className="w-12 h-12 text-primary-400" />,
    },
    {
      title: "Tech Integration",
      description: "Seamless integration of AI technologies into existing systems and workflows with minimal disruption to business operations.",
      icon: <Cog className="w-12 h-12 text-primary-400" />,
    },
    {
      title: "Innovation R&D",
      description: "Cutting-edge research and development in artificial intelligence, exploring next-generation technologies and breakthrough innovations.",
      icon: <Lightbulb className="w-12 h-12 text-primary-400" />,
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#6c5ce7" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
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
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="section-title text-gradient mb-6">
              Our AI Services
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            Comprehensive artificial intelligence solutions designed to transform your business
            and unlock new opportunities for growth and innovation.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <HoverEffect items={services} className="max-w-7xl mx-auto" />
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <motion.button 
              className="btn-primary px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Services
            </motion.button>
            <motion.button 
              className="btn-secondary px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-10 w-48 h-48 bg-primary-400/5 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </section>
  )
}

export default EnhancedServices 