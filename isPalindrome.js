let str = "a man, a plan, a canal, panama";

function reverseString(str){
    let reStr = "";
    let len = str.length - 1;
    for (let i = len; i>=0; i--){
        reStr += str[i]; 
    }
    return reStr;
}

function isPalindrome(str){
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    if(reverseString(cleanedStr) === cleanedStr){
        return true;
    }else{
        return false;
    }
}

console.log(isPalindrome(str));