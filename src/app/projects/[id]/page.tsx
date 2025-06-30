'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const projectsData = {
  'tealive': {
    title: 'Tealive',
    description: 'Crafting top-notch digital solutions that prioritise an exceptional user experience and stunning UI, all powered by the latest trends & technologies.',
    image: '/images/projects/tealive.png',
    services: ['Consulting', 'Mobile development', 'UI/UX design'],
    client: "Tealive, Southeast Asia's leading lifestyle tea brand with 900+ outlets, embarked on a transformative digital journey. Faced with challenges in their mobile app ecosystem, we led a comprehensive optimization initiative.",
    goal: 'Enhance user experience and scale our mobile app ecosystem for millions of users.',
    goalDescription: 'Fortify the infrastructure to effortlessly handle millions of users, elevating overall performance. This project reflects our commitment to empowering brands in the digital landscape, resulting in a smooth and delightful user experience. Tealive\'s optimized app now mirrors their commitment to excellence, serving as a foundation for sustained growth in redefining tea enjoyment.',
    result: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    type: 'mobile'
  },
  'baskbear': {
    title: 'Bask bear',
    description: 'Introducing a collection of fully designed and functional components, tailored to enhance your Figma and Framer projects.',
    image: '/images/projects/baskbear.png',
    services: ['Mobile development', 'UI/UX design', 'Brand identity'],
    client: 'Bask bear is an innovative lifestyle brand focused on creating premium outdoor and leisure products for modern consumers.',
    goal: 'Create a seamless mobile experience that reflects the brand\'s premium positioning.',
    goalDescription: 'Develop a comprehensive mobile application that showcases the brand\'s products while providing an intuitive shopping experience.',
    result: 'Successfully launched a mobile app that increased user engagement by 150% and improved conversion rates significantly.',
    type: 'mobile'
  },
  'e-payplus': {
    title: 'e-pay plus',
    description: 'Introducing a collection of fully designed and functional components, tailored to enhance your Figma and Framer projects.',
    image: '/images/projects/e-payplus.png',
    services: ['Fintech development', 'Security implementation', 'UI/UX design'],
    client: 'e-pay plus is a cutting-edge digital payment solution provider serving businesses across Southeast Asia.',
    goal: 'Build a secure and user-friendly digital payment platform.',
    goalDescription: 'Create a comprehensive fintech solution that prioritizes security while maintaining an exceptional user experience.',
    result: 'Delivered a robust payment platform that processes over 1 million transactions monthly with 99.9% uptime.',
    type: 'mobile'
  },
  'edunation': {
    title: 'EduNation',
    description: 'Introducing a collection of fully designed and functional components, tailored to enhance your Figma and Framer projects.',
    image: '/images/projects/edunation.png',
    services: ['EdTech development', 'Learning management system', 'UI/UX design'],
    client: 'EduNation is a progressive educational technology company revolutionizing online learning experiences.',
    goal: 'Create an engaging and interactive learning platform.',
    goalDescription: 'Develop a comprehensive educational platform that makes learning accessible and enjoyable for students of all ages.',
    result: 'Launched a platform that serves over 50,000 students with a 95% satisfaction rate.',
    type: 'web'
  },
  'malaysia-airforce': {
    title: 'Royal Malaysia Airforce',
    description: 'Introducing a collection of fully designed and functional components, tailored to enhance your Figma and Framer projects.',
    image: '/images/projects/malaysia_airforce.png',
    services: ['Government solutions', 'Security systems', 'Custom development'],
    client: 'The Royal Malaysia Air Force requires advanced digital solutions for operational efficiency and strategic planning.',
    goal: 'Develop secure and efficient digital systems for military operations.',
    goalDescription: 'Create robust and secure digital infrastructure to support critical military operations and strategic decision-making.',
    result: 'Delivered mission-critical systems that enhanced operational efficiency by 40% while maintaining the highest security standards.',
    type: 'web'
  },
  'bookxcess': {
    title: 'Bookxcess',
    description: 'Introducing a collection of fully designed and functional components, tailored to enhance your Figma and Framer projects.',
    image: '/images/projects/bookxcess.png',
    services: ['E-commerce development', 'Inventory management', 'UI/UX design'],
    client: 'Bookxcess is Malaysia\'s leading bookstore chain with a mission to make reading affordable and accessible.',
    goal: 'Create a comprehensive e-commerce platform for book lovers.',
    goalDescription: 'Develop an online platform that mirrors the in-store experience while providing additional digital conveniences.',
    result: 'Launched an e-commerce platform that increased online sales by 300% and improved customer retention.',
    type: 'web'
  },
  'drum': {
    title: 'DRUM',
    description: 'Introducing a collection of fully designed and functional components, tailored to enhance your Figma and Framer projects.',
    image: '/images/projects/drum.png',
    services: ['Music platform development', 'Audio streaming', 'UI/UX design'],
    client: 'DRUM is an innovative music platform connecting artists with their audiences through cutting-edge technology.',
    goal: 'Build a comprehensive music platform for artists and fans.',
    goalDescription: 'Create a digital ecosystem where musicians can showcase their work and connect with their audience.',
    result: 'Successfully launched a platform hosting over 10,000 artists with millions of monthly streams.',
    type: 'web'
  },
  'avenys': {
    title: 'Avenys',
    description: 'Introducing a collection of fully designed and functional components, tailored to enhance your Figma and Framer projects.',
    image: '/images/projects/avenys.png',
    services: ['Enterprise solutions', 'Data analytics', 'Custom development'],
    client: 'Avenys is a technology consultancy firm specializing in enterprise digital transformation solutions.',
    goal: 'Develop enterprise-grade solutions for digital transformation.',
    goalDescription: 'Create scalable and robust enterprise solutions that drive digital transformation initiatives.',
    result: 'Delivered enterprise solutions that improved operational efficiency by 60% across multiple client organizations.',
    type: 'mobile'
  },
  'loudspeaker': {
    title: 'Loudspeaker',
    description: 'Introducing a collection of fully designed and functional components, tailored to enhance your Figma and Framer projects.',
    image: '/images/projects/loudspeaker.png',
    services: ['Audio technology', 'Mobile development', 'UI/UX design'],
    client: 'Loudspeaker is an audio technology company focused on creating innovative sound solutions for mobile devices.',
    goal: 'Create an innovative audio experience platform.',
    goalDescription: 'Develop cutting-edge audio technology solutions that enhance mobile audio experiences.',
    result: 'Launched audio solutions that are now integrated into over 100 mobile applications.',
    type: 'mobile'
  }
}

