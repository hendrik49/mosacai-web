import { Brain, Zap, Shield, Target } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Algorithms',
      description: 'Based on the latest machine learning and deep learning technologies, providing precise AI solutions.'
    },
    {
      icon: Zap,
      title: 'Efficient Deployment',
      description: 'Rapid integration and deployment of AI models, shortening project cycles for quick results.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security protection, ensuring data privacy and system stability.'
    },
    {
      icon: Target,
      title: 'Precision Customization',
      description: 'Tailored AI solutions for different industries and business needs, providing personalized services.'
    }
  ]

  return (
    <section className="section-padding bg-dark-400/50">
      <div className="container-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Why Choose</span>
            <span className="text-gradient"> Mosaic AI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We focus on providing enterprises with cutting-edge AI technology to drive business innovation and digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-glass p-6 text-center group">
              <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection 