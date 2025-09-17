import express from "express";

const Route = express.Router()

//R - Reading
Route.get("/sample",(req ,res)=>{
    res.send("Gat all")
})

//C - creating
Route.post("/sample",(req,res)=>{
    res.send("Create all")
})
//U - updating
Route.put("/sample/:id",(req,res)=>{
    res.send("Update")
})
//D - deleting
Route.delete("/sample/:id",(req,res)=>{
    res.send("delete")
})

export default Route;
