var yargs= require('yargs');
var axios= require('axios');
var address=null;
var argv=yargs.options({
  a:{
    demand:true,
    alias: 'address',
    describe: 'Address to fetch weather',
    string: true
  }
}).help().alias('help','h').argv;

var encodedAddress=encodeURIComponent(argv.address);
var newUrl=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(newUrl).then((response)=>{
if(response.data.status==='ZERO_RESULTS'){
  throw new Error('Unable to find the address');
}

  var lat=response.data.results[0].geometry.location.lat;
  var lng=response.data.results[0].geometry.location.lng;
  address=response.data.results[0].formatted_address;
  var weatherUrl=`https://api.darksky.net/forecast/04da14330a9e64e397b18aa5e0defb94/${lat},${lng}`;
  return new axios(weatherUrl);
}).then((response)=>{
  console.log(`In ${address} current temperature is ${response.data.currently.temperature}ºF but it's fell like ${response.data.currently.apparentTemperature}ºF`);
}).catch((e)=>{
  if(e.code==='ENOTFOUND'){
    console.log('Unable to connect API servers');
  }else {
    console.log(e.message);
  }
});
