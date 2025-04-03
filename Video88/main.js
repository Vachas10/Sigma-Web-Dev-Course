const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World2!')
})
app.get('/about', (req, res) => {
  res.send('Hello About!')
})
app.get('/contact', (req, res) => {
  res.send('Hello conttact!')
})
app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})


app.get('/blog/:slug', (req, res) => {
  console.log(req);
  
  res.send(`Hello ${req.params.slug}!`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})