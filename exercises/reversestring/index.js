// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str){
    debugger;
    return str.split('').reduce( (rev, char)=> char + rev, '')
}


reverse('hello')

module.exports = reverse;

// function reverse(str){
//     return str.split('').reverse().join('')
// }

// function reverse(str) {
//     const length = str.length;
//     let reversedStr = str[length-1]
//     for(let i = length-2; i >= 0; i--){
//         reversedStr += str[i]
//         console.log(reversedStr)
//     }
//     return reversedStr
//     console.log(length)
// }