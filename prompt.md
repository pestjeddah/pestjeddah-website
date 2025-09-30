You are a senior full-stack engineer. Build a production-ready local-SEO website for “pestjeddah.com” (Brand: “شركة الأسطورة”) targeting Arabic (ar-SA, RTL) as default and English (en-SA) as secondary.

Tech & Setup
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui + lucide-react
- next-intl (or next-intl-like) i18n with default locale ar, secondary en; generate hreflang tags (ar-SA/en-SA)
- ESLint + Prettier; absolute imports; SEO defaults via next/metadata
- Create `public/images` usage hooks; DO NOT fetch external images
- Sitemap.xml, robots.txt, OG/Twitter meta; favicons
- Performance: image optimization (next/image), lazy loading, prefetching; LCP target <2.5s

Global UI
- Sticky top bar: phone `tel:` and `WhatsApp` button
- Header nav (ar/en): Home, Services, Sectors, Areas, Offers & Contracts, Blog, Contact
- Footer with NAP (Name/Phone/Address/Hours), quick links, WhatsApp CTA, mini-map embed

Pages & Routes (app/)
- /(ar default), /en
- Home: hero with headline “شركة مكافحة حشرات بجدة — خدمة فورية 24/7”, primary CTA (Call/WhatsApp), trust badges (license placeholder), service tiles (Cockroaches, Bed Bugs, Termites, Ants, Rodents, Mosquitoes/Flies, Fumigation/Disinfection, Annual Contracts), process steps, reviews slider, FAQ (schema)
- /services (hub) + child routes:
  /services/cockroach-control-jeddah
  /services/bed-bugs-treatment-jeddah
  /services/termites-control-jeddah
  /services/ants-control-jeddah
  /services/rodents-control-jeddah
  /services/mosquitoes-flies-control-jeddah
  /services/fumigation-disinfection
  /services/annual-contracts
- /sectors: Residential, Restaurants, Hotels, Warehouses/Factories, Healthcare, Schools
- /jeddah (areas hub) + static area pages:
  al-hamra, al-shati, al-rawdah, al-salama, al-naeem, al-murjan, obhur-north, obhur-south, al-hamdaniyah, al-aziziyah, al-bawadi, al-naseem, bani-malik
  Each area page: short local intro, common pests in the area, mini-testimonials, CTA
- /offers-contracts: packages and annual visit plans
- /blog: basic MDX blog with categories (bed-bugs, termites, restaurants-haccp, rodents, seasonal)
- /contact: fast form (name, phone, area dropdown, pest type, message, file upload), success page; WhatsApp deeplink

Components
- <Hero>, <ServiceCard>, <ProcessSteps>, <ReviewCard>, <FAQ>, <ContactForm>, <WhatsAppFloat>, <AreaGrid>, <Breadcrumbs>, <SchemaInjector>
- WhatsAppFloat: bottom-right fixed, opens `https://wa.me/<PHONE>?text=<prefill>`
- Area dropdown options: the areas listed above

Content & Copy (Arabic default; create JSON dictionaries for ar/en)
- Use concise, high-converting Arabic headings (RTL) with local modifiers: “بجدة”, “زيارات دورية”, “ضمان”
- Each service page must include: symptoms, our approach (inspection → plan → execution → follow-up), duration, post-visit tips, warranty, FAQs
- Insert placeholders for license number and certifications

SEO & Schema
- JSON-LD per page:
  - Home: LocalBusiness with `name: "شركة الأسطورة"`, `telephone`, `addressLocality: "Jeddah"`, `areaServed: ["Jeddah", "Al Hamra", ...]`, `openingHoursSpecification`
  - Service pages: Service schema + FAQPage
  - Blog posts: Article
- Title/Meta templates:
  - Home (ar): "شركة مكافحة حشرات بجدة — شركة الأسطورة | رش مبيدات مرخّص 24/7"
  - Service (ar): "مكافحة <pest> بجدة | فحص وعلاج مضمون — شركة الأسطورة"
  - Area (ar): "مكافحة حشرات بحي <area> جدة — استجابة سريعة وعقود وقاية"
- Generate canonical URLs; add breadcrumbs schema

Images
- Use only `/public/images`; create examples in code with semantic filenames:
  - `jeddah-hero-team.webp`, `bed-bugs-treatment-room.webp`, `termites-inspection-floor.webp`, `cockroach-gel-bait-application.webp`
- Always include descriptive `alt` in Arabic with local context

Forms & Integrations
- ContactForm with zod validation; POST API route that:
  - sends email via placeholder function (to be wired later)
  - logs lead to console
  - redirects to a Thank-You page with call/WhatsApp CTA
- Add WhatsApp prefill text including page context (service/area) and source UTM if present

Style
- Clean, modern, spacious; grid layout; rounded-2xl cards; soft shadows
- Arabic fonts (e.g., "Tajawal", fallback system) loaded locally; ensure proper RTL

Testing & DX
- Include sample unit tests for components (vitest + testing-library)
- Add lighthouse config and a README with deployment steps

Deliverables
- Full Next.js project structure with pages, components, content dictionaries (ar/en), sample images, JSON-LD injectors, and working forms (mocked)
- Ship with production build passing `next build` and no type errors

Now scaffold the project and write all necessary files. Replace all PHONE/ADDRESS placeholders with variables at `app/config/site.ts` to be edited later.