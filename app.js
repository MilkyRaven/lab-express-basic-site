const express = require('express')
const app = express()


app.use(express.static('public'));

app.set('view engine', 'ejs')

//HOME
app.get('/', (req, res) => {
    res.render('home')
})
//ABOUT
app.get('/about', (req, res) => {
    res.render('about')
})
//WORKS
app.get('/works', (req, res) => {
    res.render('works')
})
//INFLUENCES
app.get('/influences', (req, res) => {
    res.render('influences')
})

app.listen(3000)