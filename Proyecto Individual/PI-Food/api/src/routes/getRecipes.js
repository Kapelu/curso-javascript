const { Router } = require("express");
const { getALLRecipes } = require("../controllers/recipes");
const {Recipe,TypeDiet} = require('../db');

const router = Router();


router.get("/", async (req, res) => {

    const { name } = req.query;
    let allInfo = await getALLRecipes();
    
    if (name) {
        try {
        let filteredRecipe = await allInfo.filter((e) =>
            e.name.toLowerCase().includes(name.toLowerCase())
        );
        filteredRecipe.length
            ? res.status(200).send(filteredRecipe)
            : res.status(404).send("Não achamos receita com esse nome");
        } catch (error) {
        return res.status(400).send("Deu errado");
        }
    } else {
        res.send(allInfo);
    }
    });




router.get("/:id", async (req, res) => {

    try {
        const { id } = req.params;
        const recipesTotal = await getALLRecipes();
        if (id) {
            let recipeId = await recipesTotal.filter((r) => r.id == id);
            if(recipeId.length) res.status(200).json(recipeId)  
    } }catch (error) {
        res.status(404).send(error,"Não achamos essa receita");
    }
    
    
    
});
    
module.exports = router;    