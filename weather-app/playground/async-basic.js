console.log('Starting app');

setTimeout(()=>{
  console.log('Inside of callback');
},2000);

setTimeout(()=>{
  console.log('another function');
},0);

console.log('Finishing app');
