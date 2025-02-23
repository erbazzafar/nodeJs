// {
//     const func = () => {
//         "use strict"
//         console.log("hello");
//     }
// }
// func()

function fun2(a, b){
    "use strict"
    a=100,
    b=200
    return arguments[0] + arguments[1]   
}
console.log(fun2(10, 2))

console.log(typeof fun2)

const obj = {
    a : 12,
    b : 45
}

class abc {
    constructor (abc){
        this.abc = abc
    }

}
console.log(typeof obj);
console.log(typeof abc);
