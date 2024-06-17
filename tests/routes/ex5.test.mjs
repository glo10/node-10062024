import request from 'supertest'
import app from '../../0-exercices/corrections/ex5/src/app.mjs'
import { describe, it, expect } from 'vitest'

describe('GET /', () => {
  it('Should have 200 status', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
  })
  it('Should be a HTML', async () => {
    const response = await request(app).get('/')
    expect(response.headers['content-type']).toMatch('text/html')
  })
  it('Should have "Bienvenue"', async () => {
    const response = await request(app).get('/')
    expect(response.text).toContain("Bienvenue")
  })
})