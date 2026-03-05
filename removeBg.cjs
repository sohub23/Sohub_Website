const sharp = require('sharp');

async function removeBackground() {
    const inputPath = 'src/assets/lights2.png';
    const outputPath = 'src/assets/lights2_transparent.png';

    try {
        const { data, info } = await sharp(inputPath)
            .ensureAlpha()
            .raw()
            .toBuffer({ resolveWithObject: true });

        const w = info.width;
        const h = info.height;
        const visited = new Uint8Array(w * h);

        // Use a TIGHT tolerance — only remove the exact background shade
        const tolerance = 30;

        // Sample bg from corners
        const bgR = data[0], bgG = data[1], bgB = data[2];
        console.log(`BG color: rgb(${bgR}, ${bgG}, ${bgB})`);

        function isBackground(idx) {
            const r = data[idx], g = data[idx + 1], b = data[idx + 2];
            return Math.abs(r - bgR) < tolerance &&
                Math.abs(g - bgG) < tolerance &&
                Math.abs(b - bgB) < tolerance;
        }

        // BFS flood fill from edges only
        const queue = [];
        for (let x = 0; x < w; x++) {
            queue.push(x);
            queue.push((h - 1) * w + x);
        }
        for (let y = 0; y < h; y++) {
            queue.push(y * w);
            queue.push(y * w + (w - 1));
        }
        for (const pos of queue) visited[pos] = 1;

        let head = 0;
        while (head < queue.length) {
            const pos = queue[head++];
            const idx = pos * 4;
            if (!isBackground(idx)) continue;
            data[idx + 3] = 0;

            const px = pos % w, py = Math.floor(pos / w);
            // Only 4-directional (no diagonals) to prevent leaking into product
            if (px > 0 && !visited[pos - 1]) { visited[pos - 1] = 1; queue.push(pos - 1); }
            if (px < w - 1 && !visited[pos + 1]) { visited[pos + 1] = 1; queue.push(pos + 1); }
            if (py > 0 && !visited[pos - w]) { visited[pos - w] = 1; queue.push(pos - w); }
            if (py < h - 1 && !visited[pos + w]) { visited[pos + w] = 1; queue.push(pos + w); }
        }

        await sharp(data, { raw: { width: w, height: h, channels: 4 } })
            .png()
            .toFile(outputPath);

        console.log('Done: ' + outputPath);
    } catch (err) {
        console.error('Error:', err);
    }
}

removeBackground();
