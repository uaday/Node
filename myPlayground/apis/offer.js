const request= require('request');
var offer=(callback)=>{
  newUrl=`https://momenta.renata-ltd.com/renata/app_data/show_all_offer.php`;
  request({url:newUrl,json:true},(error,response,body)=>{
    if(error){
      callback('Error Occured');
    }else {
      callback(undefined,body);
    }
  })
};

module.exports.offer=offer;
