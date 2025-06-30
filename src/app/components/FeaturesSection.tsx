import { Brain, Zap, Shield, Target } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: '智能算法',
      description: '基于最新的机器学习和深度学习技术，提供精准的AI解决方案。'
    },
    {
      icon: Zap,
      title: '高效部署',
      description: '快速集成和部署AI模型，缩短项目周期，快速见效。'
    },
    {
      icon: Shield,
      title: '安全可靠',
      description: '企业级安全保障，确保数据隐私和系统稳定性。'
    },
    {
      icon: Target,
      title: '精准定制',
      description: '针对不同行业和业务需求，提供个性化的AI解决方案。'
    }
  ]

  return (
    <section className="section-padding bg-dark-400/50">
      <div className="container-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">为什么选择</span>
            <span className="text-gradient"> Mosaic AI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            我们专注于为企业提供最前沿的AI技术，助力业务创新和数字化转型
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