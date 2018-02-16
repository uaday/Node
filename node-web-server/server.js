const express=require('express');
const hbs=require('hbs');
var app=express();

hbs.registerPartials(__dirname+'/views/partials');
hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear();
});
app.use(express.static(__dirname+'/public'));

app.set('view engine','hbs');


app.get('/',(request,response)=>{
  // response.send('<h1>Hello Express</h1>');
  response.render('home.hbs',{
      welcomeMessage:'Welcome to you our site',
      pageTitle: 'Home Page'
  })
});

app.get('/about',(req,resp)=>{
  resp.render('about.hbs',{
    pageTitle: 'About Page'
  })
});

app.get('/contact',(req,resp)=>{
  resp.send('<h1>Contact Page</h1>')
});
app.listen(3000,()=>{
  console.log('Server is up on port 3000');
});
