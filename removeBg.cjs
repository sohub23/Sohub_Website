const sharp = require('sharp');

async function removeBackground() {
    const inputPath = 'src/assets/unwatermarked_lights.png';
    const outputPath = 'src/assets/unwatermarked_lights_transparent.png';

    try {
        const { data, info } = await sharp(inputPath)
            .ensureAlpha()
            .raw()
            .toBuffer({ resolveWithObject: true });

        // Create a new buffer with the modified pixels
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            // If the pixel is very close to white, make it transparent
            if (r > 240 && g > 240 && b > 240) {
                data[i + 3] = 0; // Make alpha 0
            } else if (r > 200 && g > 200 && b > 200) {
                // Soften edges dynamically by reducing opacity based on whiteness
                const average = (r + g + b) / 3;
                const opacity = Math.max(0, 255 - ((average - 200) * 4.6)); // 255 -> 0
                data[i + 3] = Math.min(data[i + 3], Math.floor(opacity));
            }
        }

        await sharp(data, {
            raw: {
                width: info.width,
                height: info.height,
                channels: 4,
            }
        })
            .png()
            .toFile(outputPath);

        console.log('Successfully created ' + outputPath);
    } catch (err) {
        console.error('Error processing image:', err);
    }
}

removeBackground();
