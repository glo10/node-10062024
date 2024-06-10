import { EventEmitter } from 'node:events'
import { sum, divide, minus, multiply } from './math.mjs'

const app = new EventEmitter()
console.log('start')
app.on('app:computed', (data) => {
  const { nb1, nb2 } = data // destructuration de l'objet
  console.log(sum(nb1, nb2))
  console.log(minus(nb1, nb2))
  console.log(multiply(nb1, nb2))
  console.log(divide(nb1, nb2))
})
app.emit('app:computed', {
  nb1: Math.floor(Math.random() * 100),
  nb2: Math.floor(Math.random() * 1000)
})

console.log('end')
