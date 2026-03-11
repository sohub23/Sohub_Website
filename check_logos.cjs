const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function checkSize(file) {
  const p = path.resolve(__dirname, 'src/assets', file);
  if (fs.existsSync(p)) {
    const meta = await sharp(p).metadata();
    console.log(`${file}: ${meta.width}x${meta.height}`);
  } else {
    console.log(`Not found: ${file}`);
  }
}

(async () => {
    console.log('--- Navbar Logos ---');
    await checkSize('protect.png');
    await checkSize('emp.png');
    await checkSize('Home_cropped.png');
    await checkSize('sohub-connect.png');

    console.log('--- Carousel Logos ---');
    await checkSize('carousel/protect-carousel.png');
    await checkSize('carousel/ai-carousel.png');
    await checkSize('carousel/emp-carousel.png');
    await checkSize('carousel/controls-navbar.png');
})();
