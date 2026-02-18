const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, 'src/assets/protect2.png');
const outputPath = path.join(__dirname, 'src/assets/protect2_transparent.png');

async function removeBackground() {
    try {
        console.log(`Processing image: ${inputPath}`);

        // Read image metadata to check access
        const metadata = await sharp(inputPath).metadata();
        console.log(`Image dimensions: ${metadata.width}x${metadata.height}`);

        // Simple approach: Convert near-white pixels to transparent
        // Using a threshold to catch off-white
        await sharp(inputPath)
            .ensureAlpha() // Ensure alpha channel exists
            .raw()
            .toBuffer({ resolveWithObject: true })
            .then(async ({ data, info }) => {
                const pixelArray = new Uint8ClampedArray(data.buffer);
                const threshold = 240; // High threshold for white (0-255)

                for (let i = 0; i < pixelArray.length; i += 4) {
                    const r = pixelArray[i];
                    const g = pixelArray[i + 1];
                    const b = pixelArray[i + 2];

                    // Check if pixel is white-ish
                    if (r > threshold && g > threshold && b > threshold) {
                        // Set alpha to 0 (transparent)
                        pixelArray[i + 3] = 0;
                    }
                }

                // Write back to a new file
                await sharp(pixelArray, {
                    raw: {
                        width: info.width,
                        height: info.height,
                        channels: 4
                    }
                })
                    .png()
                    .toFile(outputPath);

                console.log(`Successfully created transparent image at: ${outputPath}`);
            });

    } catch (error) {
        console.error('Error processing image:', error);
    }
}

removeBackground();
