import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS, SCHOOL_DETAILS } from '../data/schoolConfig';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Parent Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3D2314] tracking-tight">
            Loved by Parents, Adored by Children
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3D2314]/75 leading-relaxed font-normal">
            Read heartwarming stories from parents who entrusted their children’s early learning journeys to {SCHOOL_DETAILS.name}.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF5EE]/70 p-7 rounded-3xl border border-amber-900/10 hover:border-amber-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-amber-300/60" />
                </div>

                {/* Quote text */}
                <p className="text-xs sm:text-sm text-[#3D2314]/85 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-amber-900/10 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.parentName}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-amber-300 shrink-0"
                />
                <div>
                  <h4 className="text-xs font-bold text-[#3D2314]">
                    {item.parentName}
                  </h4>
                  <p className="text-[11px] font-semibold text-[#E86A33]">
                    {item.relation}
                  </p>
                  <p className="text-[10px] text-[#3D2314]/50">
                    {item.childProgram}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
