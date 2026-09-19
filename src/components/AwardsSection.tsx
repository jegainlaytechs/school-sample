import React from 'react';
import { Trophy, Award as AwardIcon, Medal, Crown, Sparkles } from 'lucide-react';
import { AWARDS } from '../data/schoolConfig';

const awardIconMap: Record<string, React.ElementType> = {
  Trophy,
  Award: AwardIcon,
  Medal,
  Crown,
};

export const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="py-16 md:py-24 bg-[#FAF5EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Honors & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3D2314] tracking-tight">
            Celebrating Our Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3D2314]/75 leading-relaxed font-normal">
            We are deeply honored to be recognized by early childhood education boards and parent communities.
          </p>
        </div>

        {/* Award Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AWARDS.map((item) => {
            const IconComponent = awardIconMap[item.iconName] || Trophy;
            return (
              <div
                key={item.id}
                className="bg-white p-8 rounded-3xl border border-amber-900/10 hover:border-amber-400 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-400 text-white flex items-center justify-center shadow-md shadow-amber-500/20">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-800">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-[#3D2314] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs font-bold text-[#E86A33] mb-4">
                    {item.organization}
                  </p>

                  <p className="text-xs sm:text-sm text-[#3D2314]/75 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-amber-900/5 text-[11px] font-semibold text-[#3D2314]/50">
                  Editable Placeholder Award
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
