const express=require("express")
const router=express.Router()

const SportController=require("../controller/Sport.controller")


router.get("/",SportController.getAll)
router.get("/:id",SportController.getById)
router.delete("/:id",SportController.delete)
router.post("/",SportController.add)
router.put("/:id",SportController.edit)

module.exports=router
