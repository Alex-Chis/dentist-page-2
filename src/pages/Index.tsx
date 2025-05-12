
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import InfoCards from "@/components/info-cards";
import ServicesSection from "@/components/services-section";
import MissionSection from "@/components/mission-section";
import TestimonialsSection from "@/components/testimonials-section";
import AppointmentBanner from "@/components/appointment-banner";
import BlogSection from "@/components/blog-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <InfoCards />
        <ServicesSection />
        <MissionSection />
        <TestimonialsSection />
        <AppointmentBanner />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
