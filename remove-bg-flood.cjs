const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'src/assets/protect2.png');
const outputPath = path.join(__dirname, 'src/assets/protect2_transparent_v2.png');

async function removeBackgroundFloodFill() {
    try {
        console.log(`Processing image: ${inputPath}`);

        const { data, info } = await sharp(inputPath)
            .ensureAlpha()
            .raw()
            .toBuffer({ resolveWithObject: true });

        const width = info.width;
        const height = info.height;
        const pixelArray = new Uint8ClampedArray(data.buffer);

        // Helper to get pixel index
        const getIdx = (x, y) => (y * width + x) * 4;

        // Get background color from top-left pixel (0,0)
        const startIdx = getIdx(0, 0);
        const bgR = pixelArray[startIdx];
        const bgG = pixelArray[startIdx + 1];
        const bgB = pixelArray[startIdx + 2];

        // Threshold for color matching (avoid slight compression artifacts)
        const tolerance = 20;

        const isMatch = (idx) => {
            const r = pixelArray[idx];
            const g = pixelArray[idx + 1];
            const b = pixelArray[idx + 2];
            // Check if pixel is close to background color AND is not already transparent
            // Also treating near-white as background if background is white
            return (
                Math.abs(r - bgR) <= tolerance &&
                Math.abs(g - bgG) <= tolerance &&
                Math.abs(b - bgB) <= tolerance &&
                pixelArray[idx + 3] !== 0
            );
        };

        // Queue for BFS
        // Storing indices directly might be more efficient or x,y coords
        // Using a 1D visited array to avoid cycles
        const visited = new Uint8Array(width * height);
        // Start positions: All 4 corners if they are background color
        const queue = [];

        const corners = [[0, 0], [width - 1, 0], [0, height - 1], [width - 1, height - 1]];

        for (const [cx, cy] of corners) {
            const idx = getIdx(cx, cy);
            if (isMatch(idx)) {
                queue.push(cx, cy);
                visited[cy * width + cx] = 1;
                pixelArray[idx + 3] = 0; // Make transparent immediately
            }
        }

        // BFS
        let head = 0;
        while (head < queue.length) {
            const x = queue[head++];
            const y = queue[head++];

            // Check 4 neighbors
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
                        const pIdx = getIdx(n.x, n.y);
                        if (isMatch(pIdx)) {
                            visited[vIdx] = 1;
                            pixelArray[pIdx + 3] = 0; // Make transparent
                            queue.push(n.x, n.y);
                        }
                    }
                }
            }
        }

        // Write back to a new file
        await sharp(pixelArray, {
            raw: {
                width: width,
                height: height,
                channels: 4
            }
        })
            .png()
            .toFile(outputPath);

        console.log(`Successfully created transparent image at: ${outputPath}`);

    } catch (error) {
        console.error('Error processing image:', error);
    }
}

removeBackgroundFloodFill();
