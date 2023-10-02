const mongoose=require('mongoose');

const MONGO_URL = 'mongodb+srv://vsheshanraj:sentamil1@jwtauth.obx0ufc.mongodb.net/?retryWrites=true&w=majority'

//connects with mongo db atlas
const db=async()=>{
    try{
        let connection= await mongoose.connect(MONGO_URL,{dbName:'movie_db',useNewUrlParser: true,useUnifiedTopology: true,}).then(()=>{
            console.log("db connected");
        })
    }
    catch(err){
        console.log(err);
        throw new Error(err)
    }
}

module.exports=db;