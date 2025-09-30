'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Upload, X } from 'lucide-react';
import toast from 'react-hot-toast';

import { siteConfig } from '@/app/config/site';
import { createWhatsAppLink, cn, isRTL } from '@/lib/utils';

const createContactSchema = (isArabic: boolean) => z.object({
  name: z.string()
    .min(2, isArabic ? 'الاسم يجب أن يكون أكثر من حرفين' : 'Name must be at least 2 characters')
    .max(50, isArabic ? 'الاسم طويل جداً' : 'Name is too long'),
  phone: z.string()
    .min(10, isArabic ? 'رقم الهاتف غير صحيح' : 'Invalid phone number')
    .regex(/^[\d+\-\s()]+$/, isArabic ? 'رقم الهاتف غير صحيح' : 'Invalid phone number'),
  area: z.string()
    .min(1, isArabic ? 'يرجى اختيار المنطقة' : 'Please select area'),
  pestType: z.string()
    .min(1, isArabic ? 'يرجى اختيار نوع المشكلة' : 'Please select problem type'),
  message: z.string()
    .min(10, isArabic ? 'الرسالة قصيرة جداً' : 'Message is too short')
    .max(500, isArabic ? 'الرسالة طويلة جداً' : 'Message is too long'),
  file: z.any().optional()
});

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const rtl = isRTL(locale);

  const contactSchema = createContactSchema(isArabic);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const areas = [
    { value: 'al-hamra', label: isArabic ? 'الحمراء' : 'Al Hamra' },
    { value: 'al-shati', label: isArabic ? 'الشاطئ' : 'Al Shati' },
    { value: 'al-rawdah', label: isArabic ? 'الروضة' : 'Al Rawdah' },
    { value: 'al-salama', label: isArabic ? 'السلامة' : 'Al Salama' },
    { value: 'al-naeem', label: isArabic ? 'النعيم' : 'Al Naeem' },
    { value: 'al-murjan', label: isArabic ? 'المرجان' : 'Al Murjan' },
    { value: 'obhur-north', label: isArabic ? 'أبحر الشمالية' : 'Obhur North' },
    { value: 'obhur-south', label: isArabic ? 'أبحر الجنوبية' : 'Obhur South' },
    { value: 'al-hamdaniyah', label: isArabic ? 'الحمدانية' : 'Al Hamdaniyah' },
    { value: 'al-aziziyah', label: isArabic ? 'العزيزية' : 'Al Aziziyah' },
    { value: 'al-bawadi', label: isArabic ? 'البوادي' : 'Al Bawadi' },
    { value: 'al-naseem', label: isArabic ? 'النسيم' : 'Al Naseem' },
    { value: 'bani-malik', label: isArabic ? 'بني مالك' : 'Bani Malik' },
    { value: 'other', label: isArabic ? 'أخرى' : 'Other' }
  ];

  const pestTypes = [
    { value: 'cockroaches', label: t('contact.pestTypes.cockroaches') },
    { value: 'bedbugs', label: t('contact.pestTypes.bedbugs') },
    { value: 'termites', label: t('contact.pestTypes.termites') },
    { value: 'ants', label: t('contact.pestTypes.ants') },
    { value: 'rodents', label: t('contact.pestTypes.rodents') },
    { value: 'mosquitoes', label: t('contact.pestTypes.mosquitoes') },
    { value: 'other', label: t('contact.pestTypes.other') }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error(isArabic ? 'حجم الملف كبير جداً' : 'File size too large');
        return;
      }
      
      // Check file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        toast.error(isArabic ? 'نوع الملف غير مدعوم' : 'File type not supported');
        return;
      }
      
      setUploadedFile(file);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Create FormData for file upload
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      
      if (uploadedFile) {
        formData.append('file', uploadedFile);
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast.success(t('contact.form.success'));
        reset();
        setUploadedFile(null);
        
        // Redirect to thank you page or show success state
        // Optional: redirect to WhatsApp with prefilled message
        const whatsappMessage = isArabic 
          ? `مرحبا، لقد أرسلت طلب عبر الموقع. الاسم: ${data.name}, المنطقة: ${data.area}, المشكلة: ${data.pestType}`
          : `Hello, I submitted a request through the website. Name: ${data.name}, Area: ${data.area}, Problem: ${data.pestType}`;
        
        setTimeout(() => {
          window.open(createWhatsAppLink(siteConfig.whatsapp, whatsappMessage), '_blank');
        }, 2000);
        
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast.error(isArabic ? 'حدث خطأ، يرجى المحاولة مرة أخرى' : 'An error occurred, please try again');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t('contact.form.name')} *
        </label>
        <input
          type="text"
          {...register('name')}
          className={cn(
            "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent",
            errors.name && "border-red-500",
            rtl && "text-right"
          )}
          placeholder={isArabic ? 'أدخل اسمك الكامل' : 'Enter your full name'}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t('contact.form.phone')} *
        </label>
        <input
          type="tel"
          {...register('phone')}
          className={cn(
            "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent",
            errors.phone && "border-red-500"
          )}
          placeholder={isArabic ? '05xxxxxxxx' : '+966 5x xxx xxxx'}
          dir="ltr"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      {/* Area and Pest Type */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.area')} *
          </label>
          <select
            {...register('area')}
            className={cn(
              "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent",
              errors.area && "border-red-500",
              rtl && "text-right"
            )}
          >
            <option value="">{isArabic ? 'اختر المنطقة' : 'Select Area'}</option>
            {areas.map((area) => (
              <option key={area.value} value={area.value}>
                {area.label}
              </option>
            ))}
          </select>
          {errors.area && (
            <p className="mt-1 text-sm text-red-600">{errors.area.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.pestType')} *
          </label>
          <select
            {...register('pestType')}
            className={cn(
              "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent",
              errors.pestType && "border-red-500",
              rtl && "text-right"
            )}
          >
            <option value="">{isArabic ? 'اختر نوع المشكلة' : 'Select Problem Type'}</option>
            {pestTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {errors.pestType && (
            <p className="mt-1 text-sm text-red-600">{errors.pestType.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t('contact.form.message')} *
        </label>
        <textarea
          {...register('message')}
          rows={4}
          className={cn(
            "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none",
            errors.message && "border-red-500",
            rtl && "text-right"
          )}
          placeholder={isArabic ? 'صف المشكلة بالتفصيل...' : 'Describe the problem in detail...'}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t('contact.form.file')}
        </label>
        
        {!uploadedFile ? (
          <label className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors">
            <Upload className="mx-auto text-gray-400 mb-2" size={32} />
            <span className="text-sm text-gray-600">
              {isArabic ? 'اضغط لرفع صورة (اختياري)' : 'Click to upload image (optional)'}
            </span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        ) : (
          <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-between">
            <span className="text-sm text-gray-700">{uploadedFile.name}</span>
            <button
              type="button"
              onClick={removeFile}
              className="text-red-500 hover:text-red-700"
            >
              <X size={20} />
            </button>
          </div>
        )}
        
        <p className="mt-1 text-xs text-gray-500">
          {isArabic ? 'الحد الأقصى: 5 ميجابايت' : 'Maximum: 5MB'}
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full btn-primary py-4 text-lg font-semibold rounded-lg transition-all duration-300",
          "flex items-center justify-center gap-3",
          isSubmitting && "opacity-50 cursor-not-allowed"
        )}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>{isArabic ? 'جاري الإرسال...' : 'Sending...'}</span>
          </>
        ) : (
          <>
            <Send size={20} />
            <span>{t('contact.form.submit')}</span>
          </>
        )}
      </button>

      {/* Privacy Notice */}
      <p className="text-xs text-gray-500 text-center">
        {isArabic 
          ? 'بإرسال هذا النموذج، توافق على معالجة بياناتك للرد على استفسارك'
          : 'By submitting this form, you agree to the processing of your data to respond to your inquiry'
        }
      </p>
    </form>
  );
}



