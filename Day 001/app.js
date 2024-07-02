//file  system  module
const fs = require('fs')
//how  to  read   file  using  fs
//sync way  of  reading 
let data = fs.readFileSync("./app.txt" , "utf-8")
console.log(data)
//async  way  of  reading
//callback handling  logic

fs.readFile("./app.txt" , "utf-8" , ( err , note)=>{
    
    console.log(note)
    console.log(err)

})

console.log("test  async")

//read file sync
//

fs.writeFileSync("./products.txt" ,"apple");

//overides  existing  data
fs.writeFile("./products.txt" , "mango" ,(err)=>{
    if  (!err)  {
        console.log( " updated")
    }  else   {
          console.log(   err)
    }
})

//append  file write  but  don't  append
//\n  puts  it  to  next  line
// \t gives a  tab space

fs.appendFile("./products.txt", "\nApple" ,(err)=>{
    if  (  err ==  null)  {
        console.log( " product   updates")
    }  else   {
           console.log(   err)
    }
})

//os  module   operating  system 

const os = require('os');

console.log(os.hostname())
console.log(os.cpus())
console.log(os.machine())
console.log(os.freemem())
console.log(os.platform())
console.log(os.homedir())

//delete   a  file

fs.unlink("./Readme.md" ,(err)=>{
    if (!err)  {
        console.log("deleted    successfully")
    }  else   {
        console.log(err)
    }
});