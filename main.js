
import express from "express"
const app = express()
const port = 6969

app.get('/', (req, res) => {
  res.json({msg:"Hello World!"});
});

// CRUD functionality of api
 //R - Reading
app.get('/api',()=>{})

//C - creating
app.post('/api',()=>{})
//U - updating
app.put('/api/:id',()=>{})
//D - deleting
app.delete('/api/:id',()=>{})

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`)
})
