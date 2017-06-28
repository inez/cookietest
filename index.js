const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.sendfile('index.html');
})

app.post('/set', function (req, res) {
  // Important - also looks for corresponding code in index.html
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', 'http://localtest.me:3000');
  res.cookie('cookieName', 'cookieNameValue', { maxAge: 10000000, httpOnly: false });
  res.send('Cookie Set')
})

app.get('/checkcookie', function (req, res) {
  console.log(req.headers);
  res.send(JSON.stringify(req.headers))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
