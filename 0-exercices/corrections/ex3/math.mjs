export function sum (nb1, nb2) {
  return `Addition de ${nb1} et ${nb2} =  ${nb1 + nb2}`
}

export function minus (nb1, nb2) {
  return `Soustraction de ${nb1} et ${nb2} =  ${nb1 - nb2}`
}

export function multiply (nb1, nb2) {
  return `Multiplication de ${nb1} et ${nb2} =  ${nb1 * nb2}`
}

export function divide (nb1, nb2) {
  return (nb2 !== 0) ? `Division de ${nb2} et ${nb1} =  ${nb1 / nb2}` : 'Division par 0 impossible!'
}
