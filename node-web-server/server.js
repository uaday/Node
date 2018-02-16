const express=require('express');
const hbs=require('hbs');
var app=express();

app.use(express.static(__dirname+'/public'));

app.set('view engine','hbs');


app.get('/',(request,response)=>{
  // response.send('<h1>Hello Express</h1>');
  response.render('home.hbs',{
      welcomeMessage:'Welcome to you our site',
      pageTitle: 'Home Page',
      currentYear: new Date().getFullYear()
  })
});

app.get('/about',(req,resp)=>{
  resp.render('about.hbs',{
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  })
});

app.get('/contact',(req,resp)=>{
  resp.send('<h1>Contact Page</h1>')
});
app.listen(3000,()=>{
  console.log('Server is up on port 3000');
});
