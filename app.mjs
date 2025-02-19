import express from "express"
const app = express()
const port = process.env.Port||3000

app.get('/', (req, res) => {
  res.send('Hello World from Javeriya')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})