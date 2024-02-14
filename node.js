const express = require('express');
const app = express();
const port = 3000;

// Dummy database to store user responses
let userResponses = [];

app.use(express.json());

app.post('/responses', (req, res) => {
    const response = req.body;
    userResponses.push(response);
    res.status(201).send('Response saved successfully');
});

app.get('/responses', (req, res) => {
    res.json(userResponses);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
