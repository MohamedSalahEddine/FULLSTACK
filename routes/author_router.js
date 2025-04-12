const express = require("express")
const author_router = express.Router()

author_router.get("/", (req, res)=>{
    res.render("authors/authors")
})
author_router.get("/new_author", (req, res)=>{
    res.render("authors/new_author")
})

module.exports = author_router;
