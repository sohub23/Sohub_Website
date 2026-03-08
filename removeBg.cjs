const sharp = require('sharp');

async function removeBackground() {
    const inputPath = 'src/assets/sohub-snacks-BxzlzZkJ.png';
    const outputPath = 'src/assets/sohub-snacks-transparent.png';

    try {
        const { data, info } = await sharp(inputPath)
            .ensureAlpha()
            .raw()
            .toBuffer({ resolveWithObject: true });

        const w = info.width;
        const h = info.height;
        const visited = new Uint8Array(w * h);

        // The background is a warm cream/beige: R~240-255, G~235-250, B~225-245
        // The product has darker blues (90-170), browns (200-250 but lower B), blacks, etc.
        // Key: background pixels are ALL warm (R > G > B) and very light (all channels > 220)
        function isBackgroundColor(idx) {
            const r = data[idx], g = data[idx + 1], b = data[idx + 2];
            // Must be very light
            if (r < 215 || g < 210 || b < 200) return false;
            // Must be warm-toned (R >= G >= B roughly)
            if (r < g - 5) return false;
            if (g < b - 5) return false;
            return true;
        }

        // BFS flood fill from edges, only spreading through background-colored pixels
        const queue = [];
        // Seed all 4 edges
        for (let x = 0; x < w; x++) {
            const top = x;
            const bottom = (h - 1) * w + x;
            if (!visited[top]) { visited[top] = 1; queue.push(top); }
            if (!visited[bottom]) { visited[bottom] = 1; queue.push(bottom); }
        }
        for (let y = 0; y < h; y++) {
            const left = y * w;
            const right = y * w + (w - 1);
            if (!visited[left]) { visited[left] = 1; queue.push(left); }
            if (!visited[right]) { visited[right] = 1; queue.push(right); }
        }

        let head = 0;
        while (head < queue.length) {
            const pos = queue[head++];
            const idx = pos * 4;

            if (!isBackgroundColor(idx)) continue;

            // Mark transparent
            data[idx + 3] = 0;

            const px = pos % w, py = Math.floor(pos / w);
            // 4-directional spread
            if (px > 0 && !visited[pos - 1]) { visited[pos - 1] = 1; queue.push(pos - 1); }
            if (px < w - 1 && !visited[pos + 1]) { visited[pos + 1] = 1; queue.push(pos + 1); }
            if (py > 0 && !visited[pos - w]) { visited[pos - w] = 1; queue.push(pos - w); }
            if (py < h - 1 && !visited[pos + w]) { visited[pos + w] = 1; queue.push(pos + w); }
        }

        // Soft edge feathering
        const featherData = Buffer.from(data);
        for (let y = 1; y < h - 1; y++) {
            for (let x = 1; x < w - 1; x++) {
                const idx = (y * w + x) * 4;
                if (data[idx + 3] !== 0) {
                    let transparentNeighbors = 0;
                    if (data[idx - 4 + 3] === 0) transparentNeighbors++;
                    if (data[idx + 4 + 3] === 0) transparentNeighbors++;
                    if (data[idx - w * 4 + 3] === 0) transparentNeighbors++;
                    if (data[idx + w * 4 + 3] === 0) transparentNeighbors++;
                    if (transparentNeighbors >= 1) {
                        featherData[idx + 3] = transparentNeighbors >= 3 ? 80 : 180;
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
