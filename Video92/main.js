const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let siteContent = "Search Now"
  res.render("index",{siteName:siteName, siteContent: siteContent})
})
app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas blog why and when?"
    let blogContent = "Its a very good brand"
  res.render("blogpost",{blogTitle: blogTitle, blogContent: blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})