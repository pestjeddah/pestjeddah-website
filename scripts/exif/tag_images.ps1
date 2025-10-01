# GEO Metadata Tagging Script for Images (PowerShell)
# Adds GPS coordinates and location keywords to all images

$ErrorActionPreference = "Stop"
$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

# Navigate to project root
$root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
Set-Location $root

Write-Host ""
Write-Host "Starting GEO metadata tagging for images..." -ForegroundColor Cyan
Write-Host "Base coordinates: Jeddah, Saudi Arabia (21.492500, 39.177570)" -ForegroundColor Cyan
Write-Host ""

# Check for exiftool
$exiftool = Get-Command exiftool -ErrorAction SilentlyContinue
if (-not $exiftool) {
    Write-Host "ERROR: exiftool is required. Install it first:" -ForegroundColor Red
    Write-Host "   choco install exiftool" -ForegroundColor Yellow
    Write-Host "   or download from: https://exiftool.org/" -ForegroundColor Yellow
    exit 1
}

# Jeddah coordinates
$LAT = 21.492500
$LON = 39.177570

# Neighborhood tokens
$neighborhoods = @{
    'hamra' = @('الحمراء', 'Al Hamra')
    'alhamra' = @('الحمراء', 'Al Hamra')
    'shatie' = @('الشاطئ', 'Ash Shati')
    'shate' = @('الشاطئ', 'Ash Shati')
    'rawdah' = @('الروضة', 'Ar Rawdah')
    'salama' = @('السلامة', 'As Salamah')
    'naeem' = @('النعيم', 'An Naim')
    'naseem' = @('النعيم', 'An Naim')
    'marjan' = @('المرجان', 'Al Murjan')
    'murjan' = @('المرجان', 'Al Murjan')
    'bawadi' = @('البوادي', 'Al Bawadi')
}

$count = 0

# Get all image files
$imageFiles = Get-ChildItem -Path "public/images" -Include *.jpg,*.jpeg,*.webp,*.png,*.JPG,*.JPEG,*.WEBP,*.PNG -Recurse -File

if ($imageFiles.Count -eq 0) {
    Write-Host "INFO: No image files found in public/images/" -ForegroundColor Yellow
    exit 0
}

foreach ($file in $imageFiles) {
    $basename = $file.Name
    $lowerName = $basename.ToLower()
    
    # Base keywords
    $arKw = "مكافحة حشرات, جدة"
    $enKw = "Pest Control, Jeddah"
    
    # Check for neighborhood in filename
    foreach ($key in $neighborhoods.Keys) {
        if ($lowerName -like "*$key*") {
            $arKw += ", $($neighborhoods[$key][0])"
            $enKw += ", $($neighborhoods[$key][1])"
            break
        }
    }
    
    # Apply jitter (±0.0012° ≈ 130m)
    $jlat = $LAT + ((Get-Random -Minimum -1.0 -Maximum 1.0) * 0.0012)
    $jlon = $LON + ((Get-Random -Minimum -1.0 -Maximum 1.0) * 0.0012)
    $jlat = [math]::Round($jlat, 6)
    $jlon = [math]::Round($jlon, 6)
    
    # Write metadata with exiftool (using XMP for better Unicode support)
    $result = & exiftool -overwrite_original -P -n `
        "-XMP-photoshop:City=Jeddah" `
        "-XMP-photoshop:State=Makkah" `
        "-XMP-photoshop:Country=Saudi Arabia" `
        "-XMP-dc:Subject+=$enKw" `
        "-XMP:GPSLatitude=$jlat" `
        "-XMP:GPSLongitude=$jlon" `
        "-EXIF:GPSLatitude=$jlat" `
        "-EXIF:GPSLatitudeRef=N" `
        "-EXIF:GPSLongitude=$jlon" `
        "-EXIF:GPSLongitudeRef=E" `
        $file.FullName 2>&1
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "[OK] $basename -> GPS: $jlat, $jlon" -ForegroundColor Green
        $count++
    } else {
        Write-Host "[WARNING] Could not tag $basename : $result" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "SUCCESS: Tagged $count images!" -ForegroundColor Green
Write-Host "TIP: Run 'npm run geo:verify' to check metadata" -ForegroundColor Cyan
Write-Host ""
