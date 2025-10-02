# Fix all image references
$files = Get-ChildItem -Path "app" -Include *.tsx -Recurse -File
$count = 0

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Encoding UTF8 | Out-String
    $original = $content
    
    $content = $content -replace '/images/Professional pest control\.jpg', '/images/Professional-pest-control.jpg'
    $content = $content -replace '/images/Eco-friendly pest control\.jpg', '/images/Eco-friendly-pest-control.jpg'
    $content = $content -replace '/images/Insect control Jeddah\.jpg', '/images/Insect-control-Jeddah.jpg'
    $content = $content -replace '/images/Mosquito control service\.jpg', '/images/Mosquito-control-service.jpg'
    $content = $content -replace '/images/Safe pest control\.jpg', '/images/Safe-pest-control.jpg'
    $content = $content -replace '/images/Home pest treatment\.jpg', '/images/Home-pest-treatment.jpg'
    $content = $content -replace '/images/Emergency pest control Jeddah\.jpg', '/images/Emergency-pest-control-Jeddah.jpg'
    $content = $content -replace '/images/Best pest control company\.jpg', '/images/Best-pest-control-company.jpg'
    $content = $content -replace '/images/Professional exterminators\.jpg', '/images/Professional-exterminators.jpg'
    $content = $content -replace '/images/Pest control Jeddah\.jpg', '/images/Pest-control-Jeddah.jpg'
    $content = $content -replace '/images/Pest control guarantee\.jpg', '/images/Pest-control-guarantee.jpg'
    $content = $content -replace '/images/Residential pest control\.jpg', '/images/Residential-pest-control.jpg'
    $content = $content -replace '/images/Commercial pest control Jeddah\.jpg', '/images/Commercial-pest-control-Jeddah.jpg'
    $content = $content -replace '/images/Pest control contracts\.jpg', '/images/Pest-control-contracts.jpg'
    $content = $content -replace '/images/Pest spray service\.jpg', '/images/Pest-spray-service.jpg'
    $content = $content -replace '/images/Rodent control Jeddah\.jpg', '/images/Rodent-control-Jeddah.jpg'
    $content = $content -replace '/images/Ant control Jeddah\.jpg', '/images/Ant-control-Jeddah.jpg'
    $content = $content -replace '/images/Termite treatment Jeddah\.jpg', '/images/Termite-treatment-Jeddah.jpg'
    $content = $content -replace '/images/Bed bug treatment Jeddah\.jpg', '/images/Bed-bug-treatment-Jeddah.jpg'
    $content = $content -replace '/images/Cockroach control Jeddah\.jpg', '/images/Cockroach-control-Jeddah.jpg'
    $content = $content -replace '/images/Exterminator Jeddah\.jpg', '/images/Exterminator-Jeddah.jpg'
    $content = $content -replace '/images/Pest control for restaurants\.jpg', '/images/Pest-control-for-restaurants.jpg'
    
    if ($content -ne $original) {
        $content | Set-Content -Path $file.FullName -Encoding UTF8
        Write-Host "Fixed: $($file.Name)" -ForegroundColor Green
        $count++
    }
}

Write-Host ""
Write-Host "Total fixed: $count files" -ForegroundColor Cyan
