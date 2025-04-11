const express = require("express")
const router_index = express.Router()

router_index.get('/', (req, res)=>{
    res.render("index")
})

module.exports = router_index