const express = requir('express');
const app = express();
const path = require('path');

app.listen(3000);

const publicPath = path.resolve(__dirname, 'public');
app.user(express.static(publicPath));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'home.html')))