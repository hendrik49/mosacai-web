import { Cpu, Bot, Database, BarChart, Cog, Lightbulb } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Cpu,
      title: 'Machine Learning',
      description: 'Custom machine learning model development providing predictive analytics and intelligent decision support.',
      features: [
        'Predictive analytics models',
        'Classification and regression algorithms',
        'Recommendation system development',
        'Anomaly detection systems',
        'Data mining services',
        'Model optimization and tuning'
      ],
      process: [
        'Requirements analysis',
        'Data processing',
        'Model training',
        'Performance evaluation',
        'Deployment',
        'Continuous optimization'
      ]
    },
    {
      icon: Bot,
      title: 'Deep Learning',
      description: 'Neural network-based deep learning solutions for handling complex non-linear problems.',
      features: [
        'Image recognition and analysis',
        'Natural language processing',
        'Speech recognition and conversion',
        'Computer vision',
        'Generative adversarial networks',
        'Reinforcement learning applications'
      ],
      process: [
        'Problem definition',
        'Network design',
        'Data augmentation',
        'Model training',
        'Parameter optimization',
        'Production deployment'
      ]
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Big data processing and analytics services to extract value from data and drive business growth.',
      features: [
        'Data cleaning and preparation',
        'Statistical analysis reports',
        'Visualization dashboards',
        'Business intelligence BI',
        'Real-time data monitoring',
        'Data warehouse construction'
      ],
      process: [
        'Data collection',
        'Cleaning and processing',
        'Exploratory analysis',
        'Modeling and analysis',
        'Results interpretation',
        'Decision support'
      ]
    },
    {
      icon: BarChart,
      title: 'AI Consulting',
      description: 'Professional AI strategy consulting services to help enterprises develop AI transformation roadmaps.',
      features: [
        'AI strategic planning',
        'Technical feasibility assessment',
        'ROI analysis',
        'Team training and guidance',
        'Project management support',
        'Risk assessment and control'
      ],
      process: [
        'Current state assessment',
        'Requirements analysis',
        'Solution design',
        'Implementation planning',
        'Project execution',
        'Performance evaluation'
      ]
    },
    {
      icon: Cog,
      title: 'Technical Integration',
      description: 'Seamlessly integrate AI technology into existing business systems to improve overall efficiency.',
      features: [
        'API interface development',
        'System integration services',
        'Cloud platform deployment',
        'Performance optimization',
        'Monitoring and alerting systems',
        'Maintenance and upgrade services'
      ],
      process: [
        'Architecture design',
        'Interface development',
        'System testing',
        'Integration deployment',
        'Performance tuning',
        'Operations support'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Innovation R&D',
      description: 'Cutting-edge AI technology research and development, exploring new application scenarios and business models.',
      features: [
        'Algorithm research and development',
        'Prototype system construction',
        'Proof of concept POC',
        'Technical patent applications',
        'Academic paper publication',
        'Industry-academia cooperation'
      ],
      process: [
        'Technical research',
        'Solution design',
        'Algorithm development',
        'Experimental validation',
        'Prototype development',
        'Results commercialization'
      ]
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Our</span>
              <span className="text-gradient"> Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              From machine learning to deep learning, from data analytics to AI consulting
              <br />
              We provide comprehensive artificial intelligence solutions
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-glass p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-purple rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-primary-400 mb-3">
                      Service Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div>
                    <h4 className="text-lg font-semibold text-primary-400 mb-3">
                      Service Process
                    </h4>
                    <ul className="space-y-2">
                      {service.process.map((step, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-xs font-medium">
                            {idx + 1}
                          </div>
                          <span className="text-gray-400 text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-400/50">
        <div className="container-center">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Need</span>
              <span className="text-gradient"> Custom Services</span>
              <span className="text-white">?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our expert team will customize the most suitable AI solutions according to your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Get Started Now
              </a>
              <a href="/projects" className="btn-secondary">
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 