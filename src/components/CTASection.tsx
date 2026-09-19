import React from 'react';
import { Calendar, PhoneCall, Sparkles } from 'lucide-react';
import { SCHOOL_DETAILS } from '../data/schoolConfig';

interface CTASectionProps {
  onOpenEnquireModal: () => void;
  onContactClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onOpenEnquireModal,
  onContactClick,
}) => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#3D2314] via-[#52301C] to-[#3D2314] text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4 fill-amber-300" />
          <span>Begin the Adventure</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
          Ready to Begin Your Child's Journey?
        </h2>

        <p className="text-base sm:text-lg text-amber-100/90 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Come visit {SCHOOL_DETAILS.name} and discover a joyful place where early learning feels like creative play, safety is guaranteed, and every child flourishes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenEnquireModal}
            className="w-full sm:w-auto bg-[#E86A33] hover:bg-[#D45823] text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl shadow-orange-950/50 hover:shadow-2xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3"
          >
            <Calendar className="w-5 h-5" />
            <span>Book a School Visit</span>
          </button>

          <button
            onClick={onContactClick}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-2xl font-bold text-base transition-all flex items-center justify-center gap-2.5 backdrop-blur-xs"
          >
            <PhoneCall className="w-5 h-5 text-amber-300" />
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </section>
  );
};
