# Fix image names - replace spaces with hyphens in code
$ErrorActionPreference = "Stop"

$replacements = @{
    'Affordable pest control.jpg' = 'Affordable-pest-control.jpg'
    'Ant control Jeddah.jpg' = 'Ant-control-Jeddah.jpg'
    'Bed bug extermination.jpg' = 'Bed-bug-extermination.jpg'
    'Bed bug treatment Jeddah.jpg' = 'Bed-bug-treatment-Jeddah.jpg'
    'Best pest control company.jpg' = 'Best-pest-control-company.jpg'
    'Bug exterminator near me.jpg' = 'Bug-exterminator-near-me.jpg'
    'Cockroach control Jeddah.jpg' = 'Cockroach-control-Jeddah.jpg'
    'Commercial pest control Jeddah.jpg' = 'Commercial-pest-control-Jeddah.jpg'
    'Eco-friendly pest control.jpg' = 'Eco-friendly-pest-control.jpg'
    'Emergency pest control Jeddah.jpg' = 'Emergency-pest-control-Jeddah.jpg'
    'Exterminator Jeddah.jpg' = 'Exterminator-Jeddah.jpg'
    'Home pest treatment.jpg' = 'Home-pest-treatment.jpg'
    'Insect control Jeddah.jpg' = 'Insect-control-Jeddah.jpg'
    'Licensed pest control.jpg' = 'Licensed-pest-control.jpg'
    'Long-lasting pest control.jpg' = 'Long-lasting-pest-control.jpg'
    'Mosquito control service.jpg' = 'Mosquito-control-service.jpg'
    'Pest control company Jeddah.jpg' = 'Pest-control-company-Jeddah.jpg'
    'Pest control contracts.jpg' = 'Pest-control-contracts.jpg'
    'Pest control for restaurants.jpg' = 'Pest-control-for-restaurants.jpg'
    'Pest control guarantee.jpg' = 'Pest-control-guarantee.jpg'
    'Pest control Jeddah.jpg' = 'Pest-control-Jeddah.jpg'
    'Pest inspection Jeddah.jpg' = 'Pest-inspection-Jeddah.jpg'
    'Pest management Jeddah.jpg' = 'Pest-management-Jeddah.jpg'
    'Pest prevention services.jpg' = 'Pest-prevention-services.jpg'
    'Pest removal services.jpg' = 'Pest-removal-services.jpg'
    'Pest spray service.jpg' = 'Pest-spray-service.jpg'
    'Professional exterminators.jpg' = 'Professional-exterminators.jpg'
    'Professional pest control.jpg' = 'Professional-pest-control.jpg'
    'Residential pest control.jpg' = 'Residential-pest-control.jpg'
    'Rodent control Jeddah.jpg' = 'Rodent-control-Jeddah.jpg'
    'Safe pest control.jpg' = 'Safe-pest-control.jpg'
    'Termite treatment Jeddah.jpg' = 'Termite-treatment-Jeddah.jpg'
}

$files = Get-ChildItem -Path . -Include *.tsx,*.ts -Recurse -File | Where-Object { $_.FullName -notmatch 'node_modules' -and $_.FullName -notmatch '\\.next\\' -and $_.FullName -notmatch '\\test\\' }

foreach ($file in $files) {
    try {
        if (-not (Test-Path $file.FullName)) { continue }
        $content = Get-Content -Path $file.FullName | Out-String
        $changed = $false
        
        foreach ($old in $replacements.Keys) {
            if ($content -match [regex]::Escape($old)) {
                $content = $content -replace [regex]::Escape($old), $replacements[$old]
                $changed = $true
            }
        }
        
        if ($changed) {
            $content | Set-Content -Path $file.FullName
            Write-Host "Updated: $($file.Name)"
        }
    }
    catch {
        Write-Host "Skipping: $($file.Name)" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "Done! All image references updated."

