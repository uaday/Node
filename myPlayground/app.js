const offer= require('./apis/offer.js');
const fs= require('fs');

offer.offer((errorMessage,results)=>{
  if (errorMessage) {
    console.log(errorMessage);
  }else {
    fs.writeFileSync('offer.json',JSON.stringify(results));
    var txt=fs.readFileSync('offer.json');
    console.log(JSON.parse(txt));
  }
});
