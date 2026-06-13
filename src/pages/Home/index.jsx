import HeroSection from './HeroSection'
import CurriculumPreview from './CurriculumPreview'

export default function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '4rem', 
      paddingBottom: '4rem' 
    }}>
      {/* Hero Section */}
      <HeroSection />
      {/* Curriculum Preview */}
      <CurriculumPreview />
    </div>
  )
}