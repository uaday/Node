const utils=require('./utils');
it('should add two numbers',()=>{
  var res=utils.add(33,11);
  if(res !== 44){
    throw new Error(`Expected 44, but got ${res}`);
  }
});

it('should square a number',()=>{
  var res1=utils.square(3);
  if(res1!==9){
    throw new Error(`Expected 9, but got ${res1 }`);
  }
});
