# GEO Metadata Scripts for Local SEO

## Overview
These scripts add robust geographic metadata to all media files to reinforce locality for Google Search, Google Images, Google Maps, and AI Overviews.

## Prerequisites

### Install ExifTool
ExifTool is required to write metadata to images and videos.

**Windows:**
```powershell
choco install exiftool
# or download from: https://exiftool.org/
```

**macOS:**
```bash
brew install exiftool
```

**Linux:**
```bash
sudo apt-get install libimage-exiftool-perl
```

## Scripts

### 1. `tag_images.sh`
Adds GEO metadata and keywords to all images in `public/images/`

**Features:**
- Writes XMP metadata (City, Country, GPS coordinates)
- Adds EXIF GPS data for maximum compatibility
- Includes Arabic + English keywords
- Auto-detects neighborhoods from filenames
- Applies coordinate jitter (±130m) so files don't share identical GPS

**Usage:**
```bash
npm run geo:images
```

### 2. `tag_videos.sh`
Adds GEO metadata to all videos in `public/videos/`

**Features:**
- Writes QuickTime GPS coordinates
- Adds location name metadata
- Applies coordinate jitter

**Usage:**
```bash
npm run geo:videos
```

### 3. `verify_meta.sh`
Verifies metadata was written correctly

**Usage:**
```bash
npm run geo:verify
```

## NPM Scripts

Add these to your workflow:

```bash
# Tag all images
npm run geo:images

# Tag all videos (when you have videos)
npm run geo:videos

# Verify metadata
npm run geo:verify

# Tag everything at once
npm run geo:all
```

## Coordinates Reference

**Jeddah, Saudi Arabia:**
- Latitude: 21.492500
- Longitude: 39.177570
- Source: latlong.net

**Jitter:** ±0.0012° (~130 meters)
- Prevents all files from having identical coordinates
- Keeps location accuracy for local SEO
- Natural distribution across service areas

## Neighborhood Detection

If filename contains these tokens, specific neighborhood keywords are added:

| Token | Arabic | English |
|-------|--------|---------|
| hamra, alhamra | الحمراء | Al Hamra |
| shatie, shate | الشاطئ | Ash Shati |
| rawdah | الروضة | Ar Rawdah |
| salama | السلامة | As Salamah |
| naeem, naseem | النعيم | An Naim |
| marjan, murjan | المرجان | Al Murjan |
| bawadi | البوادي | Al Bawadi |

**Example:**
- File: `cockroach-control-hamra.jpg`
- Keywords: "مكافحة حشرات, جدة, الحمراء" + "Pest Control, Jeddah, Al Hamra"

## Metadata Written

### Images (JPG, WEBP, PNG)
```
XMP-photoshop:City = "Jeddah"
XMP-photoshop:State = "Makkah"
XMP-photoshop:Country = "Saudi Arabia"
XMP-iptcCore:CountryName = "Saudi Arabia"
XMP:CountryCode = "SA"
IPTC:City = "جدة"
IPTC:Province-State = "مكة المكرمة"
IPTC:Country-PrimaryLocationName = "السعودية"
XMP-dc:Subject = "مكافحة حشرات, جدة" (+ neighborhood)
XMP-dc:Subject = "Pest Control, Jeddah" (+ neighborhood)
XMP:GPSLatitude = 21.xxxxxx (with jitter)
XMP:GPSLongitude = 39.xxxxxx (with jitter)
EXIF:GPSLatitude = 21.xxxxxx
EXIF:GPSLongitude = 39.xxxxxx
```

### Videos (MP4)
```
QuickTime:GPSCoordinates = "21.xxxxxx,39.xxxxxx,5"
Keys:LocationName = "Jeddah, Saudi Arabia"
Keys:Make = "Pest Control Jeddah"
```

## Workflow Integration

### After Image Optimization
If you optimize/convert images (e.g., JPG → WEBP):
```bash
# After running optimization scripts
npm run geo:images
```

### After Video Transcoding
If you use FFmpeg to transcode videos:
```bash
# After FFmpeg processing
npm run geo:videos
```

### Before Deployment
```bash
# Always tag before pushing to production
npm run geo:all
```

## Verification Examples

**Check specific file:**
```bash
exiftool -a -G1 public/images/cockroach-control-jeddah.jpg
```

**Check all GPS coordinates:**
```bash
exiftool -csv -r -GPS* public/images/
```

**Check XMP subjects (keywords):**
```bash
exiftool -XMP-dc:Subject public/images/*.jpg
```

## Troubleshooting

### Script Permission Denied
```bash
chmod +x scripts/exif/*.sh
```

### ExifTool Not Found
Make sure ExifTool is installed and in your PATH:
```bash
exiftool -ver
```

### No Files Tagged
- Check file extensions (scripts support: jpg, jpeg, webp, png, mp4)
- Verify files exist in `public/images/` or `public/videos/`
- Check script output for warnings

### Metadata Not Showing
Some image viewers don't display XMP metadata. Use ExifTool directly:
```bash
exiftool -G1 -a your-file.jpg
```

## SEO Impact

✅ **Google Images:** Geo-tagged images appear in local image searches  
✅ **Google Maps:** Images show proper location context  
✅ **AI Overviews:** Enhanced local signals for AI-generated summaries  
✅ **Rich Results:** Better eligibility for local rich snippets  
✅ **Mobile Search:** Improved "near me" search performance  

## Best Practices

1. **Always tag before deployment** - Include in CI/CD pipeline
2. **Re-tag after any media processing** - GPS metadata can be lost
3. **Use descriptive filenames** - Include service/area names for auto-keywords
4. **Verify regularly** - Run `npm run geo:verify` to check coverage
5. **Keep originals** - Scripts use `-overwrite_original` flag carefully

## Related Files

- `/lib/jsonld.ts` - JSON-LD structured data utilities
- `/components/seo/SchemaInjector.tsx` - Schema injection component
- `package.json` - NPM scripts configuration

## Support

For issues or questions:
- Check ExifTool documentation: https://exiftool.org/
- Verify coordinates: https://www.latlong.net/
- Test structured data: https://search.google.com/test/rich-results

