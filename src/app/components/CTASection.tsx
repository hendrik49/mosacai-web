import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container-center">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-purple p-8 md:p-16 text-center">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-48 -translate-x-48"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Icon */}
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your
              <br />
              AI Transformation Journey?
            </h2>

            {/* Description */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Whether you want to explore AI possibilities or need customized AI solutions,
              our expert team will provide professional consulting and services.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group">
                Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/ai" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                Explore AI Technology
              </Link>
            </div>

            {/* Contact info */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white/80 mb-2">
                Or contact our AI experts directly
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white">
                <a href="mailto:contact@mosaicai.com" className="hover:text-white/80 transition-colors">
                  📧 contact@mosaicai.com
                </a>
                <span className="hidden sm:block">•</span>
                <a href="tel:+8612345678900" className="hover:text-white/80 transition-colors">
                  📞 +86 123 4567 8900
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection 