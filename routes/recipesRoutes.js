// Middlewares
const recipesRoutes = require('express').Router();
const urlencoded = require('body-parser').urlencoded({ extended: false });
const asyncHandler = require('../app/middlewares/asyncHandler');
const { uploadFile } = require('../app/middlewares/multerHandler');
const { authorizationTokenHandler } = require('../app/middlewares/tokenHandler');

// Controllers
const { addRecipe, getRecipes, getDetailRecipe, getNewestRecipe, deleteRecipe, editRecipe, searchRecipeByName } = require('../app/controllers/recipesControllers');

const multerFields = uploadFile.fields([{ name: 'recipePicture', maxCount: 1 }, { name: 'recipeVideo', maxCount: 4 }]);

// Routes Endpoint and Controllers
recipesRoutes.get('/recipes', authorizationTokenHandler, asyncHandler(getRecipes))
  .post('/recipes', authorizationTokenHandler, multerFields, asyncHandler(addRecipe))
  .patch('/recipes', authorizationTokenHandler, multerFields, asyncHandler(editRecipe))
  .delete('/recipes', authorizationTokenHandler, urlencoded, asyncHandler(deleteRecipe));

recipesRoutes.post('/recipes/detail', authorizationTokenHandler, urlencoded, asyncHandler(getDetailRecipe));

recipesRoutes.get('/recipes/new-recipe', authorizationTokenHandler, asyncHandler(getNewestRecipe));
recipesRoutes.get('/recipes/search/:title', authorizationTokenHandler, asyncHandler(searchRecipeByName));

module.exports = recipesRoutes;
