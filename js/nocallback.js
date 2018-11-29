function get(callback){
    return setTimeout(()=>callback('Secret'),100);
}

function process(value,callback){
    return setTimeout(()=>callback(`${value}-code`),100);
}

function main(){
    // get(value=>{
    //     console.log(value);
    // });
    get(value=>process(value,result=>console.log(result)));
}

main();