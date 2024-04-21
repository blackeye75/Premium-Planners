import express from 'express'
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors";
import packageRoute from "./route/packages.route.js"
import servicesRoute from "./route/services.route.js"
import userRoute from "./route/user.route.js"


const app = express()
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT=process.env.PORT || 4000;

//connect to mongoDB
const URI=process.env.MongoDBURI;
 
try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("Connected to db");
} catch (error) {
    console.log("Error",error);
}

//defining routes

app.use("/package",packageRoute);

app.use("/services",servicesRoute);

app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})