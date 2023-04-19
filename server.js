const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs');
const path = require('path');


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, `/build/index.html`));
});

app.get(/.*.json$/, (req, res) => {
    const originalUrl = req.originalUrl;
    const filePath = originalUrl.replace('/TodoApp', '');

    res.sendFile(path.join(__dirname, `/build${filePath}`));

});

app.get(/.*.js$/, (req, res) => {
    const originalUrl = req.originalUrl;
    const filePath = originalUrl.replace('/TodoApp', '');

    res.sendFile(path.join(__dirname, `/build${filePath}`));

});

app.get(/.*.css$/, (req, res) => {
    const originalUrl = req.originalUrl;
    const filePath = originalUrl.replace('/TodoApp', '');

    res.sendFile(path.join(__dirname, `/build${filePath}`));

});

app.get(/.*.jpeg$/, (req, res) => {
    const originalUrl = req.originalUrl;
    const filePath = originalUrl.replace('/TodoApp', '');

    res.sendFile(path.join(__dirname, `/build${filePath}`));

});

app.get(/.*.png$/, (req, res) => {
    const originalUrl = req.originalUrl;
    const filePath = originalUrl.replace('/TodoApp', '');

    res.sendFile(path.join(__dirname, `/build${filePath}`));

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})