import express from 'express';

const app = express.Router();

app.get('/articles', (req, res) => {
    res.json([{ id: '1', name: 'Tournevis', price: 2.99, quantity: 123 }]);
});

export default app;
