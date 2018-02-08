var firstFun=()=>{
  console.log('first Function call');
  setTimeout(()=>{console.log('first callback call');},2000);
  console.log('first Function call end');
}

var lastFun=()=>{
  console.log('last Function call');
  setTimeout(()=>{console.log('last callback call');},0);
  console.log('last Function call end');
}

firstFun();
lastFun();
