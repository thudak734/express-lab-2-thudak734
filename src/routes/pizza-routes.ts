import express from "express";
import Pizza from "../models/Pizza";
const pizzaRoutes = express.Router();

const specialtyPizzaArray: Pizza[] =[
    {id: 1, name: "Anchovy+Lover's", price: 10},
    {id: 2, name: "Paleo Pizza", price: 12},
    {id: 3, name: "Dessert Pizza", price: 13}
]

let nextId : number = 4

pizzaRoutes.get("/", function (req,res){
    res.render('home');
});

pizzaRoutes.get("/review", function (req,res){
    res.render('review');
});

pizzaRoutes.get("/build-pizza", function (req,res){
    res.render('build-pizza');
});

pizzaRoutes.post("/submitReview", function (req,res){
    let name: string = req.body.name as string;
    let comment: string = req.body.comment as string;
    let rating: string = req.body.rating as string;
    
    res.render('review-thank', {name, comment, rating});
})

pizzaRoutes.get("/specialtyPizza", function (req, res){
    let pizzaName: string = req.query.name as string;
    let pizzaPrice: number = Number (req.query.price);
    res.render("specialty-pizza", {pizzaName, pizzaPrice})

});

export default pizzaRoutes

