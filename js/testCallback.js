let sum = (a, b, result) => {
    return result(a + b);
}

let sumMulti = (value, value2, result) => {
    return result(value * value2);
}



function main() {
    console.log(sum(5,6,sum=>sumMulti(sum,3,result=>{return result})));
}

main();