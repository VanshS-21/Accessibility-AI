import HeroSection from "../hero-section"
import HowItWorksSection from "../how-it-works-section"
import FeaturesSection from "../features-section"
import TestimonialSection from "../testimonial-section"
import CTASection from "../cta-section"
import Footer from "../footer"
import SectionBackground from "@/components/section-background"

export default function Page() {
  return (
    <SectionBackground direction="mesh" className="min-h-screen bg-gray-950">
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </SectionBackground>
  )
}
