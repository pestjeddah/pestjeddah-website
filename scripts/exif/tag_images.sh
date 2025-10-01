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

# Jeddah coordinates (source: latlong.net)
LAT=21.492500
LON=39.177570

# Neighborhood tokens for keyword enrichment
NEI=("hamra" "alhamra" "shatie" "shate" "rawdah" "salama" "naeem" "naseem" "marjan" "murjan" "bawadi")

# Counter
count=0

echo "🌍 Starting GEO metadata tagging for images..."
echo "📍 Base coordinates: Jeddah, Saudi Arabia ($LAT, $LON)"
echo ""

# Process all image files (jpg, jpeg, webp, png)
shopt -s globstar nullglob
for f in public/images/**/*.{jpg,jpeg,webp,png,JPG,JPEG,WEBP,PNG}; do
  [[ -f "$f" ]] || continue
  
  base="$(basename "$f")"
  base_lower="$(echo "$base" | tr '[:upper:]' '[:lower:]')"
  
  # Base keywords (Arabic + English)
  arKw="مكافحة حشرات, جدة"
  enKw="Pest Control, Jeddah"
  
  # Check for neighborhood in filename
  for n in "${NEI[@]}"; do
    if [[ "$base_lower" == *"$n"* ]]; then
      case "$n" in
        hamra|alhamra)   arKw="$arKw, الحمراء"; enKw="$enKw, Al Hamra";;
        shatie|shate)    arKw="$arKw, الشاطئ";  enKw="$enKw, Ash Shati";;
        rawdah)          arKw="$arKw, الروضة";  enKw="$enKw, Ar Rawdah";;
        salama)          arKw="$arKw, السلامة"; enKw="$enKw, As Salamah";;
        naeem|naseem)    arKw="$arKw, النعيم";  enKw="$enKw, An Naim";;
        marjan|murjan)   arKw="$arKw, المرجان"; enKw="$enKw, Al Murjan";;
        bawadi)          arKw="$arKw, البوادي"; enKw="$enKw, Al Bawadi";;
      esac
      break
    fi
  done
  
  # Apply jitter (±0.0012° ≈ 130m) so files don't share identical coordinates
  jlat="$(awk -v a="$LAT" 'BEGIN{srand(); printf("%.6f", a + (rand()-0.5)*0.0024)}')"
  jlon="$(awk -v a="$LON" 'BEGIN{srand(); printf("%.6f", a + (rand()-0.5)*0.0024)}')"
  
  # Write metadata with exiftool
  exiftool -overwrite_original -P -n -q \
    -XMP-photoshop:City="Jeddah" \
    -XMP-photoshop:State="Makkah" \
    -XMP-photoshop:Country="Saudi Arabia" \
    -XMP-iptcCore:CountryName="Saudi Arabia" \
    -XMP:CountryCode="SA" \
    -IPTC:City="جدة" \
    -IPTC:Province-State="مكة المكرمة" \
    -IPTC:Country-PrimaryLocationName="السعودية" \
    -XMP-dc:Subject+="$arKw" \
    -XMP-dc:Subject+="$enKw" \
    -XMP:GPSLatitude="$jlat" \
    -XMP:GPSLongitude="$jlon" \
    -EXIF:GPSLatitude="$jlat" \
    -EXIF:GPSLatitudeRef="N" \
    -EXIF:GPSLongitude="$jlon" \
    -EXIF:GPSLongitudeRef="E" \
    "$f" 2>/dev/null || echo "⚠️  Warning: Could not tag $base"
  
  ((count++))
  echo "✅ $base → GPS: $jlat, $jlon"
done

echo ""
echo "🎉 Tagged $count images successfully!"
echo "💡 Run 'npm run geo:verify' to check metadata"

