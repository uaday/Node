const request= require('supertest');
const expect=require('expect');
var app=require('./server.js').app;


describe('Server',()=>{
  describe("GET /",()=>{
    it('Should return hello World response',(done)=>{
      request(app)
        .get('/')
        .expect(404)
        .expect({
          error:'Page not found.'
        })
        .end(done);
    });
  });
  describe("GET /user",()=>{
    it('Should return my user object',(done)=>{
      request(app)
      .get('/user')
      .expect((res)=>{
        expect(res.body).toInclude({
          name:'Andrew Mike',
          age:28
        });
      })
      .end(done);
    });
  });
});
