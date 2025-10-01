#!/usr/bin/env bash
set -euo pipefail

# Navigate to project root
root="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.."; pwd)"
cd "$root"

# Check for exiftool
command -v exiftool >/dev/null 2>&1 || { 
  echo "❌ exiftool is required. Install it first"
  exit 1
}

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║              GEO METADATA VERIFICATION REPORT                  ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Check images
echo "📸 IMAGE METADATA SAMPLE (first 3 files):"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

count=0
shopt -s globstar nullglob
for f in public/images/**/*.{jpg,jpeg,webp,png,JPG,JPEG,WEBP,PNG}; do
  [[ -f "$f" ]] || continue
  ((count++))
  if [[ $count -le 3 ]]; then
    echo ""
    echo "File: $(basename "$f")"
    exiftool -G1 -s -n \
      -XMP-photoshop:City \
      -XMP-photoshop:Country \
      -XMP:CountryCode \
      -XMP:GPSLatitude \
      -XMP:GPSLongitude \
      -EXIF:GPSLatitude \
      -EXIF:GPSLongitude \
      -XMP-dc:Subject \
      "$f" 2>/dev/null | grep -v "^$" || echo "  ⚠️  No GEO metadata found"
  fi
done

echo ""
echo "Total images: $count"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check videos
echo ""
echo "🎥 VIDEO METADATA SAMPLE (first 2 files):"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

vcount=0
if [[ -d "public/videos" ]]; then
  for f in public/videos/**/*.{mp4,MP4}; do
    [[ -f "$f" ]] || continue
    ((vcount++))
    if [[ $vcount -le 2 ]]; then
      echo ""
      echo "File: $(basename "$f")"
      exiftool -G1 -s -n \
        -QuickTime:GPSCoordinates \
        -Keys:LocationName \
        "$f" 2>/dev/null | grep -v "^$" || echo "  ⚠️  No GEO metadata found"
    fi
  done
fi

echo ""
echo "Total videos: $vcount"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Summary
echo ""
echo "📊 SUMMARY:"
echo "   Images tagged: $count"
echo "   Videos tagged: $vcount"
echo ""
echo "💡 To see full metadata for a specific file:"
echo "   exiftool -a -G1 public/images/[filename]"
echo ""

