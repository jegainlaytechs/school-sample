import React from 'react';
import {
  Monitor,
  Shield,
  Boxes,
  Music,
  Home,
  Sun,
  BookOpenCheck,
  Brush,
  Sparkles,
} from 'lucide-react';
import { FACILITIES, SCHOOL_DETAILS } from '../data/schoolConfig';

const facilityIconMap: Record<string, React.ElementType> = {
  Monitor,
  Shield,
  Boxes,
  Music,
  Home,
  Sun,
  BookOpenCheck,
  Brush,
};

export const FacilitiesSection: React.FC = () => {
  return (
    <section id="facilities" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Infrastructure & Safety</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3D2314] tracking-tight">
            World-Class Facilities for Little Explorers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3D2314]/75 leading-relaxed font-normal">
            Every square foot of {SCHOOL_DETAILS.name} is meticulously designed for maximum safety, sensory engagement, hygiene, and freedom of expression.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES.map((facility) => {
            const IconComponent = facilityIconMap[facility.iconName] || Shield;
            return (
              <div
                key={facility.id}
                className="group bg-[#FAF5EE]/60 hover:bg-white rounded-3xl overflow-hidden border border-amber-900/10 hover:border-amber-300 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image with Tag Overlay */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-white/95 backdrop-blur-xs text-[#3D2314] shadow-xs">
                        {facility.badge}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#E86A33] flex items-center justify-center shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-[#3D2314] group-hover:text-[#E86A33] transition-colors">
                        {facility.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#3D2314]/75 leading-relaxed font-normal">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
