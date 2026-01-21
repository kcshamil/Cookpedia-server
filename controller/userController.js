const users = require('../model/userModel')
const bcrypt = require('bcrypt')

// register user

exports.registerController = async (req,res)=>{

    // debbuggin console for this step
    console.log("Inside registerController");

    // destructure datas get request body
    const {username,email,password} = req.body

    try{
        // check user exist store existingUser
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(409).json("User Already Exist !!! Please Login")
        }else{
            // bcrypt method to secure password
            const encryptedPassword = await bcrypt.hash(password,10)
            // then assign newUser to creatinon in user
            const newUser = await users.create({
                username,email,password:encryptedPassword
            })
            res.status(200).json(newUser)
        }

    }catch(error){
        console.log(error);
        
        res.status(500).json(server)
    }
    
}

