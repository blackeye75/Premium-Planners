import Services from "../model/services.model.js";

export const getServices=async (req,res)=>{
    try {
      const services= await Services.find();
      res.status(200).json(services);
    } catch (error) {
      console.log("Error:",error);
      res.status(500).json(error);
    }
  }