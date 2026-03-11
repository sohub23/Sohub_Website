const sharp = require('sharp');
const fs = require('fs');

async function createSohubAILogos() {
    // Navbar version: 300x170, fit contain, transparent background
    await sharp('src/assets/sohub_ai.png')
        .resize(300, 170, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toFile('src/assets/sohub-ai-navbar.png');

    // Carousel version
    // First let's check what other carousel items look like.
    // carousel/emp-carousel.png is 300x111. Let's make AI carousel 300x(width-matched), or maybe 300x111 contain.
    await sharp('src/assets/sohub_ai.png')
        .resize(300, null)
        .toFile('src/assets/carousel/ai-carousel.png');

    console.log('Created sohub-ai-navbar.png and updated carousel/ai-carousel.png');
}

createSohubAILogos().catch(console.error);
