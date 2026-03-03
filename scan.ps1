$lines = Get-Content 'src/components/layout/Navbar.tsx'
for ($i=0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match "onMouseEnter=\{") {
        Write-Host "Line $i : $($lines[$i])"
    }
}
