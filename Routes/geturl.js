const express = require("express")
const getUrlFromDB = require("../src/GetUrlFromDB")
const router = express.Router();

router.get('/:url', (req, res) => {
    console.log("get url is called for", req.params.url);
    let val = getUrlFromDB.getUrl(req.params.url);
    res.send(val);
})

module.exports = router;