const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateBrandingAssets() {
  const publicDir = path.join(__dirname, '..', 'public');
  const logoPath = path.join(publicDir, 'logo.png');

  if (!fs.existsSync(logoPath)) {
    console.error('logo.png not found at', logoPath);
    return;
  }

  // 1. Generate Favicon Suite
  console.log('Generating favicon suite...');
  await sharp(logoPath)
    .resize(180, 180)
    .toFile(path.join(publicDir, 'apple-icon.png'));
  console.log('Created public/apple-icon.png (180x180)');

  await sharp(logoPath)
    .resize(192, 192)
    .toFile(path.join(publicDir, 'icon-192.png'));
  console.log('Created public/icon-192.png');

  await sharp(logoPath)
    .resize(32, 32)
    .toFile(path.join(publicDir, 'icon-32.png'));
  console.log('Created public/icon-32.png');

  // Also copy/resize to src/app/icon.png and src/app/apple-icon.png for Next.js automatic app metadata
  const appDir = path.join(__dirname, '..', 'src', 'app');
  await sharp(logoPath)
    .resize(32, 32)
    .toFile(path.join(appDir, 'icon.png'));
  await sharp(logoPath)
    .resize(180, 180)
    .toFile(path.join(appDir, 'apple-icon.png'));
  console.log('Created src/app/icon.png & src/app/apple-icon.png');

  // 2. Generate 1200x630 Open Graph Image
  console.log('Generating 1200x630 Open Graph image...');
  const logoBase64 = fs.readFileSync(logoPath).toString('base64');
  const logoDataUri = `data:image/png;base64,${logoBase64}`;

  const svgOg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#041208" />
        <stop offset="50%" stop-color="#071b0e" />
        <stop offset="100%" stop-color="#020804" />
      </linearGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
      </pattern>
      <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000" flood-opacity="0.6" />
      </filter>
    </defs>

    <!-- Background Base -->
    <rect width="1200" height="630" fill="url(#bgGrad)" />
    <rect width="1200" height="630" fill="url(#grid)" />

    <!-- Card Border Frame -->
    <rect x="24" y="24" width="1152" height="582" rx="28" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" />

    <!-- Left Header Section -->
    <g transform="translate(80, 80)">
      <!-- Department Pill -->
      <rect x="0" y="0" width="490" height="38" rx="19" fill="rgba(15,81,43,0.3)" stroke="rgba(46,164,79,0.4)" stroke-width="1.2" />
      <circle cx="20" cy="19" r="5" fill="#2ea44f" />
      <text x="36" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" fill="#4ade80" letter-spacing="1.5">
        DEPARTMENT OF COMPUTER SCIENCE · AMU
      </text>

      <!-- Main Heading -->
      <text x="0" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="64" font-weight="900" fill="#ffffff" letter-spacing="-1">
        AMU BATCH X
      </text>

      <!-- No version number here: the OG image is cached by social sites for a long
           time, so the current version is only shown on the live pages. -->

      <!-- Subtitle -->
      <text x="0" y="152" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="500" fill="#9ca3af" width="550">
        Timetable, attendance and notices for AMU Computer Science
      </text>

      <!-- 4 Core Pillars Pills Strip -->
      <g transform="translate(0, 205)">
        <!-- Pill 1 -->
        <rect x="0" y="0" width="280" height="52" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
        <circle cx="24" cy="26" r="4" fill="#4ade80" />
        <text x="40" y="31" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" fill="#f3f4f6">
          Attendance tracker
        </text>

        <!-- Pill 2 -->
        <rect x="295" y="0" width="280" height="52" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
        <circle cx="319" cy="26" r="4" fill="#4ade80" />
        <text x="335" y="31" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" fill="#f3f4f6">
          Class timetable
        </text>

        <!-- Pill 3 -->
        <rect x="0" y="65" width="280" height="52" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
        <circle cx="24" cy="91" r="4" fill="#c86d51" />
        <text x="40" y="96" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" fill="#f3f4f6">
          Department notices
        </text>

        <!-- Pill 4 -->
        <rect x="295" y="65" width="280" height="52" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
        <circle cx="319" cy="91" r="4" fill="#4ade80" />
        <text x="335" y="96" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" fill="#f3f4f6">
          Notes and past papers
        </text>
      </g>

      <!-- Bottom Status Bar -->
      <g transform="translate(0, 360)">
        <text x="0" y="20" font-family="monospace" font-size="13" font-weight="600" fill="#6ee7b7">
          www.amubatchx.app · Free · No ads
        </text>
      </g>
    </g>

    <!-- Right Side: Elevated App Emblem & Device Visual -->
    <g transform="translate(820, 110)">
      <!-- Outer Ring -->
      <rect x="0" y="0" width="320" height="320" rx="64" fill="rgba(18,24,20,0.85)" stroke="rgba(255,255,255,0.18)" stroke-width="2" />
      
      <!-- Logo image -->
      <image href="${logoDataUri}" x="30" y="30" width="260" height="260" preserveAspectRatio="xMidYMid slice" clip-path="url(#logoClip)" />
      
      <!-- App Store / Platform Badge Below Logo -->
      <rect x="30" y="350" width="260" height="54" rx="16" fill="rgba(15,81,43,0.3)" stroke="rgba(46,164,79,0.35)" stroke-width="1.2" />
      <text x="160" y="382" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700" fill="#ffffff" text-anchor="middle">
        Available on Android
      </text>
    </g>
  </svg>
  `;

  await sharp(Buffer.from(svgOg))
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));
  console.log('Created public/og-image.png (1200x630)');

  console.log('All branding and favicon assets generated successfully!');
}

generateBrandingAssets().catch(console.error);
