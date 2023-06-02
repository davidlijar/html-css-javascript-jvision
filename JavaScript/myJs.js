let str = new String('Hello Ohn Nge I Love You')
let str1 = '    Hi Li Jar     '

console.log(str.concat(' You know that'))
console.log(str.split(' '))
console.log(str.charAt(0))
console.log(str.charCodeAt(0))
console.log(str.split(' ').slice(1, 3))
console.log(str.replace('Nge', 'Mar'))
console.log(String.fromCharCode(65))
console.log(str1.trim())
console.log(str.indexOf('Hello'))

//Math
console.log('***Math***')

let sq = Math.sqrt(4)
let area = Math.PI * 2 * 2

for (let i = 0; i < 10; i++) {
  let m = Math.random() * 100
  let n = Math.floor(m)
  console.log(n + ' ')
}

console.log(sq)
console.log(area)
