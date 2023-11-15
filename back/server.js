const express = require ("express");

const app = express();

const port = 3000;

app.use((req, res, next) => {
    console.log('req', req.url);
    next();
});

app.get("/", (req, res) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`Server port:${port}`);
});