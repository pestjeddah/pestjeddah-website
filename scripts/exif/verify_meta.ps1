# GEO Metadata Verification Script (PowerShell)
# Verifies that GEO metadata was written correctly

$ErrorActionPreference = "Stop"

# Navigate to project root
$root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
Set-Location $root

# Check for exiftool
$exiftool = Get-Command exiftool -ErrorAction SilentlyContinue
if (-not $exiftool) {
    Write-Host "ERROR: exiftool is required. Install it first" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "              GEO METADATA VERIFICATION REPORT                  " -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

# Check images
Write-Host "IMAGE METADATA SAMPLE (first 3 files):" -ForegroundColor Yellow
Write-Host "----------------------------------------------------------------" -ForegroundColor Gray

$imageFiles = Get-ChildItem -Path "public/images" -Include *.jpg,*.jpeg,*.webp,*.png,*.JPG,*.JPEG,*.WEBP,*.PNG -Recurse -File
$count = 0
$shown = 0

foreach ($file in $imageFiles) {
    $count++
    if ($shown -lt 3) {
        Write-Host ""
        Write-Host "File: $($file.Name)" -ForegroundColor Cyan
        
        $metadata = & exiftool -G1 -s -n `
            -XMP-photoshop:City `
            -XMP-photoshop:Country `
            -XMP:CountryCode `
            -XMP:GPSLatitude `
            -XMP:GPSLongitude `
            -EXIF:GPSLatitude `
            -EXIF:GPSLongitude `
            -XMP-dc:Subject `
            $file.FullName 2>$null | Where-Object { $_.Trim() -ne "" }
        
        if ($metadata) {
            $metadata | ForEach-Object { Write-Host "  $_" -ForegroundColor White }
        } else {
            Write-Host "  WARNING: No GEO metadata found" -ForegroundColor Yellow
        }
        $shown++
    }
}

Write-Host ""
Write-Host "Total images: $count" -ForegroundColor Green
Write-Host ""
Write-Host "----------------------------------------------------------------" -ForegroundColor Gray

# Check videos
Write-Host ""
Write-Host "VIDEO METADATA SAMPLE (first 2 files):" -ForegroundColor Yellow
Write-Host "----------------------------------------------------------------" -ForegroundColor Gray

$vcount = 0
if (Test-Path "public/videos") {
    $videoFiles = Get-ChildItem -Path "public/videos" -Include *.mp4,*.MP4 -Recurse -File
    $vshown = 0
    
    foreach ($file in $videoFiles) {
        $vcount++
        if ($vshown -lt 2) {
            Write-Host ""
            Write-Host "File: $($file.Name)" -ForegroundColor Cyan
            
            $metadata = & exiftool -G1 -s -n `
                -QuickTime:GPSCoordinates `
                -Keys:LocationName `
                $file.FullName 2>$null | Where-Object { $_.Trim() -ne "" }
            
            if ($metadata) {
                $metadata | ForEach-Object { Write-Host "  $_" -ForegroundColor White }
            } else {
                Write-Host "  WARNING: No GEO metadata found" -ForegroundColor Yellow
            }
            $vshown++
        }
    }
}

Write-Host ""
Write-Host "Total videos: $vcount" -ForegroundColor Green
Write-Host ""
Write-Host "----------------------------------------------------------------" -ForegroundColor Gray

# Summary
Write-Host ""
Write-Host "SUMMARY:" -ForegroundColor Cyan
Write-Host "   Images tagged: $count" -ForegroundColor White
Write-Host "   Videos tagged: $vcount" -ForegroundColor White
Write-Host ""
Write-Host "TIP: To see full metadata for a specific file:" -ForegroundColor Yellow
Write-Host "   exiftool -a -G1 public/images/[filename]" -ForegroundColor Gray
Write-Host ""
