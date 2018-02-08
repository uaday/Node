var somePromise=new Promise((resolve,reject)=>{
  //resolve('It worked');
  resolve('It was not worked');
});

somePromise.then((message)=>{
  console.log('Success: '+message);
},(errorMessage)=>{
  console.log('Failed: '+errorMessage);
});
