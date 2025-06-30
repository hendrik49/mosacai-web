'use client'

import { motion } from 'framer-motion'
import { Brain, MessageSquare, Eye, Mic, Target, TrendingUp, Sparkles, Cpu, Zap, Leaf, BarChart3, Shield } from 'lucide-react'

export default function AI() {
  // AI服务数据
  const aiServices = [
    {
      id: 1,
      title: "AI-Powered User Experience (UX/UI)",
      subtitle: "SmartUX",
      icon: Brain,
      gradient: "from-purple-500 to-blue-500",
      features: [
        {
          title: "Natural Language Processing (NLP) & Conversational AI",
          description: "Enhance user interactions with intelligent chatbots, virtual assistants, and deep insights from user feedback and support tickets. Our NLP solutions bring a human touch to digital experiences."
        },
        {
          title: "Personalization & User Behavior Analysis", 
          description: "Tailor user experiences to individual preferences, behaviors, and demographics. With AI, every interaction becomes more personalized and meaningful."
        },
        {
          title: "Computer Vision & Visual Content Analysis",
          description: "Create richer visual experiences through image recognition, object detection, and the interpretation of visual content, elevating user engagement to new heights."
        },
        {
          title: "Voice User Interfaces (VUI)",
          description: "Empower your users with voice-activated experiences. Our AI-driven voice recognition and speech synthesis technologies improve accessibility and user interaction."
        },
        {
          title: "Sentiment & Emotional Analysis",
          description: "Design interfaces that resonate emotionally with users by understanding their feelings and sentiments, ensuring deeper, more meaningful engagement."
        }
      ]
    },
    {
      id: 2,
      title: "AI-Driven Product & Content Recommendations",
      subtitle: "Intelligent Recommendations",
      icon: Target,
      gradient: "from-pink-500 to-purple-500",
      features: [
        {
          title: "Personalized Recommendations",
          description: "Deliver content, product, or feature suggestions based on user interactions and preferences, ensuring the right content reaches the right user at the right time."
        },
        {
          title: "A/B Testing & Optimization",
          description: "Continuously refine and optimize your user interfaces with AI-driven A/B testing and data-backed optimization algorithms, maximizing engagement and conversions."
        }
      ]
    },
    {
      id: 3,
      title: "AI Solutions for Manufacturing & Operations",
      subtitle: "Operational AI",
      icon: Cpu,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        {
          title: "Predictive Maintenance & Failure Prediction",
          description: "Reduce downtime and maintenance costs by using AI to predict equipment failures before they happen, ensuring smoother operations."
        },
        {
          title: "Process & Production Optimization",
          description: "Drive efficiency with AI-enabled process optimization, from quality control using computer vision to production scheduling that maximizes resource allocation."
        },
        {
          title: "Supply Chain & Logistics Optimization",
          description: "Utilize AI to forecast demand, streamline supply chains, and optimize logistics routes, reducing costs and improving delivery times."
        },
        {
          title: "Robotics & Automation",
          description: "Leverage AI-driven robotics to automate complex tasks with precision. Our collaborative robots safely work alongside human workers, boosting productivity."
        }
      ]
    },
    {
      id: 4,
      title: "AI-Enhanced Design & Prototyping",
      subtitle: "AI Prototyping",
      icon: Sparkles,
      gradient: "from-orange-500 to-red-500",
      features: [
        {
          title: "Generative Design & Rapid Prototyping",
          description: "Innovate faster with AI algorithms that generate multiple design options and leverage 3D printing technologies for rapid prototyping, accelerating the product development cycle"
        },
        {
          title: "Automated Design Suggestions",
          description: "Streamline your creative process with AI-generated design elements such as layouts, color schemes, and prototypes, letting your team focus on groundbreaking ideas."
        }
      ]
    },
    {
      id: 5,
      title: "AI-Enabled Energy & Sustainability Solutions",
      subtitle: "Green AI",
      icon: Leaf,
      gradient: "from-green-500 to-emerald-500",
      features: [
        {
          title: "Energy Management Optimization",
          description: "Use AI to monitor and optimize energy consumption, reducing costs and environmental impact while maintaining operational efficiency."
        },
        {
          title: "Sustainable Manufacturing Practices",
          description: "Integrate AI to improve sustainability in manufacturing, from waste reduction to resource recycling, driving both innovation and environmental responsibility."
        }
      ]
    },
    {
      id: 6,
      title: "Data Analytics & Predictive Insights",
      subtitle: "Predictive Analytics",
      icon: BarChart3,
      gradient: "from-indigo-500 to-purple-500",
      features: [
        {
          title: "Real-Time Monitoring & Big Data Analytics",
          description: "Leverage AI to monitor production processes in real time, providing instant insights into inefficiencies and anomalies while making data-driven decisions."
        },
        {
          title: "User Behavior Prediction",
          description: "Anticipate user needs and actions with predictive analytics, offering proactive support and tailored experiences to keep users engaged."
        }
      ]
    },
    {
      id: 7,
      title: "Ethical AI & Inclusive Design",
      subtitle: "Ethical Design",
      icon: Shield,
      gradient: "from-violet-500 to-purple-500",
      features: [
        {
          title: "Bias Mitigation & Fair AI",
          description: "Ensure that AI solutions are inclusive and free from biases. We prioritize ethical AI design, creating fair and balanced solutions for all user groups."
        },
        {
          title: "Human-Centric Automation & AR/VR",
          description: "Use AI to enhance human-machine interaction through augmented reality (AR) and virtual reality (VR), providing intelligent assistance and improving decision-making in both digital and physical environments."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="px-4 py-16 lg:px-8 lg:py-24 relative">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            {/* AI Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-8"
            >
              <Brain className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Transform every experience<br />
              with <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">AI-driven innovation</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto"
            >
              The world's leading AI-powered services
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* AI Services Timeline */}
      <section className="px-4 py-16 lg:px-8 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* 垂直时间线 - 增强视觉效果 */}
            <div className="absolute left-6 lg:left-20 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-transparent rounded-full opacity-80 z-0" />
            <div className="absolute left-6 lg:left-20 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400/50 via-blue-400/50 to-transparent rounded-full blur-sm z-0" />
            
            <div className="space-y-16 lg:space-y-20">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-6 lg:gap-16 z-10"
                >
                  {/* 时间线节点 - 全新设计 */}
                  <div className="relative flex-shrink-0 w-16 lg:w-40 flex flex-col items-center z-20">
                    {/* 节点圆圈 */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="relative group"
                    >
                      {/* 外层发光环 */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md"></div>
                      
                      {/* 主圆圈 */}
                      <div className="relative w-14 h-14 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 border border-purple-500/30 rounded-full flex items-center justify-center shadow-xl group-hover:border-purple-400/50 group-hover:scale-105 transition-all duration-300">
                        <service.icon className="w-7 h-7 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
                      </div>
                    </motion.div>
                    
                    {/* 服务标签 - 更柔和的设计 */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      className="mt-4 text-center w-full max-w-24 lg:max-w-none"
                    >
                      <span className="inline-block bg-slate-800/80 border border-purple-500/30 px-3 py-2 text-xs lg:text-sm text-purple-300 font-medium rounded-full shadow-lg backdrop-blur-sm hover:bg-slate-700/80 hover:border-purple-400/50 hover:text-purple-200 transition-all duration-300">
                        {service.subtitle}
                      </span>
                    </motion.div>
                  </div>

                  {/* 内容区域 - 优化设计 */}
                  <div className="flex-1 min-w-0 relative z-30">
                    {/* 主标题 */}
                    <motion.h2 
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="text-xl lg:text-3xl xl:text-4xl font-bold text-white mb-8 lg:mb-10 relative z-30 leading-tight"
                    >
                      {service.title}
                    </motion.h2>

                    {/* 功能卡片网格 - 全新设计 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 relative z-30">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, y: 40, scale: 0.95 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ 
                            duration: 0.7, 
                            delay: index * 0.1 + featureIndex * 0.15,
                            type: "spring",
                            stiffness: 100
                          }}
                          viewport={{ once: true }}
                          className="group relative z-30"
                        >
                          <div className="relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 lg:p-7 hover:border-purple-500/50 transition-all duration-500 h-full group-hover:shadow-2xl group-hover:shadow-purple-500/10 group-hover:-translate-y-1">
                            {/* 背景装饰 */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-2xl rounded-tr-2xl opacity-50" />
                            
                            <div className="relative z-10">
                              {/* 顶部装饰线 */}
                              <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent mb-5" />
                              
                              <h3 className="text-sm lg:text-base font-semibold text-white mb-3 lg:mb-4 leading-tight group-hover:text-purple-200 transition-colors duration-300">
                                {feature.title}
                              </h3>
                              
                              <p className="text-xs lg:text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                {feature.description}
                              </p>
                            </div>
                            
                            {/* 悬停时的边框光效 */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
} 