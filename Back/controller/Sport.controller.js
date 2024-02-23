const Sport=require("../models/Sport.model")

const SportController={
    getAll:async(req,res)=>{
        try{
            const products=await Sport.find()
            res.send(products)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    getById:async(req,res)=>{
        try{
            const {id}=req.params
        const target=await Sport.findById(id)
        res.status(200).send(target)
        }
        catch(error){
            res.status(404).send("error")
        }
        
    },
    delete:async(req,res)=>{
        try{
             const {id}=req.params
        await Sport.findByIdAndDelete(id)
        const prod=await Sport.find({})
        res.status(200).send(prod)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    add:async(req,res)=>{
        try{
            const{image,title,price,desc,brand}=req.body
            const newProduct= new Sport({image,title,price,desc,brand})
            await newProduct.save()
            res.status(201).send(newProduct)
        }
        catch(error){
            res.status(404).send("error")
        }
        
    },
    edit:async(req,res)=>{
        try{
            const{id}=req.params
            const{image,title,price,desc,brand}=req.body
            await Sport.findByIdAndUpdate(id,{image,title,price,desc,brand})
            const edd= await Sport.find({})
            res.status(200).send(edd)
        }
        catch(error){
            res.status(404).send("error")
        }
    }
}

module.exports=SportController