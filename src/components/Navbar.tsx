import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Calendar, Phone } from 'lucide-react';
import { SCHOOL_DETAILS } from '../data/schoolConfig';

interface NavbarProps {
  onOpenEnquireModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquireModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = [
        'home',
        'why-us',
        'about',
        'programs',
        'philosophy',
        'facilities',
        'activities',
        'gallery',
        'awards',
        'testimonials',
        'contact',
      ];

      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Activities', href: '#activities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF5EE]/95 backdrop-blur-md shadow-md py-3 border-b border-amber-900/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#E86A33] to-amber-400 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 fill-white/20" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-[#3D2314]">
                {SCHOOL_DETAILS.name}
              </span>
              <span className="text-[10px] font-semibold text-[#E86A33] tracking-widest uppercase -mt-1">
                Preschool
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const linkId = link.href.replace('#', '');
              const isActive = activeSection === linkId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-[#E86A33] bg-orange-100/60'
                      : 'text-[#3D2314]/80 hover:text-[#E86A33] hover:bg-orange-50/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${SCHOOL_DETAILS.mobile}`}
              className="p-2.5 rounded-xl text-[#3D2314] hover:text-[#E86A33] hover:bg-orange-100/50 transition-colors"
              title="Call Us"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenEnquireModal}
              className="bg-[#E86A33] hover:bg-[#D45823] text-white px-5 py-2.5 rounded-2xl font-bold text-sm shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Enquire Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenEnquireModal}
              className="bg-[#E86A33] text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Enquire</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#3D2314] hover:bg-amber-100/60 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#3D2314]" />
              ) : (
                <Menu className="w-6 h-6 text-[#3D2314]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#FAF5EE] border-b border-amber-900/10 shadow-2xl px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const linkId = link.href.replace('#', '');
              const isActive = activeSection === linkId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#E86A33] text-white font-bold'
                      : 'text-[#3D2314] hover:bg-orange-100/50'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <Sparkles className="w-4 h-4 fill-white" />}
                </a>
              );
            })}

            <div className="pt-4 border-t border-amber-900/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquireModal();
                }}
                className="w-full bg-[#E86A33] text-white py-3 rounded-xl font-bold text-center shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a School Visit</span>
              </button>

              <div className="flex items-center justify-around pt-2">
                <a
                  href={`tel:${SCHOOL_DETAILS.mobile}`}
                  className="text-xs font-semibold text-[#3D2314] flex items-center gap-1.5 py-1 px-3 rounded-lg bg-amber-100/60"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E86A33]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={SCHOOL_DETAILS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-800 flex items-center gap-1.5 py-1 px-3 rounded-lg bg-emerald-100/80"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
