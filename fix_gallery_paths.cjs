// Script to update galleryData.ts to use local file paths
// Run: node fix_gallery_paths.cjs

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/galleryData.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Strategy: for each media item, replace the Unsplash "path" with the local path
// based on folder and rawFilename fields
// Pattern: "path": "https://...", followed somewhere by "rawFilename": "...", "folder": "..."

// We'll do a regex replace that finds each object and fixes its path
// The order in each object is: id, title, path, rawFilename, folder

// Replace unsplash paths for main folder items
content = content.replace(
  /"path":\s*"https:\/\/[^"]+",(\s*"rawFilename":\s*"([^"]+)",\s*"folder":\s*"(main|factory)")/g,
  (match, rest, rawFilename, folder) => {
    const localPath = `/${folder}/${rawFilename}`;
    return `"path": "${localPath}",${rest}`;
  }
);

// Also handle factory video - find the video entries
// Videos in factory folder have type "video"
// The factory video is: Annexure- K  Video M&P.mp4

fs.writeFileSync(filePath, content, 'utf-8');
console.log('✅ galleryData.ts paths updated to local files!');
console.log('Preview of changes made to first few entries...');

// Show first few path entries
const lines = content.split('\n');
let shown = 0;
for (const line of lines) {
  if (line.includes('"path":') && shown < 10) {
    console.log(' ', line.trim());
    shown++;
  }
}
