var yargs= require('yargs');
var axios= require('axios');

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
  console.log(response.data.results[0].formatted_address);
  // console.log(response.data.results[0].formatted_address);
  console.log(response.data.results[0].geometry.location.lat);
  console.log(response.data.results[0].geometry.location.lng);
}).catch((e)=>{
  console.log(e);
});
