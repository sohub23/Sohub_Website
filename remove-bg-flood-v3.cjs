const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'src/assets/protect2.png');
const outputPath = path.join(__dirname, 'src/assets/protect2_transparent_v3.png');

async function removeBackgroundSoftFlood() {
    try {
        console.log(`Processing image: ${inputPath}`);

        const { data, info } = await sharp(inputPath)
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

        // Config
        const solidThreshold = 50; // Diff > 50 is solid foreground
        // Diff 0-50 is semi-transparent shadow/transition

        // Calculate visual difference (Euclidean distance or max diff)
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

            // Process current pixel
            const diff = getDiff(pIdx);

            if (diff < solidThreshold) {
                // It is background or shadow
                // Calculate Alpha
                // If diff is 0 (pure bg), alpha is 0
                // If diff is 50 (threshold), alpha is 255 (solid)
                // Linear ramp: alpha = (diff / threshold) * 255

                let alpha = Math.floor((diff / solidThreshold) * 255);

                // Optional: Make it slightly non-linear for better shadow falloff
                // alpha = Math.pow(diff / solidThreshold, 1.5) * 255;

                // Set pixel
                if (alpha < 10) alpha = 0; // Clean up noise

                pixelArray[pIdx + 3] = alpha;

                // Propagate to neighbors IF we are still in the "background/shadow" region
                // i.e., we treat anything < solidThreshold as traversable "background" space

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
            } else {
                // Hit a solid edge, stop propagating
                // Pixel stays original (Alpha 255)
            }
        }

        await sharp(pixelArray, {
            raw: { width, height, channels: 4 }
        })
            .png()
            .toFile(outputPath);

        console.log(`Successfully created soft-transparent image at: ${outputPath}`);

    } catch (error) {
        console.error('Error processing image:', error);
    }
}

removeBackgroundSoftFlood();
