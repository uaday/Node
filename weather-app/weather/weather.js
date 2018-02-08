const request=require('request');

var getWeather=(lat,lng,callback)=>{
  var newUrl=`https://api.darksky.net/forecast/04da14330a9e64e397b18aa5e0defb94/${lat},${lng}`;
  request({url:newUrl,json:true},(error,response,body)=>{
    if(error){
      callback("Unable to connect Forcast.io Server");
    }else if(body.code===400){
      callback('Unable to fetch the weather');
    }else if (response.statusCode===200) {
      var temperatureCel=((body.currently.temperature-32)*5/9).toFixed(2);
      var apparentTemperatureCel=((body.currently.apparentTemperature-32)*5/9).toFixed(2);
      callback(undefined,{
        temperatureCel:temperatureCel,
        apparentTemperatureCel:apparentTemperatureCel
      });
    }
  });
};

//Export Function
module.exports.getWeather=getWeather;
