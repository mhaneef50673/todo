const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
console.log('publicPath',publicPath);
app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('*', function (req, res) {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(process.env.PORT || 3000);