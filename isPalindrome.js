let str = "+5+";

function reverseString(str){
    let reStr = "";
    let len = str.length - 1;
    for (let i = len; i>=0; i--){
        reStr += str[i]; 
    }
    return reStr;
}

function isPalindrome(str){
   if(reverseString(str) === str){
        return true;
    }else{
        return false;
    }
}

console.log(isPalindrome(str));