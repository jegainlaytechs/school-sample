import React from 'react';
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Heart,
} from 'lucide-react';
import { SCHOOL_DETAILS } from '../data/schoolConfig';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const Footer: React.FC = () => {
  const handleNavClick = (href: string) => {
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
    <footer className="bg-[#2C180C] text-amber-100/90 pt-16 pb-8 border-t border-amber-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-amber-900/40">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#E86A33] to-amber-400 flex items-center justify-center text-white shadow-md">
                  <Sparkles className="w-5 h-5 fill-white/20" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-white tracking-tight">
                    {SCHOOL_DETAILS.name}
                  </span>
                  <span className="text-[10px] font-bold text-[#E86A33] tracking-widest uppercase -mt-1">
                    Preschool
                  </span>
                </div>
              </div>

              <p className="text-sm font-semibold text-amber-200/90 mb-4 italic">
                "{SCHOOL_DETAILS.tagline}"
              </p>

              <p className="text-xs text-amber-100/70 leading-relaxed max-w-sm font-normal">
                {SCHOOL_DETAILS.name} is a modern, premium play school in Chennai dedicated to early childhood excellence through play-based inquiry, safety, and creative exploration.
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={SCHOOL_DETAILS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#E86A33] text-white flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <a
                href={SCHOOL_DETAILS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Quick Navigation
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm font-medium">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#home');
                  }}
                  className="hover:text-[#E86A33] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#about');
                  }}
                  className="hover:text-[#E86A33] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#programs');
                  }}
                  className="hover:text-[#E86A33] transition-colors"
                >
                  Learning Programs
                </a>
              </li>
              <li>
                <a
                  href="#facilities"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#facilities');
                  }}
                  className="hover:text-[#E86A33] transition-colors"
                >
                  School Facilities
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#activities');
                  }}
                  className="hover:text-[#E86A33] transition-colors"
                >
                  Daily Activities
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#gallery');
                  }}
                  className="hover:text-[#E86A33] transition-colors"
                >
                  Photo Gallery
                </a>
              </li>
              <li>
                <a
                  href="#awards"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#awards');
                  }}
                  className="hover:text-[#E86A33] transition-colors"
                >
                  Awards & Honors
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="hover:text-[#E86A33] transition-colors"
                >
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Contact School
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E86A33] shrink-0 mt-0.5" />
                <span className="text-amber-100/80">
                  {SCHOOL_DETAILS.address}
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E86A33] shrink-0" />
                <a
                  href={`tel:${SCHOOL_DETAILS.mobile}`}
                  className="text-amber-100/80 hover:text-white transition-colors"
                >
                  {SCHOOL_DETAILS.mobile}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E86A33] shrink-0" />
                <a
                  href={`mailto:${SCHOOL_DETAILS.email}`}
                  className="text-amber-100/80 hover:text-white transition-colors"
                >
                  {SCHOOL_DETAILS.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs">
              <p className="font-semibold text-amber-200">Admissions Desk</p>
              <p className="text-amber-100/70 mt-0.5">
                Monday – Saturday: 8:30 AM – 5:30 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-amber-100/60 gap-4">
          <p>© 2026 {SCHOOL_DETAILS.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#E86A33] fill-[#E86A33]" />
            <span>for early learners in Chennai</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
