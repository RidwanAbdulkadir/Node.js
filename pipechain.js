//working with pipe and pipes chain
const fs = require('fs')
const zlib = require('zlib') //helps in compression, compresses files
const gungzip = zlib.createGunzip()
const readStream = fs.createReadStream('./sample2.txt.gz',)
const writeStream = fs.createWriteStream('uncompressed.txt')
readStream.pipe(gungzip).pipe(writeStream)




