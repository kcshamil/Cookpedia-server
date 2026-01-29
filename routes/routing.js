const express = require('express')
const recipeController = require('../controller/recipeController')
const userController = require('../controller/userController')
const downloadController = require('../controller/downloadController')
const jwtMiddleware = require('../middleware/jwtMiddleware')
const saveController = require('../controller/saveController')
const feedbackController = require('../controller/feedbackController')

const router = new express.Router()

// get all recipes
router.get('/recipes', recipeController.getAllRecipesController)
// register
router.post('/register', userController.registerController)
// login
router.post('/login', userController.loginController)

// add feedback
router.post('/feedback',feedbackController.addFeedbacksController)
// ---------------Authorised user----------------
// view recipe
router.get('/recipes/:id', recipeController.viewRecipeController)
// get related recipe
router.get('/related-recipes', recipeController.relatedRecipesRecipeController )
// addtodownload
router.post('/downloads/:id', jwtMiddleware,downloadController.addToDownloadController )
// saveRecipe
router.post('/recipes/:id/save', jwtMiddleware,saveController.addToSaveRecipeController )
// get user save recipe
router.get('/recipe-collection', jwtMiddleware,saveController.getUserSaveRecipesController )
// remove user save recipe
//remove user save  recipe item
router.delete('/recipe-collection/:id',jwtMiddleware,saveController.removeUserRecipeItemController)

// get user download recipe list
router.get('/user-downloads',jwtMiddleware,downloadController.getUserDownloadListController )

module.exports = router
