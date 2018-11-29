async function get() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(12),500);
    });
}

async function process(value) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof value=='string'){
                resolve(`${value}-Code`);
            }else{
                reject(`Invalid value`);
            }
        },100)
    })
}

let main = async () => {
    let value= await get();
    console.log('Processing...');
    try{
        let result=await process(value);
        console.log(result);
    }catch(error){
        console.log(error);
    }
}
main();