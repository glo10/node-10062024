import {describe, it, test, expect } from 'vitest'
import { minus } from '../../0-exercices/corrections/ex3/math.mjs'

describe('Déscription de l\'ensemble des tests à effectuer', () => {
  it.each([
    [5, 10, 5],
    [0, 2, 2],
    [4, 10, 6]
  ])('Should be 5 when nb1 = 10 and nb2 = 5', (expected, nb1, nb2) =>{
    // Act
    const result = minus(nb1, nb2)
    // Assert
    expect(result).toEqual(expected)
  })

  test('should not be ', () => {
    const result = minus(12, 9)
    expect(result).not.toBe(4)
  })

})