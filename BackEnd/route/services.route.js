import  express  from "express";
import {getServices} from '../controller/services.controller.js'

const router=express.Router();

router.get("/",getServices);
export default router;
