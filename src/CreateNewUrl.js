const urlDB = require('./GlobalVariable');


function insertUrl(url){
    hashValue = getHash();
    urlDB.setValue(hashValue, url);
    return hashValue;
}


function getHash(){
    let count = urlDB.getCounter();
    let buffer = Buffer.from(count.toString())
    return  buffer.toString('base64')
}

module.exports = {insertUrl};
