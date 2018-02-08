var getUser=(id,callback)=>{
  var USER={
    id:id,
    name:'Sudipta'
  };

  setTimeout(()=>{
    callback(USER);
  },3000);
  console.log('Start App');
};

getUser(31,(userObj)=>{
  console.log(userObj);
});
