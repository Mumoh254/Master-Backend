const { match } = require('assert')
const mongoose = require('mongoose')

//connect  to  mongo  server 

mongoose.connect("mongodb://localhost:27017/db-work")
.then((connected)=>{
   console.log("Connection  successful")
})

.catch((err)=>{
  console.log(err)
})

//schema
const  userSchema =  mongoose.Schema({
    name: {
        type: "string",
        required: [true ,   "your  name   is  required"]
    },

    age: {
      type: Number,
        min: [20,   "minimum  age  is  20  years old"],

        max: [50 ,  "maximum  age  is  50  years"]
    },
    email: {
        type: "string",
   

        match: [/\S+@\S+\.\S+/, 'Please use a valid email address.'],

        minLength:[5,  "minmum  length  should  be 5 character"],

        maxLength:[255 ,  "maximum  length  should  be 255   characters"],
    },

    role:  {
        type: "string",
        enum: ["admin", "Network Engineer" , "Lead Engineer" , "manager", "HR"],
        default: [true, "admin"],

        required: [true  , "  role  is  required   for  authentication purpose"],

    }, 

    
    pwd: {
         type: "string",
         minLength:[ 7, "password  must  be  atleast 7  characters "],

         maxLength:[13 ,  "maximum  length  should be 13 characters" ],

       
    }
    
})

//model  object   on  fun  to  work  with  collection
//conn  btwn  ur  program  and  collection
const userModel = mongoose.model("users" , userSchema)

//inserting  data 
let  user =  [
    {
        name: "peter",
        age: 28,
        email: "peteritumo2030@gmail.com",
        role: "admin"
    },

    {

        name: "saurabh",
        age: 28,
        email: "saurabho2030@gmail.com",
        role: "Lead Engineer"
    },

    {
        name: "Sgupta",
        age: 28,
        email: "sguptao2030@gmail.com",
        role: "HR"
    }
]
userModel.create(user)
.then((response)=>{
    console.log(response)
    console.log("data  inserted")
})


console.log("fetching  data ")
//fetching  data
userModel.find({ role: "HR"})
.then((data)=>{
    console.log( data)
})
.catch((err)=>{
    console.log( err)
})

.catch((err)=>{
    console.log(err)
})


//delete
userModel.deleteOne({ role: "admin"})
.then((response)=>{
    console.log(response)
})
.catch((err)=>{
    console.log(ErrorEvent)
})

userModel.deleteMany()
.then((info)=>{
    console.log("Deleted  all")

})
.catch((err)=>{
    console.log( err)
})

userModel.updateOne({role: "admin"}, {age: 30, city: "Nairobi"})
.then((updated)=>{
console.log(updated)
})
.catch((err)=>{
    console.log(err)
})