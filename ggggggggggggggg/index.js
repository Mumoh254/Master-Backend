
const express = require('express');
const dotenv = require('dotenv').config()

const bcrypt = require('bcrypt');



const  app  =  express();

app.use( express.json());

const PORT = process.env.PORT || 8000
//server  instance 

//endpoints
app.get("/register" , ( req , res) =>{

    res.send( {
        message:  "registration  successful"
    })
})

app.post("/login"  , ( req , res)=>{

    let user =  req.body;
    console.log(user)


    bcrypt.genSalt( 10 , ( salt ,  err)=>{
        if(!err){

            bcrypt.hash(user.password , salt  , ( hashpass , err)=>{
               
                if( !err){

                    user.password =  hashpass;
                } else{

                    console.log(err)
                }

            })

        }  else{
            console.log(err)
        }
    })

    res.send({
        message:  " login  "
    })
})

  app.listen(  PORT , ()=>{
    console.log(  `  server  running  on   port  ${PORT}`)
  })
