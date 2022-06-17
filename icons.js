const icongen = require('icon-gen')
const fs = require('fs')

const options = {
    report: true,
    ico: {
        name: 'app',
        sizes: [16, 24, 32, 48, 64, 128, 256]
    },
    icns: {
        name: 'app',
        sizes: [16, 32, 64, 128, 256, 512, 1024]
    },
    favicon: {
        name: 'favicon-',
        pngSizes: [32, 57, 72, 96, 120, 128, 144, 152, 195, 228],
        icoSizes: [16, 24, 32, 48, 64]
    }
}

icongen('./public/pdz.png', './public/icons', options)
    .then((results) => {
        console.log(results)
        // move public/newicons/favicon.ico to public/favicon.ico
        fs.renameSync('./public/icons/favicon.ico', './public/favicon.ico')
    })
    .catch((err) => {
        console.error(err)
    })
