# How to Update Your Resume

## Quick Steps:
1. Replace the file `public/ManishSResume.pdf` with your new resume PDF
2. Keep the same filename `ManishSResume.pdf` OR update the filename in the code
3. The download buttons are already set up in Hero and Navigation components

## If you want to change the filename:
Update these files with your new filename:
- `src/components/Hero.tsx` (line ~147)
- `src/components/Navigation.tsx` (lines ~25 and ~58)

Change `/ManishSResume.pdf` to your new filename in the `link.href` assignments.

## Current Download Locations:
- Hero section: Large "Resume" button with download icon
- Navigation bar: "Resume" button (desktop and mobile)