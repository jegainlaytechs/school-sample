import React, { useState, useEffect } from 'react';
import { X, Calendar, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (message: string) => void;
  initialProgramTitle?: string;
}

export const EnquireModal: React.FC<EnquireModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
  initialProgramTitle,
}) => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    childAge: '',
    program: initialProgramTitle || 'Preschool Discoverers (2-3 Yrs)',
    preferredDate: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialProgramTitle) {
      setFormData((prev) => ({ ...prev, program: initialProgramTitle }));
    }
  }, [initialProgramTitle]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.childAge.trim()) {
      newErrors.childAge = "Child's age is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onClose();
    onShowToast(
      `Thank you! Your school visit enquiry for ${formData.parentName} has been noted.`
    );

    setFormData({
      parentName: '',
      phone: '',
      childAge: '',
      program: 'Preschool Discoverers (2-3 Yrs)',
      preferredDate: '',
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-900/10 p-6 sm:p-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-amber-900/10">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#E86A33] flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#3D2314]">
                    Book a School Visit
                  </h3>
                  <p className="text-xs text-[#3D2314]/70">
                    Experience VERUM campus in Chennai
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#3D2314] uppercase tracking-wider mb-1.5">
                  Parent Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Sundaram"
                  className={`w-full px-4 py-3 rounded-2xl bg-[#FAF5EE] border text-sm text-[#3D2314] focus:outline-none focus:ring-2 focus:ring-[#E86A33]/40 ${
                    errors.parentName ? 'border-red-500' : 'border-amber-900/15'
                  }`}
                />
                {errors.parentName && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.parentName}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3D2314] uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className={`w-full px-4 py-3 rounded-2xl bg-[#FAF5EE] border text-sm text-[#3D2314] focus:outline-none focus:ring-2 focus:ring-[#E86A33]/40 ${
                      errors.phone ? 'border-red-500' : 'border-amber-900/15'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3D2314] uppercase tracking-wider mb-1.5">
                    Child's Age <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    placeholder="e.g. 2 Years"
                    className={`w-full px-4 py-3 rounded-2xl bg-[#FAF5EE] border text-sm text-[#3D2314] focus:outline-none focus:ring-2 focus:ring-[#E86A33]/40 ${
                      errors.childAge ? 'border-red-500' : 'border-amber-900/15'
                    }`}
                  />
                  {errors.childAge && (
                    <p className="text-xs text-red-500 mt-1 font-semibold">
                      {errors.childAge}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3D2314] uppercase tracking-wider mb-1.5">
                  Program Category
                </label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAF5EE] border border-amber-900/15 text-sm text-[#3D2314] focus:outline-none focus:ring-2 focus:ring-[#E86A33]/40"
                >
                  <option value="Toddler Care (1.5 - 2 Yrs)">
                    Toddler Care (1.5 – 2 Years)
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

              <div>
                <label className="block text-xs font-bold text-[#3D2314] uppercase tracking-wider mb-1.5">
                  Preferred Visit Date (Optional)
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAF5EE] border border-amber-900/15 text-sm text-[#3D2314] focus:outline-none focus:ring-2 focus:ring-[#E86A33]/40"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#E86A33] hover:bg-[#D45823] text-white py-3.5 px-6 rounded-2xl font-extrabold text-sm shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Visit Booking</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#3D2314]/60">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant frontend confirmation notification.</span>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
