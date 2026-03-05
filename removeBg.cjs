const sharp = require('sharp');

async function removeBackground() {
    const inputPath = 'src/assets/switch (1).png';
    const outputPath = 'src/assets/switch_1_transparent.png';

    try {
        const { data, info } = await sharp(inputPath)
            .ensureAlpha()
            .raw()
            .toBuffer({ resolveWithObject: true });

        const w = info.width;
        const h = info.height;
        const visited = new Uint8Array(w * h);

        // Region growing algorithm
        // Only spread if the difference between the current pixel and the neighbor is small.
        const gradientTolerance = 8;

        const queue = [];

        // Push top edge
        for (let x = 0; x < w; x++) {
            queue.push(x);
            visited[x] = 1;
        }
        // Push left and right edges
        for (let y = 0; y < h; y++) {
            if (!visited[y * w]) {
                queue.push(y * w);
                visited[y * w] = 1;
            }
            if (!visited[y * w + (w - 1)]) {
                queue.push(y * w + (w - 1));
                visited[y * w + (w - 1)] = 1;
            }
        }

        // NOT pushing the bottom edge, because the shelf touches the bottom edge.
        // Wait, the shelf is at the bottom, so if we push bottom edge, it'll delete the shelf!

        function colorDiff(idx1, idx2) {
            return Math.abs(data[idx1] - data[idx2]) +
                Math.abs(data[idx1 + 1] - data[idx2 + 1]) +
                Math.abs(data[idx1 + 2] - data[idx2 + 2]);
        }

        let head = 0;
        while (head < queue.length) {
            const pos = queue[head++];
            const idx = pos * 4;

            // Mark as transparent
            data[idx + 3] = 0;

            const px = pos % w, py = Math.floor(pos / w);

            // Check neighbors
            const neighbors = [pos - 1, pos + 1, pos - w, pos + w];
            const pxs = [px - 1, px + 1, px, px];
            const pys = [py, py, py - 1, py + 1];

            for (let i = 0; i < 4; i++) {
                const nPos = neighbors[i];
                const nx = pxs[i];
                const ny = pys[i];

                if (nx >= 0 && nx < w && ny >= 0 && ny < h && !visited[nPos]) {
                    const nIdx = nPos * 4;
                    // Check if adjacent pixel is similar enough to current pixel
                    // Max difference across RGB channels combined
                    if (colorDiff(idx, nIdx) <= gradientTolerance * 3) {
                        visited[nPos] = 1;
                        queue.push(nPos);
                    }
                }
            }
        }

        // Apply feathering to soften the jagged edges
        // Only run this on pixels bordering transparency
        const featherData = Buffer.from(data);
        for (let y = 1; y < h - 1; y++) {
            for (let x = 1; x < w - 1; x++) {
                const idx = (y * w + x) * 4;
                if (data[idx + 3] !== 0) { // If it's solid
                    if (data[idx - 4 + 3] === 0 || data[idx + 4 + 3] === 0 || data[idx - w * 4 + 3] === 0 || data[idx + w * 4 + 3] === 0) {
                        featherData[idx + 3] = 128; // Soften edge
                    }
                }
            }
        }

        await sharp(featherData, { raw: { width: w, height: h, channels: 4 } })
            .png()
            .toFile(outputPath);

        console.log('Done: ' + outputPath);
    } catch (err) {
        console.error('Error:', err);
    }
}

removeBackground();
