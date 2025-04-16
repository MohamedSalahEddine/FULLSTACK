const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")
const body_parser = require("body-parser")

const router_index = require('./routes/main_router')
const author_router = require('./routes/author_router')
app.set("view engine" ,"ejs")
app.set('views', __dirname+"/views")
app.set('layout', "layouts/layout")


const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/biblio")
const db = mongoose.connection
db.on("error", error => console.log(error))
db.once("open", ()=> console.log("connected to db"))

app.use(expressLayouts)
app.use(express.static("public"))
app.use(body_parser.urlencoded({limit:"10mb", extended:false}))
app.use("/", router_index)
app.use("/authors", author_router)



app.listen(3000)