const express = require('express')

const app = express()

const port = 3001

let options = {
    dotfiles:'deny',
    root:`${__dirname}/`, // or __dirname+'/'
    headers:{
        'x-timestamp':Date.now(),
        'x-sent':true
    }
}

app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/images', express.static(__dirname + '/images'));

app.get('/weather', (req, res) => {
    res.sendFile('./weather.html', options)
})

app.get('*', function(req, res) {
    res.sendFile('./weather.html', options)
  });

app.get('*', (req, res) => {
    res.send(`<div>Sorry, 404 not found</div>`)  // THIS MUST BE THE LAST ONE
})

app.listen(port, () => {console.log(`Express server listening on port ${port}`)})



