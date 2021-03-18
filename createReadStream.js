const fs = require('fs');
const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 });

const data = [];
readStream.on('data', (aa) => {
    data.push(aa);
    console.log('data:', aa, aa.length);
});
readStream.on('end', () => {
    console.log('end:', Buffer.concat(data).toString());
});
readStream.on('error', (err) => {
    console.log('error:', err);
});

