import styles from './page.module.css'
import Jumbotron from '@/components/jumbo/Jumbotron'
import FaqContainer from '@/components/faq/FaqContainer'
import dynamic from 'next/dynamic'
import PageWrapper from '@/components/page/PageWrapper'
import Services from '@/components/services/Services'

const FeedbackCarousel = dynamic(
  () => import('@/components/feedback/FeedbackCarousel'),
)
const AboutSection = dynamic(() => import('@/components/about/AboutSection'))

const ComplianceCarorusel = dynamic(
  () => import('@/components/compliance/ComplianceCarorusel'),
)

export default function Home() {
  return (
    <PageWrapper>
      <Jumbotron />
      <Services />
      <ComplianceCarorusel />
      <AboutSection />
      <FeedbackCarousel />
      <FaqContainer />
    </PageWrapper>
  )
}
