const first = () => console.log('First')
const second = () => console.log('Second')
const third = () => console.log('Third')

first() // 1

setTimeout(second, 0) // 3

third() // 2
