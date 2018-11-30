async function get() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(12), 500);
    });
}

async function process(value) {
    return new Promise((resolve, reject) => {
        if (typeof value == 'string') {
            resolve(`${value}-Code`);
        } else {
            reject('Invalid Operator!!');
        }
    })
}

async function main() {
    let value = await get();
    try{
        let result=await process(value);
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

main();