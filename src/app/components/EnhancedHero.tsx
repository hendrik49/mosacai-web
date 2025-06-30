'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { TypewriterEffect } from './ui/typewriter-effect'
import { Button } from './ui/moving-border'

const EnhancedHero = () => {
  const words = [
    {
      text: "Shaping",
      className: "text-white"
    },
    {
      text: "the",
      className: "text-white"
    },
    {
      text: "Future",
      className: "text-gradient"
    },
    {
      text: "of",
      className: "text-white"
    },
    {
      text: "AI",
      className: "text-gradient"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/20 to-transparent blur-3xl" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="container-center relative z-10">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          {/* Animated Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-white/15 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5 text-primary-400" />
            <span className="text-sm font-medium text-gray-300">AI-Powered Future Technology</span>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <ArrowRight className="w-4 h-4 text-primary-400" />
            </motion.div>
          </motion.div>

          {/* Typewriter Effect Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <TypewriterEffect words={words} className="text-4xl md:text-6xl lg:text-7xl" />
          </motion.div>

          {/* Animated Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="space-y-4"
          >
            <motion.h2 
              className="text-2xl md:text-4xl font-bold text-white"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Unlock Intelligent Potential
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              Mosaic AI is dedicated to providing cutting-edge artificial intelligence solutions
              <br />
              for enterprises, driving business growth through innovative technology.
            </motion.p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <Button
              borderRadius="1rem"
              className="bg-gradient-purple text-white border-neutral-200 dark:border-slate-800 px-8 py-4"
            >
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Collaboration</span>
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Button>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/projects" className="btn-secondary px-8 py-4">
                View Case Studies
              </Link>
            </motion.div>
          </motion.div>

          {/* Animated Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16"
          >
            {[
              { number: "100+", label: "Successful Projects" },
              { number: "50+", label: "Partner Companies" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "24/7", label: "Technical Support" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-gradient mb-2"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative overflow-hidden">
          <motion.div 
            className="w-1 h-3 bg-gradient-purple rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default EnhancedHero 