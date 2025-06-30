import { ExternalLink, Calendar, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { CardContainer, CardBody, CardItem } from '@/app/components/ui/3d-card'

export default function Projects() {
  const projects = [
    {
      id: 'tealive',
      title: 'Tealive',
      description: 'Introducing a collection of fully designed and functional components, tailored to enhance your Figma and Framer projects.',
      image: '/images/projects/tealive.png',
      type: 'mobile'
    },
    {
      id: 'baskbear',
      title: 'Bask bear',
      description: 'Introducing a collection of fully designed and functional components, tailored to enhance your Figma and Framer projects.',
      image: '/images/projects/baskbear.png',
      type: 'mobile'
    },
    {
      id: 'e-payplus',
      title: 'e-pay plus',
      description: 'Introducing a collection of fully designed and functional components, tailored to enhance your Figma and Framer projects.',
      image: '/images/projects/e-payplus.png',
      type: 'mobile'
    },
    {
      id: 'edunation',
      title: 'EduNation',
      description: 'Introducing a collection of fully designed and functional components, tailored to enhance your Figma and Framer projects.',
      image: '/images/projects/edunation.png',
      type: 'mobile'
    },
    {
      id: 'malaysia-airforce',
      title: 'Royal Malaysia Airforce',
      description: 'Introducing a collection of fully designed and functional components, tailored to enhance your Figma and Framer projects.',
      image: '/images/projects/malaysia_airforce.png',
      type: 'mobile'
    },
    {
      id: 'bookxcess',
      title: 'Bookxcess',
      description: 'Introducing a collection of fully designed and functional components, tailored to enhance your Figma and Framer projects.',
      image: '/images/projects/bookxcess.png',
      type: 'web'
    },
    {
      id: 'drum',
      title: 'DRUM',
      description: 'Introducing a collection of fully designed and functional components, tailored to enhance your Figma and Framer projects.',
      image: '/images/projects/drum.png',
      type: 'web'
    },
    {
      id: 'avenys',
      title: 'Avenys',
      description: 'Introducing a collection of fully designed and functional components, tailored to enhance your Figma and Framer projects.',
      image: '/images/projects/avenys.png',
      type: 'mobile'
    },
    {
      id: 'loudspeaker',
      title: 'Loudspeaker',
      description: 'Introducing a collection of fully designed and functional components, tailored to enhance your Figma and Framer projects.',
      image: '/images/projects/loudspeaker.png',
      type: 'mobile'
    }
  ]

  return (
    <div className="min-h-screen bg-[#030014]">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-20">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-80">
          <div className="absolute -left-[597px] -top-[1222.83px] w-[3077.1px] h-[3343.16px]">
            <div className="absolute left-[43.02px] top-0 w-[1078.05px] h-[1596.37px] bg-[#651D71] rounded-full blur-[240px] shadow-[0px_0px_80px_0px_rgba(201,178,199,1)]"></div>
            <div className="absolute left-[715.38px] top-[177.11px] w-[811.4px] h-[1200.92px] bg-[#7A5EA8] rounded-full blur-[240px] shadow-[0px_0px_80px_0px_rgba(201,178,199,1)]"></div>
            <div className="absolute left-0 top-[630.79px] w-[3077.1px] h-[2712.38px] bg-[#10193B] blur-[240px]"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Projects Badge */}
            <div className="inline-flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md rounded-[32px] border border-white/10 px-4 py-2">
                <div className="bg-gradient-to-r from-[#E59CFF] via-[#BA9CFF] to-[#9CB2FF] bg-clip-text text-transparent font-medium text-sm">
                  Projects
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight">
              <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                We're proud of the
              </span>
              <br />
              <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                work we've done
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#EFEDFD]/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Crafting top-notch digital solutions that prioritise an exceptional user experience and stunning UI, all powered by the latest trends & technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid with 3D Cards */}
      <section className="px-4 py-16 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-52">
            {projects.map((project, index) => (
              <CardContainer key={index} className="inter-var" containerClassName="py-4">
                <CardBody className="bg-gradient-to-br from-white/5 to-white/[0.02] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border border-white/[0.05] w-auto sm:w-[30rem] h-auto rounded-xl p-6 backdrop-blur-sm">
                  <Link href={`/projects/${project.id}`} className="block">
                    {/* Project Image */}
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white mb-4"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Subtle overlay for better text contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60"></div>
                      </div>
                    </CardItem>
                    
                    {/* Project Title */}
                    <CardItem
                      as="h3"
                      translateZ="60"
                      className="text-white font-medium text-lg mb-3 transition-colors duration-300 group-hover:text-purple-300"
                    >
                      {project.title}
                    </CardItem>
                    
                    {/* Project Description */}
                    <CardItem
                      as="p"
                      translateZ="40"
                      className="text-white/70 font-normal text-sm leading-relaxed mb-4"
                    >
                      {project.description}
                    </CardItem>
                    
                    {/* View Details Button */}
                    <CardItem
                      translateZ="80"
                      className="flex items-center text-purple-400 transition-all duration-300"
                    >
                      <span className="text-sm font-medium mr-2">View Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </CardItem>
                  </Link>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 