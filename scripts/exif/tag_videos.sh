#!/usr/bin/env bash
set -euo pipefail

# Navigate to project root
root="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.."; pwd)"
cd "$root"

# Check for exiftool
command -v exiftool >/dev/null 2>&1 || { 
  echo "❌ exiftool is required. Install it first:"
  echo "   Windows: choco install exiftool"
  echo "   macOS:   brew install exiftool"
  echo "   Linux:   sudo apt-get install libimage-exiftool-perl"
  exit 1
}

# Jeddah coordinates
LAT=21.492500
LON=39.177570

count=0

echo "🎥 Starting GEO metadata tagging for videos..."
echo "📍 Base coordinates: Jeddah, Saudi Arabia ($LAT, $LON)"
echo ""

# Check if videos directory has any files
if [[ ! -d "public/videos" ]] || [[ -z "$(find public/videos -type f -name '*.mp4' -o -name '*.MP4' 2>/dev/null)" ]]; then
  echo "ℹ️  No video files found in public/videos/"
  echo "💡 Add MP4 files to public/videos/ and run this script again"
  exit 0
fi

# Process all video files
shopt -s globstar nullglob
for f in public/videos/**/*.{mp4,MP4}; do
  [[ -f "$f" ]] || continue
  
  base="$(basename "$f")"
  
  # Apply jitter (±0.0012° ≈ 130m)
  jlat="$(awk -v a="$LAT" 'BEGIN{srand(); printf("%.6f", a + (rand()-0.5)*0.0024)}')"
  jlon="$(awk -v a="$LON" 'BEGIN{srand(); printf("%.6f", a + (rand()-0.5)*0.0024)}')"
  
  # Write QuickTime GPS metadata
  exiftool -overwrite_original -P -n -q \
    -QuickTime:GPSCoordinates="${jlat},${jlon},5" \
    -Keys:LocationName="Jeddah, Saudi Arabia" \
    -Keys:Make="Pest Control Jeddah" \
    "$f" 2>/dev/null || echo "⚠️  Warning: Could not tag $base"
  
  ((count++))
  echo "✅ $base → GPS: $jlat, $jlon"
done

echo ""
echo "🎉 Tagged $count videos successfully!"
echo "💡 Run 'npm run geo:verify' to check metadata"

