import dynamic from 'next/dynamic'
import PageWrapper from '@/components/PageWrapper'

// const FeedbackCarousel = dynamic(
//   () => import('@/components/dashboard/FeedbackCarousel'),
//   { ssr: false },
// )
// const AboutSection = dynamic(
//   () => import('@/components/dashboard/AboutSection'),
//   {
//     ssr: false,
//   },
// )
// const ComplianceCarorusel = dynamic(
//   () => import('@/components/dashboard/ComplianceCarorusel'),
//   { ssr: false },
// )
// const ServiceListDashBoard = dynamic(
//   () => import('@/components/dashboard/ServiceListDashBoard'),
//   { ssr: true },
// )

// const FaqContainer = dynamic(
//   () => import('@/components/dashboard/FaqContainer'),
//   { ssr: false },
// )

const JumbotronContainer = dynamic(() => import('@/components/Jumbotron'), {
  ssr: true,
})

export default function Home() {
  return (
    <PageWrapper>
      <JumbotronContainer />
      {/* <ServiceListDashBoard />
      <ComplianceCarorusel />
      <AboutSection />
      <FeedbackCarousel />
      <FaqContainer /> */}
    </PageWrapper>
  )
}
