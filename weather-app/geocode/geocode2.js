const request = require('request');

var geocodeAddress = (address)=>{
  return new Promise((resolve,reject)=>{
    var encodedAddress=encodeURIComponent(address);
    var newUrl=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
    request({
      url:newUrl,
      json:true
    },(error,response,body)=>{
      if(error){
        reject('Unable to connect to Google server');
      }else if (body.status==='ZERO_RESULTS') {
        reject('Unable to find that address');
      }else if (body.status==='OK') {
        resolve({
          address:body.results[0].formatted_address,
          latitude:body.results[0].geometry.location.lat,
          longitude:body.results[0].geometry.location.lng
        });
      }
    });
  });
};

geocodeAddress('green road').then((location)=>{
  console.log(JSON.stringify(location,undefined,2));
}).catch((e)=>{
  console.log(e);
});
