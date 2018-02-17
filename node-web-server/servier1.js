const express=require('express');
const hbs=require('hbs');

var app=express();
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials1');
hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear();
});

app.get('/about-me',(req,res)=>{
  res.render('about-me.hbs',{
    pageTitle: 'About-me'
  })
});



app.get('/',(req,res)=>{
  res.send('Hello');
});
app.get('/data',(req,res)=>{
  res.send({
    name:'Sudipta Ghosh',
    job: 'Sr. Software Engineer',
    age: '23'
  });
});




app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/public'));

app.listen(3000,()=>{
  console.log('Server starting in 3000 port');
});
