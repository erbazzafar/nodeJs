function add(a,b) {
    return a+b;
}

function mul(a,b) {
    return a*b;
}

module.exports = {
add,
mul  
}

exports.add = (a,b) => a+b //{ add: [Function (anonymous)] }