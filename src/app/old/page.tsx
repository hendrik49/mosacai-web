import EnhancedHero from '../components/EnhancedHero'
import FeaturesSection from '../components/FeaturesSection'
import EnhancedServices from '../components/EnhancedServices'
import EnhancedProjects from '../components/EnhancedProjects'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <EnhancedHero />
      <FeaturesSection />
      <EnhancedServices />
      <EnhancedProjects />
      <CTASection />
    </div>
  )
}
