const express = require('express')  
const app = express()  
const port = 3000

var path = require('path');
app.use(express.static(path.join(__dirname, '/src/public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/public/index.html'));
});

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})