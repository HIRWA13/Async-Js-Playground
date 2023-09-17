let a = 1

setTimeout(() => {
  console.log(`setTimeout: ${a}`)
  a = 2
}, 1)

setImmediate(() => {
  console.log(`Immediate: ${a}`)
})

const p = new Promise((resolve) => {
    console.log(`new Promise: ${a}`)
    a = 3
    resolve()
}).then(() => console.log(`Then: ${a}`))

console.log(`a is ${a}`)