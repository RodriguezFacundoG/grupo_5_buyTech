const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, 'public');

app.listen(3000,()=> console.log("Server running"));

app.use(express.static(publicPath));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'index.html')))

app.get('/productDetails', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'productDetails.html')))
app.get('/productTypeList', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'productTypeList.html')))
app.get('/productCart', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'productCart.html')))
app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'register.html')))
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'login.html')))


/* testeo de HEADERS*/ 
app.get('/header', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'header.html')))
/* testeo de FOOTERS*/ 
app.get('/footer', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'footer.html')))
app.get('/footerEU', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'footerEU.html')))




/*EUGENIO*/
/*algo*/
/*mas algo*/
