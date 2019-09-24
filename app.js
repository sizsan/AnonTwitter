const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.set('views', './views') 
app.set('view engine', 'ejs')

app.get('/', (req, res)  => {
    res.render('index')
})

app.get('/help', (req, res) => {
    res.render('help')
})

app.post('/pleh', (req, res) => {
    let content = req.params.content
    console.log(content)
})

app.listen(port,() => {
    console.log('Server Live')
})

