// 1. write a function that returns true or false for a given number if i's odd. make the function reusable so that it can be reused in the future.

function isOdd(num) {
    if(num % 2 !== 0) {
        console.log(true)
    } else{
        console.log(false)
    }
}

// isOdd(8) false
// isOdd(5) true

// 2. write a function that returns the  given string  with a concatenated exclamation [!] at the end, make the function reusable too

function concatStr (str) {
    console.log(str + "!")
}

// concatStr("Adrian") Adrian!

// 3. write a function that duplicates each char in a string, if we pass 'abc' to the function it should return 'aabbcc'. make the function reusable too.

function duplicateStr(str) {
    const splitted = str.split("")
    const doubled = splitted.map((char) => char.repeat(2))
    console.log(doubled.join(""))
}

// duplicateStr("abc") "aabbcc"

// 4.write a function called atleastTwo that receives an array and a callback function as its arguments. if atleast two elements fro the array return a truth value when passed as argument atleastTwo should return true. if there aren't atleast two elements from the array that returns true when passed in the callback, atleastTwo should return false

// solution comming soon: