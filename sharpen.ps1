[Reflection.Assembly]::LoadWithPartialName("System.Drawing") | Out-Null
$inputPath = "d:\code\WEB PROMOSI\CODE- PEMBUKA\maceh_promo_orig.jpg"
$outputPath = "d:\code\WEB PROMOSI\CODE- PEMBUKA\maceh_promo_orig_sharpened.jpg"

$src = [System.Drawing.Bitmap]::FromFile($inputPath)
$width = $src.Width
$height = $src.Height

# Create destination bitmap
$dst = New-Object System.Drawing.Bitmap($width, $height)

# Sharpness convolution kernel:
#  0  -1   0
# -1   5  -1
#  0  -1   0
$kernel = @(
    @(0.0, -0.5, 0.0),
    @(-0.5, 3.0, -0.5),
    @(0.0, -0.5, 0.0)
)
# Normalize kernel sum to 1 to preserve brightness
# Sum is -0.5 * 4 + 3.0 = 1.0. Perfect!

# For performance, we can do it pixel-by-pixel using GetPixel/SetPixel (1024x1024 is small enough for a quick run)
Write-Host "Processing sharpening filter on $width x $height image..."

for ($y = 1; $y -lt ($height - 1); $y++) {
    for ($x = 1; $x -lt ($width - 1); $x++) {
        $r = 0.0
        $g = 0.0
        $b = 0.0
        
        for ($ky = 0; $ky -le 2; $ky++) {
            for ($kx = 0; $kx -le 2; $kx++) {
                $px = $x + $kx - 1
                $py = $y + $ky - 1
                $col = $src.GetPixel($px, $py)
                $coef = $kernel[$ky][$kx]
                $r += $col.R * $coef
                $g += $col.G * $coef
                $b += $col.B * $coef
            }
        }
        
        # Clamp to 0..255
        $ru = [Math]::Max(0, [Math]::Min(255, [Math]::Round($r)))
        $gu = [Math]::Max(0, [Math]::Min(255, [Math]::Round($g)))
        $bu = [Math]::Max(0, [Math]::Min(255, [Math]::Round($b)))
        
        $dst.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($src.GetPixel($x, $y).A, $ru, $gu, $bu))
    }
}

# Fill borders
for ($x = 0; $x -lt $width; $x++) {
    $dst.SetPixel($x, 0, $src.GetPixel($x, 0))
    $dst.SetPixel($x, $height - 1, $src.GetPixel($x, $height - 1))
}
for ($y = 0; $y -lt $height; $y++) {
    $dst.SetPixel(0, $y, $src.GetPixel(0, $y))
    $dst.SetPixel($width - 1, $y, $src.GetPixel($width - 1, $y))
}

# Save with maximum quality Jpeg
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]95)

$src.Dispose()
$dst.Save($outputPath, $codec, $encoderParams)
$dst.Dispose()

Write-Host "Completed sharpening! Saved to $outputPath"
