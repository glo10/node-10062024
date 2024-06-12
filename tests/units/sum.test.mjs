import { describe, it, expect } from "vitest"
import { sum } from "../../0-exercices/corrections/ex3/math.mjs"
describe("demo testing", () => {
  it.each([
    [5,3,2],
    [4,0,4],
    [-8,-3,-5],
  ])("Should be %i when nb1=%i and nb2=%i", (expected, nb1, nb2) => {
    // Act
    const result = sum(nb1, nb2)
    // Assert
    expect(result).toMatch(expected)
  })
});
