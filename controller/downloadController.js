const downloads = require('../model/downloadModel')

// add to downloads
exports.addToDownloadController = async(req,res)=>{
    console.log("Inside addToDownloadController");
    const {id} = req.params
    const userMail = req.payload
    const {name,cuisine,image} = req.body
    try{
        const existingRecipe = await downloads.findOne({recipeId:id})
        if(existingRecipe){
            // increment count
            existingRecipe.count += 1
            await existingRecipe.save()
            res.status(200).json(existingRecipe)
        }else{
            // add to model
            const newRecipe = await downloads.create({
                recipeId:id,name,cuisine,image,count:1,userMail
            })
            res.status(200).json(newRecipe)
        }
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }

    
}

// get user download list
exports.getUserDownloadListController = async(req,res)=>{
    console.log("Inside getUserDownloadListController");
    const userMail = req.payload
    try{
        const allUserRecipes = await downloads.find({userMail})
       res.status(200).json(allUserRecipes)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
    
    
}
