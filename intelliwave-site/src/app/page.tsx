import { CaseStudies } from "../components/CaseStudies";
import { ContactSection } from "../components/ContactSection";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Pricing } from "../components/Pricing";
import { ServicesGrid } from "../components/ServicesGrid";
import { TechStack } from "../components/TechStack";
import { Testimonials } from "../components/Testimonials";
import { WorkflowTimeline } from "../components/WorkflowTimeline";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-dark">
      <Navbar />
      <main className="flex-1 space-y-12">
        <Hero />
        <ServicesGrid />
        <WorkflowTimeline />
        <Testimonials />
        <CaseStudies />
        <TechStack />
        <Pricing />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
