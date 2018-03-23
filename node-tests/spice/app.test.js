const expect= require('expect');
const rewire=require('rewire');

var app=rewire('./app');

describe('App',()=>{
  var db={
    saveUser: expect.createSpy()
  };
  app.__set__('db' , db);
  it('Should call the spy correncly',()=>{
    var spy=expect.createSpy();
    spy('Sudipta',23);
    expect(spy).toHaveBeenCalledWith('Sudipta',23);
  });

  it('Should call saveUser with user object',()=>{
    var email='uadayghosh@gmail.com';
    var password='123abc';

    app.handleSignup(email,password);
    expect(db.seveUser).toHaveBeenCalledWith({email,password});
  });


});
