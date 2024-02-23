const mongoose=require("mongoose")

const Sport=mongoose.model("finalsport",new mongoose.Schema({
    image:String,
    title:String,
    price:Number,
    desc:String,
    brand:String
}))

module.exports=Sport