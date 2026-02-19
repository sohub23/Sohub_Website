const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const imagesToProcess = [
    { input: 'src/assets/Alo.png', output: 'src/assets/Alo_transparent.png' },
    { input: 'src/assets/pdlc.png', output: 'src/assets/pdlc_transparent.png' },
    { input: 'src/assets/Switch.png', output: 'src/assets/Switch_transparent.png' },
    { input: 'src/assets/light.png', output: 'src/assets/light_transparent.png' }
];

async function removeBackgroundSoftFlood(inputPath, outputPath) {
    try {
        const fullInputPath = path.join(__dirname, inputPath);
        const fullOutputPath = path.join(__dirname, outputPath);

        console.log(`Processing image: ${fullInputPath}`);

        const { data, info } = await sharp(fullInputPath)
            .ensureAlpha()
            .raw()
            .toBuffer({ resolveWithObject: true });

        const width = info.width;
        const height = info.height;
        const pixelArray = new Uint8ClampedArray(data.buffer);

        const getIdx = (x, y) => (y * width + x) * 4;

        // Background color (Top-Left)
        const startIdx = getIdx(0, 0);
        const bgR = pixelArray[startIdx];
        const bgG = pixelArray[startIdx + 1];
        const bgB = pixelArray[startIdx + 2];

        // Config - same as v3
        const solidThreshold = 50;

        const getDiff = (idx) => {
            const r = pixelArray[idx];
            const g = pixelArray[idx + 1];
            const b = pixelArray[idx + 2];
            return Math.max(
                Math.abs(r - bgR),
                Math.abs(g - bgG),
                Math.abs(b - bgB)
            );
        };

        const visited = new Uint8Array(width * height);
        const queue = [];

        // Start from corners
        const corners = [[0, 0], [width - 1, 0], [0, height - 1], [width - 1, height - 1]];

        for (const [cx, cy] of corners) {
            queue.push(cx, cy);
            visited[cy * width + cx] = 1;
        }

        let head = 0;
        while (head < queue.length) {
            const x = queue[head++];
            const y = queue[head++];
            const pIdx = getIdx(x, y);

            const diff = getDiff(pIdx);

            if (diff < solidThreshold) {
                let alpha = Math.floor((diff / solidThreshold) * 255);
                if (alpha < 10) alpha = 0;

                pixelArray[pIdx + 3] = alpha;

                const neighbors = [
                    { x: x + 1, y: y },
                    { x: x - 1, y: y },
                    { x: x, y: y + 1 },
                    { x: x, y: y - 1 }
                ];

                for (const n of neighbors) {
                    if (n.x >= 0 && n.x < width && n.y >= 0 && n.y < height) {
                        const vIdx = n.y * width + n.x;
                        if (visited[vIdx] === 0) {
                            visited[vIdx] = 1;
                            queue.push(n.x, n.y);
                        }
                    }
                }
            }
        }

        await sharp(pixelArray, {
            raw: { width, height, channels: 4 }
        })
            .png()
            .toFile(fullOutputPath);

        console.log(`Successfully created: ${fullOutputPath}`);

    } catch (error) {
        console.error(`Error processing ${inputPath}:`, error);
    }
}

async function processAll() {
    for (const img of imagesToProcess) {
        await removeBackgroundSoftFlood(img.input, img.output);
    }
}

processAll();
