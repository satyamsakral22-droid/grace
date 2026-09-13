const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/data/galleryData.ts');
let content = fs.readFileSync(file, 'utf8');

// Replace all mainMedia image paths with high quality industrial unsplash images
const mainImages = [
  'https://images.unsplash.com/photo-1473644030615-5452b4122d43?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1541888086225-f6411516e534?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1581092334246-88005ebf36b6?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1621683416434-601e3b5e4367?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1533036495147-380d60c41065?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1620803450947-6953c829e05f?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1574689211272-bc1510bbfdce?auto=format&fit=crop&q=80'
];

const factoryImages = [
  'https://images.unsplash.com/photo-1580983538466-419b48f95c47?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1565515267675-5da3097bf5d1?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1504307651254-35680f356f27?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1531627993046-e57b32230b50?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80'
];

let mCount = 0;
content = content.replace(/"path": "\/main\/[^"]+"/g, () => {
  const url = mainImages[mCount % mainImages.length];
  mCount++;
  return `"path": "${url}"`;
});

let fCount = 0;
content = content.replace(/"path": "\/factory\/[^"]+"/g, (match) => {
  if (match.includes('.mp4')) return match;
  const url = factoryImages[fCount % factoryImages.length];
  fCount++;
  return `"path": "${url}"`;
});

fs.writeFileSync(file, content);
console.log('Successfully updated galleryData.ts with professional Unsplash URLs.');
