import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

const ProjectsPreview = () => {
  const projects = [
    {
      title: '智能客服系统',
      description: '为某大型电商平台开发的AI智能客服系统，提升客户服务效率200%。',
      tech: ['NLP', '机器学习', 'React', 'Python'],
      image: '/api/placeholder/400/250',
      category: 'AI应用'
    },
    {
      title: '预测分析平台',
      description: '帮助制造业企业预测设备故障，降低维护成本30%，提升生产效率。',
      tech: ['深度学习', '时间序列', 'TensorFlow', 'Vue.js'],
      image: '/api/placeholder/400/250',
      category: '数据分析'
    },
    {
      title: '图像识别系统',
      description: '为医疗机构开发的医学影像AI诊断系统，提升诊断准确率至95%+。',
      tech: ['CNN', '计算机视觉', 'PyTorch', 'Docker'],
      image: '/api/placeholder/400/250',
      category: '医疗AI'
    }
  ]

  return (
    <section className="section-padding bg-dark-400/30">
      <div className="container-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">成功</span>
            <span className="text-gradient"> 案例展示</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            看看我们如何帮助不同行业的企业实现AI转型，创造实际价值
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="card-glass group overflow-hidden">
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-600/20 to-primary-400/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-primary-300">
                    <div className="w-16 h-16 bg-primary-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
                      <ExternalLink className="w-8 h-8" />
                    </div>
                    <div className="text-sm font-medium">{project.category}</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="bg-dark-200 text-primary-300 text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Link href="/projects" className="text-primary-400 hover:text-primary-300 transition-colors font-medium">
                    查看详情
                  </Link>
                  <ArrowRight className="w-4 h-4 text-primary-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects" className="btn-primary group">
            查看所有项目
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsPreview 