import HeroSection from './HeroSection'
import CurriculumPreview from './CurriculumPreview'
import WhyThisProject from './WhyThisProject'
import ScrollReveal from '../../components/ui/ScrollReveal'


export default function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '4rem', 
      paddingBottom: '4rem' 
    }}>
      {/* Hero Section */}
      <ScrollReveal>
        <HeroSection />
      </ScrollReveal>
      
      {/* Why This Project Section */}
      <ScrollReveal>
        <WhyThisProject />
      </ScrollReveal>

      {/* Curriculum Preview */}
      <CurriculumPreview />
    </div>
  )
}