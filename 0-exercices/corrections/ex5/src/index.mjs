
import app from './app.mjs'
const PORT = 5000
app.listen(PORT, () => {
  console.info(`Running on http://localhost:${PORT}`)
})
