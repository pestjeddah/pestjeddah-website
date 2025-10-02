# 🌍 GEO Metadata & Local SEO Implementation

Complete geographic metadata and structured data system for **pestjeddah.com** to maximize visibility in Google Search, Images, Maps, and AI Overviews.

## 🚀 Quick Start

### 1. Install ExifTool (Required)

**Windows (PowerShell as Admin):**
```powershell
choco install exiftool
# Or download from: https://exiftool.org/
```

**macOS:**
```bash
brew install exiftool
```

**Linux:**
```bash
sudo apt-get install libimage-exiftool-perl
```

### 2. Tag Your Media Files

```bash
# Tag all images with GEO metadata
npm run geo:images

# Verify metadata was written correctly
npm run geo:verify
```

### 3. Use in Your Pages

```tsx
import { SchemaInjector } from '@/components/seo/SchemaInjector';

<SchemaInjector type="image" data={{
  url: "/images/Cockroach-control-Jeddah.jpg",
  caption: "مكافحة الصراصير في جدة",
  lat: 21.4925,
  lon: 39.1776
}} />
```

## 📁 Project Structure

```
pestjeddah/
├── scripts/exif/
│   ├── tag_images.sh        # Tags images with GEO metadata
│   ├── tag_videos.sh        # Tags videos with GEO metadata
│   ├── verify_meta.sh       # Verifies metadata
│   └── README.md           # Detailed documentation
│
├── lib/
│   └── jsonld.ts           # JSON-LD utilities
│
├── components/seo/
│   └── SchemaInjector.tsx  # Enhanced schema component
│
├── docs/
│   └── GEO_METADATA_GUIDE.md  # Complete implementation guide
│
└── public/
    ├── images/             # 🎯 Images tagged with GPS
    └── videos/             # 🎯 Videos tagged with GPS
```

## 🎯 What Gets Tagged

### Images (JPG, WEBP, PNG)
✅ GPS Coordinates (with 130m jitter)  
✅ City: Jeddah (جدة)  
✅ Country: Saudi Arabia (السعودية)  
✅ Keywords: Arabic + English  
✅ Neighborhood detection (الحمراء، الشاطئ، etc.)  

### Videos (MP4)
✅ GPS Coordinates  
✅ Location Name: "Jeddah, Saudi Arabia"  
✅ QuickTime metadata  

## 📊 NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run geo:images` | Tag all images |
| `npm run geo:videos` | Tag all videos |
| `npm run geo:verify` | Verify metadata |
| `npm run geo:all` | Tag everything + verify |

## 🗺️ Coordinates Reference

**Base Location: Jeddah, Saudi Arabia**
- Latitude: `21.492500`
- Longitude: `39.177570`
- Source: latlong.net

**Jitter Applied:** ±0.0012° (~130 meters)
- Prevents identical coordinates
- Maintains local accuracy
- Natural distribution

## 🏘️ Neighborhood Auto-Detection

If filename contains these keywords, specific location metadata is added:

| Keyword | Location (AR) | Location (EN) |
|---------|--------------|---------------|
| hamra, alhamra | الحمراء | Al Hamra |
| shatie, shate | الشاطئ | Ash Shati |
| rawdah | الروضة | Ar Rawdah |
| salama | السلامة | As Salamah |
| naeem, naseem | النعيم | An Naim |
| marjan, murjan | المرجان | Al Murjan |
| bawadi | البوادي | Al Bawadi |

**Example:**
```
File: cockroach-hamra.jpg
→ Keywords: "مكافحة حشرات, جدة, الحمراء, Pest Control, Jeddah, Al Hamra"
```

## 🎨 JSON-LD Schema Types

### SchemaInjector Component

**1. Image Schema**
```tsx
<SchemaInjector type="image" data={{
  url: "/images/pest-control.jpg",
  caption: "Professional pest control",
  lat: 21.4925,
  lon: 39.1776
}} />
```

**2. Video Schema**
```tsx
<SchemaInjector type="video" data={{
  name: "Cockroach Treatment Guide",
  url: "/videos/treatment.mp4",
  thumbnailUrl: "/images/thumb.jpg",
  uploadDate: "2024-01-15",
  duration: "PT3M45S"
}} />
```

**3. Local Service Schema**
```tsx
<SchemaInjector type="localService" data={{
  areaName: "Al Hamra",
  areaNameAr: "الحمراء",
  serviceName: "Pest Control",
  serviceNameAr: "مكافحة الحشرات",
  lat: 21.5012,
  lon: 39.1823
}} />
```

