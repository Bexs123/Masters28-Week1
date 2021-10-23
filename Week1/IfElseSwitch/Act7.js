// ACTIVITY 7

// Take the string "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
// Find the index of a last vowel in the string.

let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let spstr = str.split("")
let vowel= ['a', 'e','i','o','u']
let index=[]

for (i= 0 ; i<= str.length; i++) {
    if (vowel.includes(str[i])){
        index.push(i)
    }
}
let lastIndex = (index[index.length-1])
let lastVowel = str[lastIndex]
console.log(`Last index of array is ${lastIndex} and the vowel is ${lastVowel}`) 