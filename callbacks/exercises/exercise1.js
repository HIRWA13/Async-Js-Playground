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

// 4. write a function that takes a callback and then invokes it after a delay of 2 seconds:

function invokeCb(cb) {
   setTimeout(cb, 5000)
}

invokeCb(()=> {
    console.log('callback invoked')
})