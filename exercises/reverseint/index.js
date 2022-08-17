// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//My solution
function reverseInt(n) {
    if(n < 0) {
        let positiveInt = n * -1
        string = positiveInt.toString().split('').reduce((char, rev) => rev + char)
        return parseInt(string * -1)
    } else {
        string = n.toString().split('').reduce((char, rev) => rev + char)
        return parseInt(string)
    }
}

console.log(reverseInt(-90))
module.exports = reverseInt;
