const express=require('express');

var app=express();

app.get('/',(request,response)=>{
  // response.send('<h1>Hello Express</h1>');
  response.send({
    name: 'Sudipta Ghosh',
    Course:['c++','c','Java','PHP']
  });
});

app.get('/about',(req,resp)=>{
  resp.send('About Page');
});

app.get('/contact',(req,resp)=>{
  resp.send('<h1>Contact Page</h1>')
});
app.listen(3000);
