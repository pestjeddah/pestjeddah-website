# GEO Metadata & JSON-LD Implementation Guide

## Overview
Complete implementation of geographic metadata and structured data for maximum local SEO impact on pestjeddah.com.

## Architecture

### 1. EXIF/XMP Metadata (File Level)
Located in: `scripts/exif/`

- **Purpose:** Embed GPS coordinates and location keywords directly in media files
- **Benefit:** Google Images, Maps, and AI Overviews can extract location from files
- **Coverage:** All images and videos

### 2. JSON-LD Structured Data (Page Level)
Located in: `lib/jsonld.ts` + `components/seo/SchemaInjector.tsx`

- **Purpose:** Provide rich structured data about images, videos, and services
- **Benefit:** Enhanced rich results, local pack rankings, AI Overview citations
- **Coverage:** Key service and area pages

## Quick Start

### Step 1: Tag Your Media Files
```bash
# Tag all images with GEO metadata
npm run geo:images

# Verify metadata was written
npm run geo:verify
```

### Step 2: Add JSON-LD to Pages

**Example: Service Page with Image Schema**
```tsx
import { SchemaInjector } from '@/components/seo/SchemaInjector';

export default function CockroachControlPage() {
  return (
    <>
      {/* Existing service schema */}
      <SchemaInjector type="service" data={{
        title: "مكافحة الصراصير في جدة",
        description: "خدمة متخصصة...",
        serviceType: "Cockroach Control"
      }} />
      
      {/* NEW: Image schema with GEO */}
      <SchemaInjector type="image" data={{
        url: "https://pestjeddah.com/images/Cockroach control Jeddah.jpg",
        caption: "مكافحة الصراصير في جدة - خدمة احترافية",
        lat: 21.4925,
        lon: 39.1776,
        width: 1200,
        height: 630
      }} />
      
      {/* Your page content */}
    </>
  );
}
```

## Implementation Examples

### 1. Service Pages

**Add Image Schema for Hero Image:**
```tsx
// app/[locale]/services/[service]/page.tsx

<SchemaInjector type="image" data={{
  url: "/images/Professional pest control.jpg",
  caption: isArabic 
    ? "مكافحة حشرات احترافية في جدة" 
    : "Professional pest control in Jeddah",
  lat: 21.4925,
  lon: 39.1776
}} />
```

### 2. Jeddah Area Pages

**Use LocalService Schema:**
```tsx
// app/[locale]/jeddah/al-hamra/page.tsx

<SchemaInjector type="localService" data={{
  areaName: "Al Hamra",
  areaNameAr: "الحمراء",
  serviceName: "Pest Control Services",
  serviceNameAr: "خدمات مكافحة الحشرات",
  serviceDescription: "Complete pest control coverage in Al Hamra district",
  lat: 21.5012,  // Al Hamra specific coords (add jitter)
  lon: 39.1823,
  image: "/images/Professional pest control.jpg"
}} />

{/* Also add image schema for the area image */}
<SchemaInjector type="image" data={{
  url: "/images/Professional pest control.jpg",
  caption: "مكافحة الحشرات في حي الحمراء",
  locationName: "Al Hamra, Jeddah",
  lat: 21.5012,
  lon: 39.1823
}} />
```

### 3. Blog Posts with Images

**Add Image Schema to Blog Posts:**
```tsx
// app/[locale]/blog/[id]/page.tsx

<SchemaInjector type="article" data={{
  title: "طرق الوقاية من الصراصير",
  description: "دليل شامل...",
  publishedAt: "2024-01-15",
  image: "/images/Cockroach control Jeddah.jpg"
}} />

<SchemaInjector type="image" data={{
  url: "/images/Cockroach control Jeddah.jpg",
  caption: "طرق الوقاية من الصراصير في المطبخ",
  representativeOfPage: true
}} />
```

### 4. Video Implementation (Future)

When you add videos:

**1. Tag the video file:**
```bash
# Add video to public/videos/
# Then tag it
npm run geo:videos
```

**2. Add Video Schema:**
```tsx
<SchemaInjector type="video" data={{
  name: "كيفية التخلص من الصراصير في المنزل",
  description: "فيديو تعليمي شامل...",
  url: "/videos/cockroach-treatment-demo.mp4",
  thumbnailUrl: "/images/video-thumb-cockroach.jpg",
  uploadDate: "2024-01-15",
  duration: "PT3M45S",  // 3 minutes 45 seconds
  lat: 21.4925,
  lon: 39.1776
}} />
```

## Coordinate Strategy

### Base Coordinates (Jeddah)
```typescript
const JEDDAH = {
  lat: 21.492500,
  lon: 39.177570
};
```

### Neighborhood Coordinates (with jitter)

Add slight variations for each area:

