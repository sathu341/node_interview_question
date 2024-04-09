//npm init or npm init -y
//npm install express
const express=require('express')
const app=express()

//routes
app.get("/",(req,res)=>{
    res.send("Hello Expressjs")
})
app.get("/about",(req,res)=>{
    res.send("About page is running")
})
app.get("/product/:id",(req,res)=>{
    const prdid=req.params.id
    res.send(prdid)
})
app.get("/user",(req,res)=>{
    const user=req.query.search
    res.send(user)
})
app.listen(8081,function(){
    console.log("server running port:8081")
})
