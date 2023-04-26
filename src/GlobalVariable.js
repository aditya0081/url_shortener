const urlDB = new Map();
var count =0;
var limit = 100;


function setValue(key, value){
    urlDB.set(key,value);
}

function getValue(key){
    return urlDB.get(key);
}

function getCounter(){
  if(count<limit)
    return count++;
  limit = getNewLimit();
  return count++;
}

function getNewLimit(){
    return limit + 1000;
}

module.exports = {setValue, getValue, getCounter};