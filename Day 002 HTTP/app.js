//create  a  local  server 
//adress  of  local  server  is  fixed 127.0.0.1
//every  server  has  a  different   port  number

const http = require('http');


//create   server instance
http.createServer(( req ,  res)=>{
  
  if( req.url == "/add" )  {
    res.end ("Added to  data")

  } 

  else  if   (  req.url  ==  "/edit")  {
    res.end( "Edited dat")
  } 

   else if  ( req.url ==  "/update")  {

    res.end(" Updated data")

  }


  else  if  ( req.url== "/users" &&  req.method=="POST")  {
    res.end( "  user  created   successfuly ")
  }


  else if   ( req.url == "/product"  &&  req.method=="POST") {
    res.end("Product  Created Successfully:" )
  }
    //send  a  response

   

}).listen( 8000);