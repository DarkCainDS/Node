const  sharp = require('sharp');

sharp('carbon (1)-b60b0665-a825-4b37-9086-f3ff228f0759.webp')
    .resize(1200)
    .grayscale()
    .toFile('resized.png')