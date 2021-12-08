// function sayHelloTo(name) {
//   const message = 'Hello' + name

//   return function() {
//     console.log(message)
//   }
// }

// const helloToElena = sayHelloTo('Elena')
// helloToElena() // Hello Elena


// function CreateFrameworkManager() {
//   const fw = ['Angular', 'React']

//   return {
//     print: function() {
//       console.log(fw.join(' '))
//     },
//     add: function(framework) {
//       fw.push(framework)
//     }
//   }
// }
// const manager = CreateFrameworkManager()
// console.log(manager)
// manager.print()


// setTimeOut
const fib = [1, 1, 2, 3, 5, 8, 13]

// изза вар не работает поменять на let либо через замыкание
// for (var i = 0; i < fib.length; i++) {
//   (function(j) {
//     setTimeout(function() {
//     console.log(`fib[${j}] = ${fib[j]}`)
//   }, 1500)

//   })(i)

// }
