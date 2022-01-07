const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, 'public');

app.listen(3000,()=> console.log("Server running"));

app.use(express.static(publicPath));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'home.html')))