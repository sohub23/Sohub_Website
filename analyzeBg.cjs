const sharp = require('sharp');

async function analyze() {
    const { data, info } = await sharp('src/assets/switch (1).png')
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });

    const y = 800;
    for (let x = 0; x < info.width; x += 50) {
        const idx = (y * info.width + x) * 4;
        console.log(`x=${x}: rgb(${data[idx]}, ${data[idx + 1]}, ${data[idx + 2]})`);
    }
}

analyze();
