const { sum_and_multipl } = require("./dos");

function y_div (a,b,num,divide){
    let result = sum_and_multipl(a,b,num)
    return result / divide
}

console.log(y_div(2,3,2,5))