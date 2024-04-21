import Package from "../model/package.model.js";

export const getPackage=async (req,res)=>{
  try {
    const packages= await Package.find();
    res.status(200).json(packages);
  } catch (error) {
    console.log("Error:",error);
    res.status(500).json(error);
  }
}