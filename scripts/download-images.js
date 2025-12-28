const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
    { name: 'menu-item-1.png', url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop' },
    { name: 'menu-item-2.png', url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop' },
    { name: 'menu-item-3.png', url: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800&auto=format&fit=crop' },
    { name: 'menu-item-4.png', url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop' },
    { name: 'menu-thumb.png', url: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=800&auto=format&fit=crop' },
    { name: 'about-1.png', url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop' },
    { name: 'about-2-retry.png', url: 'https://images.unsplash.com/photo-1529312266912-b33cf6227e2f?q=80&w=800&auto=format&fit=crop' },
    { name: 'about-3.png', url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop' },
    { name: 'about-4.png', url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop' },
];

const destDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

images.forEach(img => {
    const file = fs.createWriteStream(path.join(destDir, img.name));
    https.get(img.url, function (response) {
        response.pipe(file);
        file.on('finish', function () {
            file.close(() => console.log('Downloaded ' + img.name));
        });
    }).on('error', function (err) {
        fs.unlink(path.join(destDir, img.name));
        console.error('Error downloading ' + img.name, err.message);
    });
});
