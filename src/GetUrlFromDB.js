const urlDB = require('./GlobalVariable');

function getUrl(key){
    return urlDB.getValue(key);
}


module.exports = {getUrl};
