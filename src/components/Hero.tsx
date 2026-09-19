import React from 'react';
import {
  Calendar,
  Compass,
  ShieldCheck,
  Smile,
  GraduationCap,
  Sparkles,
  Star,
  Cloud,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { SCHOOL_DETAILS } from '../data/schoolConfig';

interface HeroProps {
  onOpenEnquireModal: () => void;
  onExploreProgramsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenEnquireModal,
  onExploreProgramsClick,
}) => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#FAF5EE] to-[#F3E8DB]/40"
    >
      {/* Decorative Floating Shapes */}
      <div className="absolute top-20 left-[5%] text-amber-300/60 animate-float-slow pointer-events-none">
        <Star className="w-8 h-8 fill-amber-300/40" />
      </div>
      <div className="absolute top-40 right-[8%] text-sky-300/60 animate-float-medium pointer-events-none">
        <Cloud className="w-12 h-12 fill-sky-200/50" />
      </div>
      <div className="absolute bottom-16 left-[10%] text-orange-300/60 animate-float-medium pointer-events-none">
        <Sparkles className="w-10 h-10 fill-orange-200/40" />
      </div>
      <div className="absolute bottom-28 right-[12%] text-emerald-300/60 animate-float-slow pointer-events-none">
        <Star className="w-6 h-6 fill-emerald-200/50" />
      </div>

      {/* Subtle Pastel Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-[#E86A33] text-xs sm:text-sm font-bold tracking-wide mb-6 shadow-xs">
              <Sparkles className="w-4 h-4 fill-[#E86A33]" />
              <span>Admissions Open for Academic Year 2026–27</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#3D2314] tracking-tight leading-[1.15] mb-6">
              Where Little Minds{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E86A33] via-amber-600 to-[#E86A33] underline decoration-amber-300/60 decoration-wavy decoration-2">
                Begin Big Journeys
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-[#3D2314]/80 max-w-2xl font-normal leading-relaxed mb-8">
              {SCHOOL_DETAILS.subTagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenEnquireModal}
                className="w-full sm:w-auto bg-[#E86A33] hover:bg-[#D45823] text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl shadow-orange-500/25 hover:shadow-2xl hover:shadow-orange-500/35 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 group"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Book a School Visit</span>
              </button>

              <button
                onClick={onExploreProgramsClick}
                className="w-full sm:w-auto bg-white hover:bg-amber-50/80 text-[#3D2314] border-2 border-[#3D2314]/15 px-7 py-3.5 rounded-2xl font-bold text-base shadow-sm hover:border-[#E86A33] hover:text-[#E86A33] transition-all flex items-center justify-center gap-2.5"
              >
                <Compass className="w-5 h-5" />
                <span>Explore Programs</span>
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-amber-900/10 w-full grid grid-cols-3 gap-2 sm:gap-4">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 text-center sm:text-left">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#3D2314]">
                  Safe Learning Environment
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 text-center sm:text-left">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-[#E86A33] shrink-0">
                  <Smile className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#3D2314]">
                  Play-Based Learning
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 text-center sm:text-left">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#3D2314]">
                  Experienced Educators
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Feature Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-amber-300/40 via-orange-300/40 to-sky-300/40 blur-lg transform -rotate-1" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=80"
                  alt="Happy children learning and playing at VERUM Preschool"
                  className="w-full h-[400px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Glass Floating Overlay Card 1: Happy Learners */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-white/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-extrabold text-sm shadow-md">
                    10+
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#3D2314]">
                      Years of Excellence
                    </p>
                    <p className="text-[10px] text-[#3D2314]/70 font-medium">
                      In Early Education
                    </p>
                  </div>
                </div>

                {/* Glass Floating Overlay Card 2: Parent Rating */}
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-white/60 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                      alt="Parent"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                      alt="Parent"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
                      alt="Parent"
                    />
                  </div>
                  <div>
                    <div className="flex items-center text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-[11px] font-bold text-[#3D2314]">
                      500+ Happy Families
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
