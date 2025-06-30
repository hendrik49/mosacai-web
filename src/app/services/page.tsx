import { Cpu, Bot, Database, BarChart, Cog, Lightbulb } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Cpu,
      title: '机器学习',
      description: '定制化机器学习模型开发，提供预测分析和智能决策支持。',
      features: [
        '预测分析模型',
        '分类和回归算法',
        '推荐系统开发',
        '异常检测系统',
        '数据挖掘服务',
        '模型优化调参'
      ],
      process: [
        '需求分析',
        '数据处理',
        '模型训练',
        '效果评估',
        '部署上线',
        '持续优化'
      ]
    },
    {
      icon: Bot,
      title: '深度学习',
      description: '基于神经网络的深度学习解决方案，处理复杂的非线性问题。',
      features: [
        '图像识别与分析',
        '自然语言处理',
        '语音识别转换',
        '计算机视觉',
        '生成对抗网络',
        '强化学习应用'
      ],
      process: [
        '问题定义',
        '网络设计',
        '数据增强',
        '模型训练',
        '调参优化',
        '产品化部署'
      ]
    },
    {
      icon: Database,
      title: '数据分析',
      description: '大数据处理和分析服务，挖掘数据价值，驱动业务增长。',
      features: [
        '数据清洗整理',
        '统计分析报告',
        '可视化仪表板',
        '商业智能BI',
        '实时数据监控',
        '数据仓库建设'
      ],
      process: [
        '数据收集',
        '清洗处理',
        '探索分析',
        '建模分析',
        '结果解释',
        '决策支持'
      ]
    },
    {
      icon: BarChart,
      title: 'AI咨询',
      description: '专业的AI战略咨询服务，助力企业制定AI转型路线图。',
      features: [
        'AI战略规划',
        '技术可行性评估',
        '投资回报分析',
        '团队培训指导',
        '项目管理支持',
        '风险评估控制'
      ],
      process: [
        '现状调研',
        '需求分析',
        '方案设计',
        '实施计划',
        '项目执行',
        '效果评估'
      ]
    },
    {
      icon: Cog,
      title: '技术集成',
      description: '将AI技术无缝集成到现有业务系统中，提升整体效率。',
      features: [
        'API接口开发',
        '系统集成服务',
        '云平台部署',
        '性能优化调优',
        '监控告警系统',
        '维护升级服务'
      ],
      process: [
        '架构设计',
        '接口开发',
        '系统测试',
        '集成部署',
        '性能调优',
        '运维支持'
      ]
    },
    {
      icon: Lightbulb,
      title: '创新研发',
      description: '前沿AI技术研发，探索新的应用场景和商业模式。',
      features: [
        '算法研究开发',
        '原型系统搭建',
        '概念验证POC',
        '技术专利申请',
        '学术论文发表',
        '产学研合作'
      ],
      process: [
        '技术调研',
        '方案设计',
        '算法开发',
        '实验验证',
        '原型开发',
        '成果转化'
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
              <span className="text-white">我们的</span>
              <span className="text-gradient"> 服务</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              从机器学习到深度学习，从数据分析到AI咨询
              <br />
              我们提供全方位的人工智能解决方案
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
                      服务内容
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
                      服务流程
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
              <span className="text-white">需要</span>
              <span className="text-gradient"> 定制化服务</span>
              <span className="text-white">？</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              我们的专家团队将根据您的具体需求，为您量身定制最适合的AI解决方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                立即咨询
              </a>
              <a href="/projects" className="btn-secondary">
                查看案例
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 