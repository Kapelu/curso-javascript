const { sum } = require("./uno");
const export_completo = require("./uno");

const axios = require("axios");


console.log(export_completo["sum"])

function sum_and_multipl (a,b, num){
    const res = sum(a,b)
    return res * num
}
console.log(sum_and_multipl(2,3,2))
module.exports = {
    sum_and_multipl
};