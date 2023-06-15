const mongoose =require("mongoose")



const connectingString = "mongodb+srv://Demo:klu@cluster0.nct9rr5.mongodb.net"

module.exports.connectMongoDB = function(){
    mongoose
    .connect(connectingString,{})
    .then(() =>
    {
        console.log("Connected to MongoDB")
    })
    .catch((err)=>{
        console.log(err)
    })
}