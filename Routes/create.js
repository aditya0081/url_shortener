const express = require("express")
const createUrl = require('../src/CreateNewUrl')
const router = express.Router();

router.get('/:url', (req, res)=>{
    let val = createUrl.insertUrl(req.params.url);
    console.log(val);
    res.send(val);
})




module.exports = router