const otherProjects = [
  { id: 'baskbear', title: 'Bask bear', image: '/images/projects/baskbear.png' },
  { id: 'avenys', title: 'Avenys', image: '/images/projects/avenys.png' },
  { id: 'edunation', title: 'EduNation', image: '/images/projects/edunation.png' }
]

export default function ProjectDetail() {
  const params = useParams()
  const projectId = params.id as string
  const project = projectsData[projectId as keyof typeof projectsData]

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030014] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-white mb-4">Project not found</h1>
          <Link href="/projects" className="text-purple-400 hover:text-purple-300">
            ← Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#030014] text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 opacity-80">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#651D71] rounded-full filter blur-[240px]" />
        <div className="absolute -top-20 left-60 w-60 h-60 bg-[#7A5EA8] rounded-full filter blur-[240px]" />
        <div className="absolute top-40 -left-60 w-[200%] h-[200%] bg-[#10193B] filter blur-[240px]" />
      </div>

      {/* Hero Image */}
      <div className="relative h-[550px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Back Button */}
        <div className="absolute top-8 left-8 z-10">
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-2xl px-8">
            <h1 className="text-5xl font-normal mb-4 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-[#EFEDFD]/70 text-lg">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="relative bg-[#0E1534]">
        {/* Background Gradients */}
        <div className="absolute inset-0 opacity-80">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#651D71] rounded-full filter blur-[240px]" />
          <div className="absolute -top-20 left-60 w-60 h-60 bg-[#7A5EA8] rounded-full filter blur-[240px]" />
          <div className="absolute top-40 -left-60 w-[200%] h-[200%] bg-[#10193B] filter blur-[240px]" />
        </div>

        {/* Mobile Mockups */}
        <div className="relative px-20 py-16">
          <div className="max-w-7xl mx-auto flex justify-end gap-8">
            {/* First Mobile */}
            <div className="relative">
              <div className="w-[293px] h-[597px] relative">
                {/* iPhone Frame */}
                <div className="absolute inset-0">
                  {/* Device surround */}
                  <div className="absolute inset-0 bg-[#333333] rounded-[40px]" />
                  <div className="absolute inset-[2px] bg-[#303030] rounded-[38px]" />
                  <div className="absolute inset-[4px] bg-[#121515] rounded-[36px]" />
                  
                  {/* Screen */}
                  <div className="absolute top-[14px] left-[15px] w-[263px] h-[569px] bg-black rounded-[32px] overflow-hidden">
                    {/* Status Bar */}
                    <div className="h-[27px] px-6 flex justify-between items-center text-xs text-white">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 border border-white/30 rounded-sm">
                          <div className="w-3 h-1 bg-white rounded-sm m-0.5" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-[542px] object-cover"
                    />
                    
                    {/* Home indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[93px] h-1 bg-white rounded-full" />
                  </div>
                  
                  {/* Camera */}
                  <div className="absolute top-[17px] left-[170px] w-[11px] h-[11px] bg-[#262C2D] rounded-full">
                    <div className="absolute inset-[2px] bg-[#121515] rounded-full">
                      <div className="absolute inset-[2px] bg-[#636F73]/40 rounded-full" />
                    </div>
                  </div>
                  
                  {/* Speaker */}
                  <div className="absolute top-[20px] left-[129px] w-[34px] h-1 bg-[#262C2D] rounded-full" />
                </div>
              </div>
            </div>

            {/* Second Mobile */}
            <div className="relative">
              <div className="w-[293px] h-[597px] relative">
                {/* iPhone Frame */}
                <div className="absolute inset-0">
                  {/* Device surround */}
                  <div className="absolute inset-0 bg-[#333333] rounded-[40px]" />
                  <div className="absolute inset-[2px] bg-[#303030] rounded-[38px]" />
                  <div className="absolute inset-[4px] bg-[#121515] rounded-[36px]" />
                  
                  {/* Screen */}
                  <div className="absolute top-[14px] left-[15px] w-[263px] h-[569px] bg-black rounded-[32px] overflow-hidden">
                    {/* Status Bar */}
                    <div className="h-[27px] px-6 flex justify-between items-center text-xs text-white">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 border border-white/30 rounded-sm">
                          <div className="w-3 h-1 bg-white rounded-sm m-0.5" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-[542px] object-cover"
                    />
                    
                    {/* Home indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[93px] h-1 bg-white rounded-full" />
                  </div>
                  
                  {/* Camera */}
                  <div className="absolute top-[17px] left-[170px] w-[11px] h-[11px] bg-[#262C2D] rounded-full">
                    <div className="absolute inset-[2px] bg-[#121515] rounded-full">
                      <div className="absolute inset-[2px] bg-[#636F73]/40 rounded-full" />
                    </div>
                  </div>
                  
                  {/* Speaker */}
                  <div className="absolute top-[20px] left-[129px] w-[34px] h-1 bg-[#262C2D] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Information */}
        <div className="relative px-20 pb-16">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Services */}
            <div className="flex gap-16">
              <div className="w-[544px]">
                <h2 className="text-4xl font-normal mb-8 text-white/80">
                  {project.goal}
                </h2>
              </div>
              <div className="w-[544px] space-y-8">
                <div>
                  <h3 className="text-base font-normal text-[#C5C5C5] mb-4 leading-relaxed">
                    Services:
                  </h3>
                  <div className="text-base font-normal text-[#C5C5C5] leading-relaxed">
                    {project.services.map((service: string, index: number) => (
                      <div key={index}>{service}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* The Client */}
            <div className="flex gap-16">
              <div className="w-[544px]">
                <h2 className="text-4xl font-normal mb-8 text-white/80">
                  The client
                </h2>
              </div>
              <div className="w-[544px]">
                <p className="text-base font-normal text-[#C5C5C5] leading-relaxed">
                  {project.client}
                </p>
              </div>
            </div>

            {/* The Goal */}
            <div className="flex gap-16">
              <div className="w-[544px]">
                <h2 className="text-4xl font-normal mb-8 text-white/80">
                  The goal
                </h2>
              </div>
              <div className="w-[544px]">
                <p className="text-base font-normal text-[#C5C5C5] leading-relaxed">
                  {project.goalDescription}
                </p>
              </div>
            </div>

            {/* The Result */}
            <div className="flex gap-16">
              <div className="w-[544px]">
                <h2 className="text-4xl font-normal mb-8 text-white/80">
                  The result
                </h2>
              </div>
              <div className="w-[544px]">
                <p className="text-base font-normal text-[#C5C5C5] leading-relaxed">
                  {project.result}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* See Other Projects */}
        <div className="relative px-20 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-normal bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                See other projects
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {otherProjects.map((otherProject) => (
                <Link 
                  key={otherProject.id}
                  href={`/projects/${otherProject.id}`}
                  className="group"
                >
                  <div className="bg-black/50 backdrop-blur-sm border border-white/[0.07] rounded-[10px] p-2.5 transition-all duration-500 hover:scale-[1.02] hover:border-white/20">
                    {/* Image Container */}
                    <div className="relative h-[245px] overflow-hidden rounded-md mb-2.5">
                      <img 
                        src={otherProject.image} 
                        alt={otherProject.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      
                      {/* Mobile Mockup Overlay */}
                      <div className="absolute right-6 top-6 w-[93px] h-[189px]">
                        <div className="w-full h-full bg-[#333333] rounded-[20px] p-[2px]">
                          <div className="w-full h-full bg-[#121515] rounded-[18px] overflow-hidden">
                            <img 
                              src={otherProject.image} 
                              alt={otherProject.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-2.5">
                      <h3 className="text-white font-medium text-base mb-2.5 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {otherProject.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Introducing a collection of fully designed and functional components, tailored to enhance your Figma and Framer projects.
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="relative px-20 py-16 border-t border-white/10 bg-gradient-to-b from-[#9382FF]/8 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-normal">
                <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                  Let's have a chat!
                </span>
              </h2>
              
              <p className="text-[#EFEDFD]/70 text-lg max-w-sm mx-auto">
                We are open for hire. Let's bring your creative ideas to life together!
              </p>
            </div>

            {/* CTA Button */}
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md rounded-[32px] border border-white/10 px-6 py-3 transition-all duration-300 hover:border-white/30 hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-blue-500/30"
            >
              <div className="bg-gradient-to-r from-[#E59CFF] via-[#BA9CFF] to-[#9CB2FF] bg-clip-text text-transparent font-medium text-sm">
                Get started
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 