import React from 'react'
import { Sparkles, Rocket, Users, Target, Heart, Zap, Shield, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Deliver",
      description: "We are respectful, inclusive, and take risks to deliver exceptional results.",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Human",
      description: "We put people first, creating meaningful connections and experiences.",
      gradient: "from-blue-400 to-purple-400"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Boundless",
      description: "We push boundaries and explore limitless possibilities in technology.",
      gradient: "from-green-400 to-blue-400"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Efficient",
      description: "We optimize every process to achieve maximum impact with minimal waste.",
      gradient: "from-orange-400 to-red-400"
    }
  ]

  const teamMembers = [
    {
      name: "Johan Lim",
      role: "Founder & CEO",
      description: "Visionary leader with 15+ years in tech innovation",
      initials: "JL"
    },
    {
      name: "Sarah Chen", 
      role: "CTO",
      description: "Tech expert specializing in AI and machine learning",
      initials: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Design",
      description: "Creative director passionate about user experience",
      initials: "MR"
    }
  ]

  return (
    <div className="min-h-screen bg-[#030014]">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-20">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-80">
          <div className="absolute -left-[597px] -top-[667px] w-[3077px] h-[1825px]">
            <div className="absolute left-[43px] top-0 w-[1078px] h-[872px] bg-[#651D71] rounded-full blur-[240px] shadow-[0px_0px_80px_0px_rgba(201,178,199,1)]"></div>
            <div className="absolute left-[715px] top-[97px] w-[811px] h-[656px] bg-[#7A5EA8] rounded-full blur-[240px] shadow-[0px_0px_80px_0px_rgba(201,178,199,1)]"></div>
            <div className="absolute left-0 top-[344px] w-[3077px] h-[1481px] bg-[#10193B] blur-[240px]"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* About Badge */}
            <div className="inline-flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md rounded-[32px] border border-white/10 px-4 py-2">
                <div className="bg-gradient-to-r from-[#E59CFF] via-[#BA9CFF] to-[#9CB2FF] bg-clip-text text-transparent font-medium text-sm">
                  About
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight">
              <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                Designing your vision,
              </span>
              <br />
              <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                engineering excellence.
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#EFEDFD]/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Empowering your digital vision with cutting-edge solutions, we prioritize unmatched user experiences and breathtaking UI design, all driven by the latest trends and technologies
            </p>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="relative mt-16 max-w-7xl mx-auto">
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
            {/* Background with gradient and pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-transparent">
              <div className="w-full h-full bg-gradient-to-t from-[#030014] via-transparent to-transparent"></div>
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>
            </div>
            {/* Mosaic AI logo or tech illustration placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Sparkles className="w-32 h-32 text-purple-300/30 mx-auto mb-4" />
                <p className="text-white/20 text-lg">Vision meets Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 md:px-8 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal mb-8">
            <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
              Our story
            </span>
          </h2>
          <div className="space-y-6 text-[#C5C5C5] text-lg leading-relaxed">
            <p>
              Founded in 2014 by two MIT alumni to guide companies through product strategy and realize their visions.
            </p>
            <p>
              Today, we are a globally talented team shaping digital solutions for startups and enterprise-level clients.
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16 px-4 md:px-8 lg:px-20 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[176px] top-0 w-[1264px] h-[722px]">
            {/* Abstract background patterns */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-transparent rounded-lg"></div>
            <div className="absolute right-0 top-10 w-[588px] h-[643px] bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-lg blur-3xl"></div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-normal mb-8">
                <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                  Our philosophy
                </span>
              </h2>
              <p className="text-[#C5C5C5] text-lg leading-relaxed">
                Harnessing the power of mobile technology to enhance lives. Every project is a step towards this cause.
              </p>
            </div>
            <div className="relative">
              {/* Decorative image placeholder */}
              <div className="aspect-square bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-transparent rounded-lg border border-white/10 backdrop-blur-sm">
                <div className="w-full h-full flex items-center justify-center">
                  <Sparkles className="w-24 h-24 text-purple-300/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-normal mb-6">
              <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                Our values
              </span>
            </h2>
            <p className="text-[#EFEDFD]/70 text-lg leading-relaxed">
              Every day, we are laser-focused on what we do best, tirelessly striving for 1% improvement, because being the best at what we do is our daily commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/[0.05] rounded-xl p-8 h-full backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${value.gradient} bg-opacity-20 mb-6`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-white font-medium text-lg mb-4">
                    {value.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed">
                    {value.description}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-normal mb-6">
              <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                Our team
              </span>
            </h2>
            <p className="text-[#EFEDFD]/70 text-lg leading-relaxed">
              Every day, we are laser-focused on what we do best, tirelessly striving for 1% improvement, because being the best at what we do is our daily commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-black/50 border border-white/[0.07] rounded-xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-conic from-[#F262B5]/0 via-[#5FC5FF]/60 via-[#FFAC89]/60 via-[#8155FF]/60 via-[#789DFF]/60 to-[#9F73F1]/0 opacity-60 blur-[100px] pointer-events-none"></div>
                  
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-60 h-60 mx-auto bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded border border-white/10 flex items-center justify-center overflow-hidden">
                      <div className="text-6xl font-medium text-white">{member.initials}</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative text-center">
                    {/* Decorative line */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4"></div>
                    
                    {/* Member info */}
                    <div className="flex items-center justify-center mb-2">
                      <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full p-1 border border-white/10">
                        <div className="bg-gradient-to-r from-white/20 to-white/10 rounded-full w-6 h-6 flex items-center justify-center">
                          <div className="text-xs font-medium text-white">{member.initials}</div>
                        </div>
                      </div>
                      <div className="ml-3 text-left">
                        <h3 className="text-white font-medium text-lg">{member.name}</h3>
                        <p className="text-white/70 text-sm">{member.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-white/60 text-sm mt-3">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#0E1534] to-[#0E1534]/40 rounded-xl border border-white/10 p-12 text-center relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-radial from-[#9382FF]/8 to-transparent"></div>
            
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-normal mb-6">
                <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                  Let's have a chat!
                </span>
              </h2>
              <p className="text-[#EFEDFD]/70 text-lg mb-8 max-w-2xl mx-auto">
                We are open for hire. Let's bring your creative ideas to life together!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md rounded-[32px] border border-white/10 px-6 py-3 text-sm font-medium bg-gradient-to-r from-[#E59CFF] via-[#BA9CFF] to-[#9CB2FF] bg-clip-text text-transparent hover:border-white/20 transition-all duration-300">
                  Get started
                </button>
                
                <button className="bg-gradient-to-r from-purple-500/12 to-blue-500/12 backdrop-blur-md rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-[#F4F0FF] hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300">
                  Work with us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 