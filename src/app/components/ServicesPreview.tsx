import Link from 'next/link'
import { ArrowRight, Cpu, Database, Bot, BarChart } from 'lucide-react'

const ServicesPreview = () => {
  const services = [
    {
      icon: Cpu,
      title: '机器学习',
      description: '定制化机器学习模型开发，提供预测分析和智能决策支持。',
      features: ['预测分析', '模式识别', '自动化决策', '数据挖掘']
    },
    {
      icon: Bot,
      title: '深度学习',
      description: '基于神经网络的深度学习解决方案，处理复杂的非线性问题。',
      features: ['图像识别', '自然语言处理', '语音识别', '推荐系统']
    },
    {
      icon: Database,
      title: '数据分析',
      description: '大数据处理和分析服务，挖掘数据价值，驱动业务增长。',
      features: ['数据处理', '可视化分析', '商业智能', '实时监控']
    },
    {
      icon: BarChart,
      title: 'AI咨询',
      description: '专业的AI战略咨询服务，助力企业制定AI转型路线图。',
      features: ['战略规划', '技术评估', '实施指导', '培训服务']
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">我们的</span>
            <span className="text-gradient"> 核心服务</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            从机器学习到深度学习，从数据分析到AI咨询，我们提供全方位的AI解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="card-glass p-8 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-purple rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services" className="btn-primary group">
            查看所有服务
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview 