import  express  from "express";
import {getPackage} from '../controller/package.controller.js'

const router=express.Router();

router.get("/",getPackage);
export default router;

