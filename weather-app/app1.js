const yargs=require('yargs');
const geocode=require('./geocode/geocode.js');
const weather=require('./weather/weather');

//Variable for latitude & longitude
var address;
var latitude;
var longitude;

const argv=yargs.options({
  a:{
    demand:true,
    alias:'address',
    description:'Address to fetch weather for',
    string:true
  }
}).help().alias('help','h').argv;

//fetch geocode by the provided address:
geocode.geocodeAddress(argv.address,(errorMessage,result)=>{
  if (errorMessage) {
    console.log(errorMessage);
  }else {
    weather.getWeather(result.latitude,result.longitude,(errorMessage,weatherResult)=>{
      if(errorMessage){
        console.log(errorMessage);
      }else {
        console.log(`In ${address} temperature is ${weatherResult.temperatureCel}°C but fell like ${weatherResult.apparentTemperatureCel}°C`);
      }
    });
  }
});


//Find weather using lat and length
var lat=23.7490875;
var lng=90.38646179999999;
weather.getWeather(lat,lng,(errorMessage,weatherResult)=>{
  if(errorMessage){
    console.log(errorMessage);
  }else {
    console.log(`In ${address} temperature is ${weatherResult.temperatureCel}°C but fell like ${weatherResult.apparentTemperatureCel}°C`);
  }
});
