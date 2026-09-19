import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProgramsSection } from './components/ProgramsSection';
import { AboutSection } from './components/AboutSection';
import { PhilosophySection } from './components/PhilosophySection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { GallerySection } from './components/GallerySection';
import { AwardsSection } from './components/AwardsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EnquireModal } from './components/EnquireModal';
import { Toast } from './components/Toast';

export function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [isToastOpen, setIsToastOpen] = useState(false);

  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);
  const [selectedProgramForModal, setSelectedProgramForModal] =
    useState<string>('');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setIsToastOpen(true);
  };

  const handleOpenEnquireModal = (programTitle?: string) => {
    setSelectedProgramForModal(programTitle || '');
    setIsEnquireModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#3D2314] antialiased selection:bg-orange-200 selection:text-[#3D2314]">
      {/* Navigation Header */}
      <Navbar onOpenEnquireModal={() => handleOpenEnquireModal()} />

      {/* Main Content Layout */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenEnquireModal={() => handleOpenEnquireModal()}
          onExploreProgramsClick={() => scrollToSection('programs')}
        />

        {/* 2. Why Choose VERUM Section */}
        <WhyChooseUs />

        {/* 3. About Us & Stats Section */}
        <AboutSection onOpenEnquireModal={() => handleOpenEnquireModal()} />

        {/* 4. Programs Section */}
        <ProgramsSection
          onSelectProgram={(program) => handleOpenEnquireModal(program.title)}
        />

        {/* 5. Learning Philosophy (Learn, Play, Explore, Grow) */}
        <PhilosophySection />

        {/* 6. Facilities Section */}
        <FacilitiesSection />

        {/* 7. Activities Section */}
        <ActivitiesSection />

        {/* 8. Gallery with Lightbox */}
        <GallerySection />

        {/* 9. Awards / Achievements */}
        <AwardsSection />

        {/* 10. Parent Testimonials */}
        <TestimonialsSection />

        {/* 11. Mid-Page Call To Action Banner */}
        <CTASection
          onOpenEnquireModal={() => handleOpenEnquireModal()}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 12. Contact Section & Form */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Modals & Toast */}
      <EnquireModal
        isOpen={isEnquireModalOpen}
        onClose={() => setIsEnquireModalOpen(false)}
        onShowToast={showToast}
        initialProgramTitle={selectedProgramForModal}
      />

      <Toast
        message={toastMessage}
        isOpen={isToastOpen}
        onClose={() => setIsToastOpen(false)}
      />
    </div>
  );
}

export default App;
