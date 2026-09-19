import React from 'react';
import { Clock, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';
import { PROGRAMS } from '../data/schoolConfig';

interface ProgramsSectionProps {
  onContactClick: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onContactClick,
}) => {
  return (
    <section id="programs" className="py-16 md:py-24 bg-[#FAF5EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-[#E86A33] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curriculum Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3D2314] tracking-tight">
            Nurturing Programs for Every Age
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3D2314]/75 leading-relaxed">
            Thoughtfully structured age-appropriate learning tracks designed to foster cognitive growth, emotional resilience, and lifelong curiosity.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="group bg-white rounded-3xl overflow-hidden border border-amber-900/10 hover:border-[#E86A33]/50 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Header with Age Pill Overlay */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Age Group Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-extrabold shadow-md ${prog.colorBadge}`}
                    >
                      Age: {prog.ageGroup}
                    </span>
                  </div>

                  {/* Timing Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/90 text-xs font-medium bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-amber-300" />
                    <span>{prog.timing}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-2xl font-extrabold text-[#3D2314] mb-3 group-hover:text-[#E86A33] transition-colors">
                    {prog.title}
                  </h3>

                  <p className="text-sm text-[#3D2314]/80 leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6 bg-amber-50/50 p-4 rounded-2xl border border-amber-900/5">
                    <p className="text-xs font-bold text-[#3D2314]/60 uppercase tracking-wider mb-2">
                      Key Program Highlights:
                    </p>
                    {prog.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs font-semibold text-[#3D2314]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#E86A33] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={onContactClick}
                  className="w-full bg-[#FAF5EE] hover:bg-[#E86A33] text-[#3D2314] hover:text-white py-3 px-4 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-md"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Contact for Program Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
