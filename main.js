
import express from "express"
const app = express()
const port = 6969

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`)
})
