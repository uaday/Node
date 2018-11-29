function get(callback) {
    return setTimeout(() => callback({ name: 'Secret' }), 500);
}

function concrit(value) {
    return `${value}-Code`;
}

function process(value, result) {
    return result(value);
}

function main() {
    get(value => process(value.name, concrit => console.log(concrit)));
    //get(value => console.log(value.name));
}
//main();


let sum=(a,b,result)=>{
    return result(a+b);
}

let sumMulti=(value,result)=>{
    return result(value*2);
}


function abc(){ 
    sum(5,6,sum=>sumMulti(sum,data=>console.log(data)));
}

abc();