// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

 let obj = {}  
 console.log(str[1])

for(let i = 0; i < str.length; i++){
    console.log(`str[i]: ${str[i]}`)
    if(obj.hasOwnProperty(str[i])){
        obj[str[i]] += 1
    } else{
        obj[str[i]] = 1
    }
}
return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);

}
console.log(maxChar(`abcccccccd`))

/*Other variations like this one

What is the most common character in the string
Does String A habve the same Characters as String B (Is it an anagram)
Does the given string have any repeated characters in it?



We are going to take our stirng and comnvert it to an object. Keys are the values from string. Value is number of times the value has appeared. 
*/


module.exports = maxChar;