```typescript
// Example coordinates for different neighborhoods
const COORDS = {
  alHamra: { lat: 21.5012, lon: 39.1823 },
  ashShati: { lat: 21.6843, lon: 39.1034 },
  arRawdah: { lat: 21.5433, lon: 39.2345 },
  asSalamah: { lat: 21.5889, lon: 39.1645 },
  anNaim: { lat: 21.5234, lon: 39.2123 },
  alMurjan: { lat: 21.6234, lon: 39.1234 },
  alBawadi: { lat: 21.5678, lon: 39.1890 }
};

// Always add small jitter when using
const jitter = () => ({
  lat: coords.lat + (Math.random() - 0.5) * 0.0024,
  lon: coords.lon + (Math.random() - 0.5) * 0.0024
});
```

## Alt Text Best Practices

**Good Alt Text (Descriptive + Context + Location):**
```tsx
<Image
  src="/images/Cockroach control Jeddah.jpg"
  alt="فني متخصص يقوم برش مبيدات لمكافحة الصراصير في مطبخ منزل بجدة"
  // "Specialist technician spraying pesticides for cockroach control in a home kitchen in Jeddah"
/>
```

**Avoid Keyword Stuffing:**
```tsx
// ❌ BAD
alt="مكافحة حشرات جدة شركة مكافحة حشرات أفضل شركة مكافحة"

// ✅ GOOD
alt="عملية رش مبيدات احترافية لمكافحة الحشرات في منزل سكني"
```

## Priority Pages for Image Schema

### High Priority (Add Now)
1. ✅ Homepage hero image
2. ✅ All service pages (8 services)
3. ✅ Top 3 Jeddah area pages (Al Hamra, Ash Shati, Ar Rawdah)
4. ✅ About page main image

### Medium Priority
5. Remaining Jeddah area pages (13 areas)
6. Blog post featured images (top 5 posts)
7. Sectors pages (residential, commercial, restaurants)

### Low Priority
8. Testimonials section images
9. Process section images
10. Footer images

## Testing & Verification

### 1. Test File Metadata
```bash
# Check specific file
exiftool -G1 -a public/images/Pest\ control\ Jeddah.jpg | grep -i gps

# Check all files
npm run geo:verify
```

### 2. Test Structured Data
```bash
# Google Rich Results Test
https://search.google.com/test/rich-results

# Schema Markup Validator
https://validator.schema.org/
```

### 3. Test in Google Search Console
1. Deploy to production
2. Open Google Search Console
3. Go to "Enhancements" → "Structured Data"
4. Wait 2-3 days for indexing
5. Check for errors

## Performance Impact

### File Size Increase
- **Images:** +2-5 KB per file (negligible)
- **Videos:** +1-3 KB per file (negligible)

### Page Speed Impact
- **JSON-LD:** <1 KB per schema block
- **Recommendation:** Limit to 3-4 schema blocks per page

### Optimization Tips
```tsx
// ✅ Good: One image schema for hero
<SchemaInjector type="image" data={{...}} />

// ❌ Avoid: Schema for every gallery image
{galleryImages.map(img => 
  <SchemaInjector type="image" data={{url: img}} />
)}
```

## CI/CD Integration

### Add to Build Process
```yaml
# .github/workflows/deploy.yml
- name: Tag media with GEO metadata
  run: |
    npm run geo:all
    git add public/images/**/* public/videos/**/*
    git commit -m "chore: update GEO metadata" || true
```

### Pre-commit Hook
```bash
# .husky/pre-commit
#!/bin/sh
npm run geo:images
git add public/images/**/*
```

## Monitoring & Analytics

### Track in Google Search Console
- Monitor "Images" tab for impressions
- Check "Maps" integration
- Track local pack appearances

### Track in Google Analytics 4
```javascript
// Track image engagement
gtag('event', 'image_view', {
  'image_url': '/images/cockroach-control-jeddah.jpg',
  'location': 'Jeddah',
  'service': 'cockroach_control'
});
```

## Maintenance

### Weekly
- Run `npm run geo:verify` to check coverage

### After Media Updates
- Always run `npm run geo:images` after adding/updating images
- Re-tag if using FFmpeg or image optimization tools

### Monthly
- Review Google Search Console for structured data errors
- Update coordinates if expanding to new areas
- Add image schema to newly created pages

## Support Resources

- **ExifTool Documentation:** https://exiftool.org/
- **Schema.org ImageObject:** https://schema.org/ImageObject
- **Schema.org VideoObject:** https://schema.org/VideoObject
- **Schema.org LocalBusiness:** https://schema.org/LocalBusiness
- **Google Rich Results:** https://developers.google.com/search/docs/appearance/structured-data

## Questions?

Check the `/scripts/exif/README.md` for detailed script documentation.

