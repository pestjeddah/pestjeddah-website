# PestJeddah.com - موقع شركة الأسطورة لمكافحة الحشرات

موقع احترافي لشركة مكافحة الحشرات في جدة، مبني بتقنيات حديثة ومحسّن لمحركات البحث.

## 🌟 المميزات

- **دعم لغتين**: العربية (افتراضية) والإنجليزية
- **82+ صفحة**: محتوى شامل ومفصل
- **SEO محسّن**: Meta tags, Schema markup, Sitemap
- **تصميم متجاوب**: يعمل على جميع الأجهزة
- **أداء عالي**: Next.js 14 مع Static Generation
- **صور محسّنة**: 32 صورة بجودة عالية

## 📋 المحتوى

### الخدمات (8 خدمات)
- مكافحة الصراصير
- مكافحة بق الفراش
- مكافحة النمل الأبيض
- مكافحة النمل
- مكافحة القوارض
- مكافحة البعوض والذباب
- التعقيم والتطهير
- العقود السنوية

### القطاعات (3 قطاعات)
- القطاع السكني
- المطاعم والمقاهي
- القطاع التجاري

### مناطق جدة (12 حي)
- الحمراء، الروضة، الشاطئ، السلامة
- النعيم، المرجان، أبحر الشمالية، أبحر الجنوبية
- الحمدانية، العزيزية، البوادي، النسيم

### المدونة (3 مقالات)
- طرق الوقاية من الصراصير
- علامات وجود النمل الأبيض
- أفضل أوقات مكافحة البعوض

## 🚀 التقنيات المستخدمة

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Icons**: Lucide React
- **i18n**: next-intl
- **Forms**: React Hook Form + Zod
- **Notifications**: React Hot Toast

## 📦 التثبيت والتشغيل

### المتطلبات
- Node.js 18+ 
- npm أو yarn

### خطوات التشغيل

1. **استنساخ المشروع**
```bash
git clone https://github.com/pestjeddah/pestjeddah-website.git
cd pestjeddah-website
```

2. **تثبيت المكتبات**
```bash
npm install
```

3. **تشغيل في وضع التطوير**
```bash
npm run dev
```

4. **فتح المتصفح**
```
http://localhost:3000
```

### البناء للإنتاج

```bash
# بناء المشروع
npm run build

# تشغيل في وضع الإنتاج
npm start
```

## 📁 هيكل المشروع

```
pestjeddah-website/
├── app/                    # صفحات Next.js
│   ├── [locale]/          # صفحات متعددة اللغات
│   ├── api/               # API Routes
│   ├── config/            # إعدادات الموقع
│   └── globals.css        # أنماط عامة
├── components/            # مكونات React
│   ├── forms/            # نماذج الإدخال
│   ├── layout/           # مكونات التخطيط
│   ├── sections/         # أقسام الصفحات
│   ├── seo/              # مكونات SEO
│   └── ui/               # مكونات واجهة المستخدم
├── i18n/                 # ملفات الترجمة
├── lib/                  # مكتبات مساعدة
├── messages/             # ملفات اللغات
├── public/               # ملفات عامة وصور
└── middleware.ts         # Next.js middleware

```

## 🌍 اللغات

- **العربية** (افتراضية): `/`
- **الإنجليزية**: `/en`

التبديل بين اللغات يحافظ على نفس الصفحة.

## 🎨 التصميم

- تصميم نظيف واحترافي
- ألوان متناسقة
- خطوط عربية محلية (Tajawal)
- دعم RTL كامل للعربية
- تأثيرات حركية ناعمة

## 📈 SEO

- Meta tags محسنة لكل صفحة
- Schema.org markup (LocalBusiness, Service, Article, FAQPage)
- Sitemap.xml ديناميكي
- Robots.txt
- Open Graph tags
- Twitter Card tags
- Canonical URLs
- Breadcrumbs

## 📞 معلومات الاتصال

جميع معلومات الاتصال موجودة في:
```typescript
app/config/site.ts
```

قم بتحديث:
- رقم الهاتف
- رقم الواتساب  
- البريد الإلكتروني
- العنوان
- روابط وسائل التواصل

## 🔧 التخصيص

### تغيير الألوان
عدّل ملف `tailwind.config.ts`:
```typescript
colors: {
  primary: {...},
  secondary: {...}
}
```

### إضافة صفحة جديدة
```bash
app/[locale]/page-name/page.tsx
```

### إضافة خدمة جديدة
```bash
app/[locale]/services/service-name/page.tsx
```

## 📝 الترخيص

هذا المشروع ملك لشركة الأسطورة لمكافحة الحشرات.

## 🤝 المساهمة

للمساهمة في تطوير المشروع:
1. Fork المشروع
2. إنشاء فرع جديد (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push للفرع (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

## 📧 التواصل

- **الموقع**: [pestjeddah.com](https://pestjeddah.com)
- **GitHub**: [github.com/pestjeddah](https://github.com/pestjeddah)

---

**بُني بـ ❤️ في جدة**