import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Navigation,
  Send,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { SCHOOL_DETAILS } from '../data/schoolConfig';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

interface ContactSectionProps {
  onShowToast: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onShowToast,
}) => {
  const [formData, setFormData] = useState({
    parentName: '',
    phoneNumber: '',
    childAge: '',
    programInterest: 'Preschool Discoverers (2-3 Yrs)',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};
    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent name is required';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    }
    if (!formData.childAge.trim()) {
      newErrors.childAge = "Child's age is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFormData({
      parentName: '',
      phoneNumber: '',
      childAge: '',
      programInterest: 'Preschool Discoverers (2-3 Yrs)',
      message: '',
    });
    onShowToast('Thank you! Your enquiry has been noted.');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FAF5EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3D2314] tracking-tight">
            We’d Love to Welcome You
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3D2314]/75 leading-relaxed font-normal">
            Have questions or want to tour our campus in Chennai? Drop us a message or contact us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-amber-900/10 shadow-md">
              <h3 className="text-xl font-extrabold text-[#3D2314] mb-6 flex items-center gap-2">
                <span>Contact Details</span>
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-amber-100 text-[#E86A33] flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#3D2314]/50 uppercase tracking-wider">
                      School Address
                    </h4>
                    <p className="text-sm font-semibold text-[#3D2314] mt-0.5">
                      {SCHOOL_DETAILS.address}
                    </p>
                  </div>
                </div>

                {/* Mobile */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#E86A33] flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#3D2314]/50 uppercase tracking-wider">
                      Phone Number
                    </h4>
                    <a
                      href={`tel:${SCHOOL_DETAILS.mobile}`}
                      className="text-sm font-semibold text-[#E86A33] hover:underline mt-0.5 inline-block"
                    >
                      {SCHOOL_DETAILS.mobile}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#3D2314]/50 uppercase tracking-wider">
                      Email Address
                    </h4>
                    <a
                      href={`mailto:${SCHOOL_DETAILS.email}`}
                      className="text-sm font-semibold text-[#3D2314] hover:text-[#E86A33] hover:underline mt-0.5 inline-block"
                    >
                      {SCHOOL_DETAILS.email}
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-amber-900/10 flex items-center gap-3">
                  <a
                    href={SCHOOL_DETAILS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-pink-50 hover:bg-pink-100 text-pink-700 py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border border-pink-200 transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href={SCHOOL_DETAILS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border border-emerald-200 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Card */}
            <div className="bg-white rounded-3xl overflow-hidden border border-amber-900/10 shadow-md">
              <div className="relative h-48 bg-amber-50">
                <iframe
                  title={`${SCHOOL_DETAILS.name} Preschool Location Map`}
                  src={SCHOOL_DETAILS.mapEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-4 bg-white flex items-center justify-between">
                <span className="text-xs font-bold text-[#3D2314]">
                  Campus Location Preview
                </span>
                <a
                  href={SCHOOL_DETAILS.mapDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#E86A33] hover:underline flex items-center gap-1"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Frontend Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-amber-900/10 shadow-md">
            <div className="mb-8">
              <h3 className="text-2xl font-extrabold text-[#3D2314]">
                Admissions & General Enquiry
              </h3>
              <p className="text-sm text-[#3D2314]/70 mt-1">
                Fill out the details below to schedule a visit or ask any questions.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Parent Name */}
              <div>
                <label className="block text-xs font-bold text-[#3D2314] uppercase tracking-wider mb-2">
                  Parent Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="e.g. Priya Sundaram"
                  className={`w-full px-4 py-3.5 rounded-2xl bg-[#FAF5EE] border text-sm text-[#3D2314] focus:outline-none focus:ring-2 focus:ring-[#E86A33]/40 transition-all ${
                    errors.parentName ? 'border-red-500' : 'border-amber-900/15'
                  }`}
                />
                {errors.parentName && (
                  <p className="text-xs text-red-500 font-semibold mt-1">
                    {errors.parentName}
                  </p>
                )}
              </div>

              {/* Phone & Child Age Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#3D2314] uppercase tracking-wider mb-2">
                    Mobile Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className={`w-full px-4 py-3.5 rounded-2xl bg-[#FAF5EE] border text-sm text-[#3D2314] focus:outline-none focus:ring-2 focus:ring-[#E86A33]/40 transition-all ${
                      errors.phoneNumber
                        ? 'border-red-500'
                        : 'border-amber-900/15'
                    }`}
                  />
                  {errors.phoneNumber && (
                    <p className="text-xs text-red-500 font-semibold mt-1">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3D2314] uppercase tracking-wider mb-2">
                    Child's Age (Years) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    placeholder="e.g. 2.5 Years"
                    className={`w-full px-4 py-3.5 rounded-2xl bg-[#FAF5EE] border text-sm text-[#3D2314] focus:outline-none focus:ring-2 focus:ring-[#E86A33]/40 transition-all ${
                      errors.childAge ? 'border-red-500' : 'border-amber-900/15'
                    }`}
                  />
                  {errors.childAge && (
                    <p className="text-xs text-red-500 font-semibold mt-1">
                      {errors.childAge}
                    </p>
                  )}
                </div>
              </div>

              {/* Program Interest Selection */}
              <div>
                <label className="block text-xs font-bold text-[#3D2314] uppercase tracking-wider mb-2">
                  Program of Interest
                </label>
                <select
                  name="programInterest"
                  value={formData.programInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF5EE] border border-amber-900/15 text-sm text-[#3D2314] focus:outline-none focus:ring-2 focus:ring-[#E86A33]/40 transition-all"
                >
                  <option value="Toddler Care (1.5 - 2 Yrs)">
                    Toddler Care & Play (1.5 – 2 Years)
                  </option>
                  <option value="Preschool Discoverers (2 - 3 Yrs)">
                    Preschool Discoverers (2 – 3 Years)
                  </option>
                  <option value="Junior Kindergarten (3 - 4 Yrs)">
                    Junior Kindergarten (3 – 4 Years)
                  </option>
                  <option value="Senior Pre-K Explorers (4 - 5 Yrs)">
                    Senior Pre-K Explorers (4 – 5 Years)
                  </option>
                  <option value="After School Enrichment (5+ Yrs)">
                    After School Enrichment (5+ Years)
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-[#3D2314] uppercase tracking-wider mb-2">
                  Message or Specific Inquiry
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us any preferred visit date or questions about our facilities..."
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF5EE] border border-amber-900/15 text-sm text-[#3D2314] focus:outline-none focus:ring-2 focus:ring-[#E86A33]/40 transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#E86A33] hover:bg-[#D45823] text-white py-4 px-6 rounded-2xl font-extrabold text-base shadow-lg shadow-orange-500/25 hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span>Submit Enquiry</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-[#3D2314]/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant confirmation notification.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
