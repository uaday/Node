
// const yargs=require('yargs');
//
// const geocode=require('./geocode/geocode.js');
//
// const argv=yargs
// .options({
//   a:{
//     demand: true,
//     alias: 'address',
//     describe: 'Address to fetch weather for',
//     string: true
//   }
// })
// .help()
// .alias('help','h')
// .argv;
// geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
//   if (errorMessage) {
//     console.log(errorMessage);
//   }else {
//     console.log(JSON.stringify(results,undefined,2));
//   }
// });

// const request=require('request');
//
// request({url:'https://api.darksky.net/forecast/04da14330a9e64e397b18aa5e0defb94/23.7423655,90.3845777',
// json:true
// },(error,response,body)=>{
//   if(error){
//     console.log('Unable to connect to Forecast.io server.');
//   }else if(body.code===400){
//     console.log('Unable to fetch weather');
//   }else if(response.statusCode===200){
//     console.log(`${JSON.stringify(body.currently.temperature,undefined,2)}`);
//   }
// });

// const request=require('request');
// request({url:'https://api.darksky.net/forecast/04da14330a9e64e397b18aa5e0defb94/23.7423655,90.3845777',json:true},
// (error,response,body)=>{
//   if(error){
//     console.log('Unable to connect Forcast.io Server');
//   }else if(body.code===400){
//     console.log('Unable to fetch the weather');
//   }else if(response.statusCode===200){
//     console.log(`${JSON.stringify(body.currently.temperature,undefined,2)}`);
//   }
// });






// 04da14330a9e64e397b18aa5e0defb94
