const fs = require('fs');
const path = require('path');
const dir1 = 'd:/Razin/Sohub-Website-Final/sohup-foundations/src/components/sections';
const dir2 = 'd:/Razin/Sohub-Website-Final/sohup-foundations/src/pages';

const processFile = (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace all h2 specific sizing class combos with text-[48px]
    const updatedContent = content.replace(/<h2(.*?)className=["'](.*?)["']/g, (match, prefix, className) => {
        // remove existing sizing classes
        let newClass = className.replace(/\b(text-3xl|text-4xl|text-5xl|text-6xl|text-7xl|sm:text-4xl|sm:text-5xl|md:text-4xl|md:text-5xl|lg:text-5xl|lg:text-\[45px\]|text-\[32px\]|text-\[36px\]|md:text-\[40px\]|md:text-\[44px\]|text-heading-2|text-headline)\b/g, '').trim();
        // replace multiple spaces with single
        newClass = newClass.replace(/\s+/g, ' ');
        // add text-[48px] if not present
        if (!newClass.includes('text-[48px]')) {
            newClass = `text-[48px] ${newClass}`;
        }
        return `<h2${prefix}className="${newClass.trim()}"`;
    });

    if (content !== updatedContent) {
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`Updated ${filePath}`);
    }
};

fs.readdirSync(dir1).filter(f => f.endsWith('.tsx')).forEach(file => processFile(path.join(dir1, file)));
fs.readdirSync(dir2).filter(f => f.endsWith('.tsx')).forEach(file => processFile(path.join(dir2, file)));

console.log('Update complete.');
