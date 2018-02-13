const express=require('express');

var app=express();

app.get('/',(request,response)=>{
  response.send('Hello Express');
});

app.listen(3000);
