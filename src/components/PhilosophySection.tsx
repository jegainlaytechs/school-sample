import React, { useState } from 'react';
import { BookOpen, Gamepad2, Compass, Sprout, Sparkles } from 'lucide-react';
import { PHILOSOPHY, SCHOOL_DETAILS } from '../data/schoolConfig';

const philosophyIcons: Record<string, React.ElementType> = {
  BookOpen,
  Gamepad2,
  Compass,
  Sprout,
};

export const PhilosophySection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string>('learn');

  return (
    <section id="philosophy" className="py-16 md:py-24 bg-[#FAF5EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Core Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3D2314] tracking-tight">
            Learn • Play • Explore • Grow
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3D2314]/75 leading-relaxed font-normal">
            Our four-stage early educational philosophy guides every activity, environment design, and interaction at {SCHOOL_DETAILS.name}.
          </p>
        </div>

        {/* 4 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PHILOSOPHY.map((item) => {
            const IconComponent = philosophyIcons[item.iconName] || BookOpen;
            const isSelected = activeCard === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setActiveCard(item.id)}
                className={`cursor-pointer rounded-3xl p-8 transition-all duration-300 border ${
                  isSelected
                    ? `${item.bgColor} shadow-xl scale-[1.02] border-amber-400 ring-2 ring-amber-400/30`
                    : 'bg-white border-amber-900/10 hover:border-amber-300 hover:bg-amber-50/40 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#E86A33]">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-extrabold tracking-widest text-[#3D2314]/40 uppercase">
                    Pillar
                  </span>
                </div>

                <h3 className="text-2xl font-black tracking-wider text-[#3D2314] mb-1">
                  {item.title}
                </h3>

                <p className="text-xs font-bold text-[#E86A33] mb-4">
                  {item.tagline}
                </p>

                <p className="text-sm text-[#3D2314]/80 leading-relaxed font-normal">
                  {item.description}
                </p>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-2 text-xs font-bold text-[#3D2314]/70">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Click to Highlight</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
