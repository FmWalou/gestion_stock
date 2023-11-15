const express = require ("express");
const serveIndex = require("serve-index");

const api = require('./api.js');

const app = express();

const port = 3000;
const publicDir = '.'

app.use((req, res, next) => {
    console.log('req', req.url);
    next();
});

app.use('/api', api);

app.use(express.static(publicDir));
app.use(serveIndex(publicDir, {icons: true}));

app.get("/", (req, res) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`Server port:${port}`);
});