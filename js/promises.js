function get() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(12, 500))
    });
}

function process(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof value == 'string') {
                resolve(`${value}-Code`);
            } else {
                reject('Invalid value, value should be string');
            }
        }, 100)
    })
}

function main() {
    get()
        .then(process)
        .then(result => console.log(result))
        .catch(e => console.log(e));
}
main();