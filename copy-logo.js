
import fs from 'fs';
import path from 'path';

const sourcePath = path.join(process.cwd(), 'docs', 'public', 'logo.png');
const destPath = path.join(process.cwd(), 'html', 'logo.png');

try {
  fs.copyFileSync(sourcePath, destPath);
  console.log('Logo copied successfully!');
} catch (err) {
  console.error('Error copying logo:', err);
}
