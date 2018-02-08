const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
const argv = yargs.options({
  a:{
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather',
    string: true
  }
}).help().alias('help','h').argv;
var findGeocode= new Promise((resolve,reject)=>{
  geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
    if (errorMessage) {
      reject(errorMessage);
    }else {
      resolve({lat:results.latitude,lon:results.longitude,address:results.address});
    }
  });
});
var findWeather=(lat,lon,address)=>{
  return new Promise((resolve,reject)=>{
    weather.getWeather(lat,lon,(errorMessage,results)=>{
      if (errorMessage) {
        reject(errorMessage);
      }else {
        resolve(`Right now in ${address} temperature is ${results.temperatureCel}ºC but fell like ${results.apparentTemperatureCel}ºC`);
      }
    });
  });
};
findGeocode.then((res)=>{
  findWeather(res.lat,res.lon,res.address).then((msg)=>{
    console.log(msg);
  }).catch((errorMsg)=>{
    console.log(errorMsg);
  });
}).catch((errorMsg)=>{
  console.log(errorMsg);
});
