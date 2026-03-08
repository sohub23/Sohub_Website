const sharp = require('sharp');

async function analyze() {
    const { data, info } = await sharp('src/assets/sohub-snacks-BxzlzZkJ.png')
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });

    console.log("Image size:", info.width, "x", info.height);

    // Sample corners
    const corners = [
        [0, 0], [info.width - 1, 0], [0, info.height - 1], [info.width - 1, info.height - 1]
    ];
    for (const [x, y] of corners) {
        const idx = (y * info.width + x) * 4;
        console.log(`Corner (${x},${y}): rgb(${data[idx]}, ${data[idx + 1]}, ${data[idx + 2]})`);
    }

    // Horizontal scan at y=100 (near top)
    console.log("\n--- Horizontal at y=100 ---");
    for (let x = 0; x < info.width; x += 50) {
        const idx = (100 * info.width + x) * 4;
        console.log(`x=${x}: rgb(${data[idx]}, ${data[idx + 1]}, ${data[idx + 2]})`);
    }

    // Horizontal scan at y=512 (middle)
    console.log("\n--- Horizontal at y=512 ---");
    for (let x = 0; x < info.width; x += 50) {
        const idx = (512 * info.width + x) * 4;
        console.log(`x=${x}: rgb(${data[idx]}, ${data[idx + 1]}, ${data[idx + 2]})`);
    }
}

analyze();
