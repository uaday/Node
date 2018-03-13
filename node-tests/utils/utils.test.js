const expect =require('expect');
const utils=require('./utils');
it('should add two numbers',()=>{
  var res=utils.add(33,11);

  expect(res).toBe(44).toBeA('number');

  // if(res !== 44){
  //   throw new Error(`Expected 44, but got ${res}`);
  // }
});
it('should async add two numbers', (done)=>{
  utils.asyncAdd(4,3,(sum)=>{
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should async square one number',(done)=>{
  utils.asyncSquare(3,(res)=>{
    expect(res).toBe(3).toBeA('number');
    done();
  });
});

it('should minus two numbers',()=>{
  var res=utils.min(33,11);
  expect(res).toExist().toBe(22).toBeA('number');
  // if(res !== 22){
  //   throw new Error(`Expected 22, but got ${res}`);
  // }
});
it('should square a number',()=>{
  var res1=utils.square(3);
  expect(res1).toExist().toBe(9).toBeA('number');
  // if(res1!==9){
  //   throw new Error(`Expected 9, but got ${res1 }`);
  // }
});



it('should verify first name and last name',()=>{
  var user={
    age:23,
    location:'Dhanmondi'
  };
  var res=utils.setName(user,'Sudipta Ghosh');
  // expect(user).toEqual(res);
  expect(res).toInclude({firstName: 'Sudipta',lastName: 'Ghosh'});
});



// it('should expect some value',()=>{
//     //expect(12).toNotBe(12);
//     //expect({name: 'sudipta'}).toEqual({name:'Sudipta'});
//     // expect([2,3,4]).toInclude(4);
//     // expect([2,3,4]).toExclude(5);
//     expect({
//       name:'Sudipta',
//       age: 23,
//       location:'Bangladesh'
//     }).toInclude({
//       age:23
//     });
// });
