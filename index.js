const express = require('express')
const Blog = require("./db/blogPost")
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const app = express()
const data = require("./connect")

data.connectMongoDB();

app.get('/',function(req,res){
    res.send('Hello World')
})
app.get('/',function(req,res){
    res.send('Hello World,This is Karthik')

})

let newblog = new Blog({
    author: "Karthik",
    title: "Sample",
    body: "Demo",
    date: new Date()
})

BlogPost =mongoose.model(blog,'BlogPost');

newblog.save();

app.listen(3000,()=>{
    ('listening on port 3000');
})


