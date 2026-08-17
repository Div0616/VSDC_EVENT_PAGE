@echo off
echo === Among Us Landing Page Setup ===
echo.

echo Creating images directory...
mkdir "public\images" 2>nul

echo Copying hero background...
copy "C:\Users\divya\.gemini\antigravity-ide\brain\aad28b23-6091-4c8c-a8be-dee4806f77df\hero_background_1786211941387.png" "public\images\hero_background.png"

echo Copying merch CTA background...
copy "C:\Users\divya\.gemini\antigravity-ide\brain\aad28b23-6091-4c8c-a8be-dee4806f77df\merch_cta_bg_1786211954548.png" "public\images\merch_cta_bg.png"

echo Copying crew banner...
copy "C:\Users\divya\.gemini\antigravity-ide\brain\aad28b23-6091-4c8c-a8be-dee4806f77df\crew_banner_1786211971414.png" "public\images\crew_banner.png"

echo Copying impostor banner...
copy "C:\Users\divya\.gemini\antigravity-ide\brain\aad28b23-6091-4c8c-a8be-dee4806f77df\impostor_banner_1786211982283.png" "public\images\impostor_banner.png"

echo Copying gameplay screenshots...
copy "C:\Users\divya\.gemini\antigravity-ide\brain\aad28b23-6091-4c8c-a8be-dee4806f77df\gameplay_screenshots_1786212008323.png" "public\images\gameplay_screenshots.png"

echo Copying award badges...
copy "C:\Users\divya\.gemini\antigravity-ide\brain\aad28b23-6091-4c8c-a8be-dee4806f77df\award_badges_1786212022236.png" "public\images\award_badges.png"

echo.
echo All images copied!
echo.
echo Installing npm packages...
npm install

echo.
echo === Setup complete! ===
echo Run: npm run dev
echo.
pause
