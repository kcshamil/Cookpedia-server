const mongoose = require('mongoose')

const connectionString = process.env.DB_URL

mongoose.connect(connectionString).then(res=>{
    console.log("Database connected Successfully");
    
}).catch(error=>{
    console.log("Database connected Failed");
    console.log(error);
})