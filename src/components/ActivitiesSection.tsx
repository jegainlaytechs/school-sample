import React from 'react';
import {
  Palette,
  BookMarked,
  Music2,
  Trophy,
  Leaf,
  Mic,
  Sparkle,
  PartyPopper,
  Sparkles,
} from 'lucide-react';
import { ACTIVITIES } from '../data/schoolConfig';

const activityIconMap: Record<string, React.ElementType> = {
  Palette,
  BookMarked,
  Music2,
  Trophy,
  Leaf,
  Mic,
  Sparkle,
  PartyPopper,
};

export const ActivitiesSection: React.FC = () => {
  return (
    <section id="activities" className="py-16 md:py-24 bg-[#FAF5EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Daily Engagements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3D2314] tracking-tight">
            Every Day is an Adventure
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3D2314]/75 leading-relaxed font-normal">
            From creative art studios to sensory water tables and story circles, every morning brings fresh excitement and hands-on discovery.
          </p>
        </div>

        {/* Activity Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACTIVITIES.map((activity) => {
            const IconComponent = activityIconMap[activity.iconName] || Palette;
            return (
              <div
                key={activity.id}
                className="group bg-white rounded-3xl overflow-hidden border border-amber-900/10 hover:border-[#E86A33]/40 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#E86A33] text-white shadow-xs">
                        {activity.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2.5 mb-2">
                      <IconComponent className="w-5 h-5 text-[#E86A33]" />
                      <h3 className="text-lg font-bold text-[#3D2314] group-hover:text-[#E86A33] transition-colors">
                        {activity.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#3D2314]/75 leading-relaxed font-normal">
                      {activity.description}
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
