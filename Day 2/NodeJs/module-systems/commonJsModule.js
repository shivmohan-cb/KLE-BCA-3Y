function add(a,b){
 return a+b;
}

function substract(a,b){
return a-b;
}

module.exports = { // common js module syntax
    addFun : add,
    subFun : substract
}

// exports.add = add;

// exports === module.exports 