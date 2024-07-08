const { timeStamp } = require('console');
const express =require('express')
const mongoose = require('mongoose');
const app =  express();


app.use(middleWare)  //  function  will  seat  btwn   each  function

app.use(express.json())


mongoose.connect("mongodb://localhost:27017/store")
.then((conn)=>{
    console.log( "  connected  to  database  sucesfully")
})
.catch((err)=>{
    console.log(err)
})

const  productSchema = mongoose.Schema({

    title: {
        type: "string"

    }
    ,
    description:{
        type: "string"
    },

    price:{
        type: Number,
        min: 1
    },

    rating:{
        type: "string"
    },
    stock: {
        type: Number

    },
    brand: {
        type: "string"
    },
    category:{
        type:  "string"

    }
}, {timeStamps:true})

const productModel = mongoose.model("products" , productSchema )


app.get("/products" , (  req ,  res)=>{

    res.send ({
        message: "fetching product  data "

    })

    console.log("Fetching  product  data ")
    let  ip =  req.ip
    let path =  req.pathName
    console.log(path)
    console.log(ip)
})

app.get("/products/:id/postman" ,   ( req ,  res)=>{
    res.send({

        message:   "Fetching   query  parameter"
    })
    console.log(req.params)
})
//midleware
app.get("/testing/:id/middleware", middleWare ,  (  req, res)=>{
    res.send({
        message: "  testing  middleware  req "
    })
})

function middleWare(  req , res , next) 
{
   //
   if ( req.params.id< 10)
   {
    console.log( "you  are  blocked")
    res.send({
        message: "Access denied"
    })
   }

   else
   {
    next()
   }
}

app.get("/api/users:name/values"  ,  (  req ,  res)=>{
    res.send({
        message: "Sending  my   request  parameters"
    })

    console.log(req.params.name)
    console.log(  req.pathName)
})



app.delete("/products/:id" , (  req , res)=>{
    res.send({
        message:  " Delete   successfully  completed"
    })

    console.log(req.params)
})


app.post("/products"  , (req , res)=>{

    res.send({

        message: "Product  created  successfully"
    })

    console.log(req.body)
    
   
})


app.listen(8000 , ()=>{
    console.log(  "Server   is  up  and  running")

})