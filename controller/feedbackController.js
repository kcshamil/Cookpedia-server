const feedbacks = require('../model/feedbackModel')

//add to feedback
exports.addFeedbacksController = async (req,res)=>{
    console.log("inside addFeedbacksController");
    const {name,email,message} = req.body
    try{
        // add to model
        const newFeedback = await feedbacks.create({
            name,email,message
        })
        res.status(200).json(newFeedback)
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}