const express=require("express")
const { postResume } = require("../Controllers/routerController")
const router=express.Router()

router.post("/review",postResume)



module.exports=router