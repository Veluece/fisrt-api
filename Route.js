import express from "express";
import {MovieCreate, MovieDelete, MovieIndex, MovieUpdate} from "../fisrt-api/controller/controller.js"

const Route = express.Router()

//R - Reading
Route.get("/",MovieIndex);
//C - creating
Route.post("/",MovieCreate);
//U - updating
Route.put("/:id",MovieUpdate);
//D - deleting
Route.delete("/:id",MovieDelete);

export default Route;