## 🔍 SEO Benefits

### Google Search
- ✅ Enhanced local pack rankings
- ✅ Rich results eligibility
- ✅ "Near me" search optimization
- ✅ AI Overview citations

### Google Images
- ✅ Geo-tagged image search
- ✅ Location-based filtering
- ✅ Better image discoverability

### Google Maps
- ✅ Business location reinforcement
- ✅ Service area coverage
- ✅ Local citation strength

## 🧪 Testing & Verification

### Verify File Metadata
```bash
# Check specific file
exiftool -G1 -a public/images/Pest\ control\ Jeddah.jpg | grep GPS

# Check all GPS coordinates
exiftool -csv -r -GPS* public/images/

# Full verification report
npm run geo:verify
```

### Test Structured Data
- **Rich Results Test:** https://search.google.com/test/rich-results
- **Schema Validator:** https://validator.schema.org/

### Example Output
```
✅ Cockroach-control-Jeddah.jpg → GPS: 21.493127, 39.178234
✅ Bed-bug-treatment-Jeddah.jpg → GPS: 21.491872, 39.176945
✅ Termite-treatment-Jeddah.jpg → GPS: 21.492789, 39.177123

🎉 Tagged 34 images successfully!
```

## 📋 Metadata Examples

### Image Metadata
```
[XMP]           City                    : Jeddah
[XMP]           Country                 : Saudi Arabia
[XMP]           CountryCode             : SA
[IPTC]          City                    : جدة
[IPTC]          Country-PrimaryLocationName : السعودية
[XMP]           Subject                 : مكافحة حشرات, جدة, الحمراء
[XMP]           Subject                 : Pest Control, Jeddah, Al Hamra
[XMP]           GPSLatitude             : 21.493127
[XMP]           GPSLongitude            : 39.178234
[EXIF]          GPSLatitude             : 21.493127 N
[EXIF]          GPSLongitude            : 39.178234 E
```

### JSON-LD Output
```json
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "/images/Cockroach-control-Jeddah.jpg",
  "caption": "مكافحة الصراصير في جدة",
  "contentLocation": {
    "@type": "Place",
    "name": "Jeddah",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.4925,
      "longitude": 39.1776
    }
  }
}
```

## 🔄 Workflow Integration

### Before Deployment
```bash
# Always tag before production deployment
npm run geo:all
```

### After Image Optimization
```bash
# If you convert/optimize images
npm run geo:images
```

### CI/CD Pipeline
```yaml
# .github/workflows/deploy.yml
- name: Add GEO metadata
  run: npm run geo:all
```

## 📚 Documentation

- **Scripts Documentation:** `scripts/exif/README.md`
- **Implementation Guide:** `docs/GEO_METADATA_GUIDE.md`
- **JSON-LD Utilities:** `lib/jsonld.ts`

## 🎯 Priority Implementation

### ✅ Phase 1 (Now)
- [x] Create scripts
- [x] Tag all existing images
- [x] Add JSON-LD utilities
- [x] Enhance SchemaInjector

### 🚧 Phase 2 (Next)
- [ ] Add image schemas to top 8 service pages
- [ ] Add localService schemas to top 5 Jeddah areas
- [ ] Update homepage with image schema

### 📅 Phase 3 (Future)
- [ ] Add video content + tagging
- [ ] Expand to all 16 Jeddah areas
- [ ] Add schemas to blog posts

## 🆘 Troubleshooting

### Scripts Won't Run
```bash
# Make scripts executable
chmod +x scripts/exif/*.sh

# Or use Git Bash on Windows
```

### ExifTool Not Found
```bash
# Check installation
exiftool -ver

# Reinstall if needed
choco install exiftool  # Windows
brew install exiftool   # macOS
```

### Metadata Not Written
- Check file permissions
- Verify ExifTool version (need 12.0+)
- Check for read-only files
- Review script output for errors

## 🔗 Resources

- **ExifTool:** https://exiftool.org/
- **Schema.org:** https://schema.org/
- **Google Search Central:** https://developers.google.com/search/docs/appearance/structured-data
- **Coordinates:** https://www.latlong.net/

---

## 💡 Pro Tips

1. **Always tag before deployment** - GPS metadata can be lost during optimization
2. **Use descriptive filenames** - Helps with auto-neighborhood detection
3. **Test with Rich Results** - Verify schemas before going live
4. **Monitor Search Console** - Track structured data performance
5. **Update regularly** - Re-tag after any media processing

---

**Built for pestjeddah.com** | Local SEO + DevOps Engineering

