const express = require('express')
const recipeController = require('../controller/recipeController')
const userController = require('../controller/userController')
const downloadController = require('../controller/downloadController')
const jwtMiddleware = require('../middleware/jwtMiddleware')

const router = new express.Router()

// get all recipes
router.get('/recipes', recipeController.getAllRecipesController)
// register
router.post('/register', userController.registerController)
// login
router.post('/login', userController.loginController)

// ---------------Authorised user----------------
// view recipe
router.get('/recipes/:id', recipeController.viewRecipeController)
// get related recipe
router.get('/related-recipes', recipeController.relatedRecipesRecipeController )
// addtodownload
router.post('/downloads/:id', jwtMiddleware,downloadController.addToDownloadController )


module.exports = router
