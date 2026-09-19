import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Navigation,
  Sparkles,
} from 'lucide-react';
import { SCHOOL_DETAILS } from '../data/schoolConfig';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FAF5EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3D2314] tracking-tight">
            We’d Love to Welcome You
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3D2314]/75 leading-relaxed font-normal">
            Have questions or want to tour our campus in Chennai? Contact us directly or visit our school location below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Direct Contact Details Card */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-amber-900/10 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-extrabold text-[#3D2314] mb-8 pb-4 border-b border-amber-900/10">
                Contact Details
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-amber-100 text-[#E86A33] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#3D2314]/50 uppercase tracking-wider">
                      School Address
                    </h4>
                    <p className="text-sm sm:text-base font-semibold text-[#3D2314] mt-0.5">
                      {SCHOOL_DETAILS.address}
                    </p>
                  </div>
                </div>

                {/* Mobile */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-orange-100 text-[#E86A33] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#3D2314]/50 uppercase tracking-wider">
                      Phone Number
                    </h4>
                    <a
                      href={`tel:${SCHOOL_DETAILS.mobile}`}
                      className="text-sm sm:text-base font-bold text-[#E86A33] hover:underline mt-0.5 inline-block"
                    >
                      {SCHOOL_DETAILS.mobile}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#3D2314]/50 uppercase tracking-wider">
                      Email Address
                    </h4>
                    <a
                      href={`mailto:${SCHOOL_DETAILS.email}`}
                      className="text-sm sm:text-base font-semibold text-[#3D2314] hover:text-[#E86A33] hover:underline mt-0.5 inline-block"
                    >
                      {SCHOOL_DETAILS.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 mt-8 border-t border-amber-900/10 grid grid-cols-2 gap-3">
              <a
                href={SCHOOL_DETAILS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-50 hover:bg-pink-100 text-pink-700 py-3 px-4 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 border border-pink-200 transition-colors shadow-xs"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram</span>
              </a>

              <a
                href={SCHOOL_DETAILS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 py-3 px-4 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 border border-emerald-200 transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Google Map Card */}
          <div className="bg-white rounded-3xl overflow-hidden border border-amber-900/10 shadow-md flex flex-col justify-between">
            <div className="relative flex-1 min-h-[280px] bg-amber-50">
              <iframe
                title={`${SCHOOL_DETAILS.name} Preschool Location Map`}
                src={SCHOOL_DETAILS.mapEmbedUrl}
                className="w-full h-full border-0 min-h-[280px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-6 bg-white border-t border-amber-900/10 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-[#3D2314]">
                  School Campus Location
                </h4>
                <p className="text-xs text-[#3D2314]/60">
                  Interactive Google Maps view
                </p>
              </div>
              <a
                href={SCHOOL_DETAILS.mapDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E86A33] hover:bg-[#D45823] text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
