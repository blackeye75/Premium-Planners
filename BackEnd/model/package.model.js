import mongoose from "mongoose";

const packageSchema=mongoose.Schema({
    name:String,
    price:String,
    category:String,
    image:String,
    title:String
})

const Package=mongoose.model("Package",packageSchema);
export default Package;