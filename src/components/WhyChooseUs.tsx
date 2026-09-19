import React from 'react';
import {
  ShieldCheck,
  Puzzle,
  GraduationCap,
  Palette,
  HeartHandshake,
  Sparkles,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/schoolConfig';

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Puzzle,
  GraduationCap,
  Palette,
  HeartHandshake,
  Sparkles,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>The VERUM Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3D2314] tracking-tight">
            Why Choose VERUM?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3D2314]/75 leading-relaxed font-normal">
            We provide a warm, stimulating atmosphere where every child is inspired to discover their potential through structured play and caring guidance.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;
            return (
              <div
                key={item.id}
                className="group relative bg-[#FAF5EE]/70 hover:bg-white p-8 rounded-3xl border border-amber-900/10 hover:border-amber-300 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Badge */}
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-[#E86A33]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#3D2314] mb-3 group-hover:text-[#E86A33] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#3D2314]/80 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-amber-900/5 flex items-center justify-between">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold border ${item.badgeColor}`}
                  >
                    Core Promise
                  </span>
                  <div className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-150 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
