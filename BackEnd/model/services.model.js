import mongoose from "mongoose";

const servicesSchema=mongoose.Schema({
    name:String,
    image:String,
    title:String
})

const Services=mongoose.model("Services",servicesSchema);
export default Services;