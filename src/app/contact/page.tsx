'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { CustomDatePicker } from '../components/ui/custom-datepicker'
import Image from 'next/image'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    completionDate: '',
    budget: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  const services = [
    'Web Development',
    'Mobile App Development',
    'AI & Machine Learning',
    'Data Analysis',
    'Digital Marketing',
    'Consulting',
    'Other'
  ]

  const budgets = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    'Above $100,000'
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-center max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-8 transition-colors"
            >
              Contact
            </motion.button>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Let's make<br />
              something great!
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              If you would like to find out more about what PGV can do for your
              business or to receive a project quote, don't hesitate to contact us.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-dark-100/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-8"
            >
              {/* Call Us */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                  <Image
                    src="/icons/call.svg"
                    alt="Call"
                    width={20}
                    height={20}
                    className="filter brightness-0 invert"
                    style={{ filter: 'brightness(0) saturate(100%) invert(64%) sepia(88%) saturate(3929%) hue-rotate(240deg) brightness(95%) contrast(89%)' }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">Call us</h3>
                  <a 
                    href="tel:+60112388889" 
                    className="text-gray-300 hover:text-primary-400 transition-colors text-lg"
                  >
                    +60 1112388889
                  </a>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                  <Image
                    src="/icons/email.svg"
                    alt="Email"
                    width={20}
                    height={20}
                    className="filter brightness-0 invert"
                    style={{ filter: 'brightness(0) saturate(100%) invert(64%) sepia(88%) saturate(3929%) hue-rotate(240deg) brightness(95%) contrast(89%)' }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">Email us</h3>
                  <a 
                    href="mailto:johan@pearlygatesventures.com" 
                    className="text-gray-300 hover:text-primary-400 transition-colors break-all"
                  >
                    johan@pearlygatesventures.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <Image
                      src="/icons/whatsapp.svg"
                      alt="WhatsApp"
                      width={20}
                      height={20}
                      className="filter brightness-0 invert"
                      style={{ filter: 'brightness(0) saturate(100%) invert(64%) sepia(88%) saturate(3929%) hue-rotate(240deg) brightness(95%) contrast(89%)' }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">WhatsApp</h3>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pl-16">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 relative rounded-full overflow-hidden border-2 border-primary-400/30">
                      <Image
                        src="/images/founder.png"
                        alt="Johan Lim"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-white font-medium">Johan Lim</div>
                      <div className="text-gray-400 text-sm">Founder of PGV</div>
                    </div>
                  </div>
                  <a 
                    href="https://wa.me/60112388889"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    Let's Chat
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-dark-100/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full px-4 py-3 bg-dark-200/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company"
                      className="w-full px-4 py-3 bg-dark-200/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email *"
                      className="w-full px-4 py-3 bg-dark-200/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number *"
                      className="w-full px-4 py-3 bg-dark-200/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* How can we help */}
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-200/50 border border-white/10 rounded-xl text-white focus:border-primary-500 focus:outline-none transition-colors appearance-none"
                    required
                  >
                    <option value="" disabled>How can we help?</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-dark-200">
                        {service}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>

                {/* Completion Date and Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <CustomDatePicker
                      value={formData.completionDate}
                      onChange={(date) => setFormData({...formData, completionDate: date})}
                      placeholder="Expected completion date *"
                    />
                  </div>
                  <div className="relative">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-200/50 border border-white/10 rounded-xl text-white focus:border-primary-500 focus:outline-none transition-colors appearance-none"
                      required
                    >
                      <option value="" disabled>Budget *</option>
                      {budgets.map((budget, index) => (
                        <option key={index} value={budget} className="bg-dark-200">
                          {budget}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more"
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-200/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 