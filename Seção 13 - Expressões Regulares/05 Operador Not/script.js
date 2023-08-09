const notAB = /[^ab]/

console.log(notAB.test('a'))
console.log(notAB.test('Aqui tem a'))

console.log('------------------')

const notToAz = /[^a-z]/

console.log(notToAz.test('123 as'))
console.log(notToAz.test('nfiuahbfoiçpjqepoçf'))

console.log('------------------')

const az = /[a-z]/

console.log(az.test('nfiuahbfoiç12312pjqepoçf'))