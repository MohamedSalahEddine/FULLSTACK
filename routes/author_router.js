const express = require("express")
const author_router = express.Router()
const Author = require('../modals/author')

author_router.get("/", async (req, res)=>{
    res.render("authors/authors")
    // if(req.query.f_name != null && req.query.f_name != ""){
    //     search_options.name = req.query.f_name
    // }
    // let search_options = {}
    // let all_authors = null;
    // try{
    //     all_authors = await Author.find(search_options)
    //     res.render("authors/authors", {all_authors : all_authors})
        
    // }catch{
    //     res.render("authors/authors", {
    //         error_message : "cannot find author by the name "+req.query.f_name
    //     })
    // }
})
author_router.get("/new_author", (req, res)=>{
    res.render("authors/new_author", {author: new Author()})
})
author_router.post("/", async (req, res)=>{
    // res.send("creating " + req.body.f_name)
    const author = new Author({
        name : req.body.f_name
    })
    try{
        const new_author = await author.save()
        // res.redirect(`authors/${new_author.id}`)
        res.redirect("/authors")
    }catch{
        res.render("authors/new_author",{
            error_message : "an error happened while creating the author",
            author : author
        })
    }  
})

module.exports = author_router;
