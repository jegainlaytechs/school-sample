import React from 'react';
import {
  CalendarCheck,
  Smile,
  Award,
  Heart,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { STATS, SCHOOL_DETAILS } from '../data/schoolConfig';

const statIconMap: Record<string, React.ElementType> = {
  CalendarCheck,
  Smile,
  Award,
  Heart,
};

interface AboutSectionProps {
  onOpenEnquireModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenEnquireModal,
}) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Card Offset */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-amber-100 rounded-3xl -z-10 transform -rotate-3" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-orange-100 rounded-3xl -z-10 transform rotate-3" />

              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80"
                  alt="Children engaging in group learning activities at VERUM"
                  className="w-full h-[380px] sm:h-[440px] object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-[#3D2314] text-white p-5 rounded-2xl shadow-xl border border-amber-500/20 backdrop-blur-md max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E86A33] flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 fill-white text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-amber-200">
                      Child First Approach
                    </p>
                    <p className="text-sm font-bold text-white">
                      Safe, Nurturing & Inclusive
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 w-max">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>About {SCHOOL_DETAILS.name} Preschool</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3D2314] tracking-tight leading-tight mb-6">
              Growing Curious Minds,{' '}
              <span className="text-[#E86A33]">One Day at a Time</span>
            </h2>

            <p className="text-base sm:text-lg text-[#3D2314]/80 leading-relaxed mb-6 font-normal">
              At <strong className="text-[#3D2314]">{SCHOOL_DETAILS.name}</strong>, we focus on creating a safe, engaging, and deeply nurturing environment where young children develop through guided play, creative discovery, spatial exploration, and meaningful social interaction.
            </p>

            <p className="text-sm sm:text-base text-[#3D2314]/70 leading-relaxed mb-8">
              We believe every child is born with natural wonder. Our early educators treat each milestone with dedication, helping little learners lay strong cognitive, physical, and emotional foundations for life.
            </p>

            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2.5 text-sm font-bold text-[#3D2314]">
                <CheckCircle2 className="w-5 h-5 text-[#E86A33]" />
                <span>Low Teacher-Student Ratio</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-bold text-[#3D2314]">
                <CheckCircle2 className="w-5 h-5 text-[#E86A33]" />
                <span>Child-Proofed Safety Campus</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-bold text-[#3D2314]">
                <CheckCircle2 className="w-5 h-5 text-[#E86A33]" />
                <span>Certified Early Educators</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-bold text-[#3D2314]">
                <CheckCircle2 className="w-5 h-5 text-[#E86A33]" />
                <span>Holistic Sensory Development</span>
              </div>
            </div>

            {/* Action CTA */}
            <div>
              <button
                onClick={onOpenEnquireModal}
                className="bg-[#E86A33] hover:bg-[#D45823] text-white px-7 py-3.5 rounded-2xl font-bold text-sm shadow-md hover:shadow-xl transition-all"
              >
                Schedule a Personal Tour
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Cards Grid */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat) => {
            const IconComponent = statIconMap[stat.iconName] || Heart;
            return (
              <div
                key={stat.id}
                className="bg-[#FAF5EE] p-6 rounded-3xl border border-amber-900/10 text-center hover:bg-amber-50/80 transition-colors shadow-xs"
              >
                <div className="w-12 h-12 mx-auto rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#E86A33] mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#3D2314] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-[#E86A33] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#3D2314]/65 font-medium">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
