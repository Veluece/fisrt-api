
import express from "express"
import Router from '../fisrt-api/Route.js'
const app = express()
const port = 6969

app.get('/', (req, res) => {
  res.json({msg:"Hello World!"});
});

// CRUD functionality of api
// CLIENT -> MIDLEWARE -> SERVER
app.use("/sample",Router)
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`)
})
