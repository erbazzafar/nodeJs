let str = "this is a string"

function reverseString(str){
    reStr = "";
    let len = str.length - 1;
    for (let i = len; i>=0; i--){
        reStr += str[i]; 
    }
    return reStr;
}

console.log(reverseString(str));