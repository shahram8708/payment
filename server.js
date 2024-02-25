const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/pay', (req, res) => {
    console.log('Payment request:', req.body);

    res.json({ success: true, message: 'Payment successful' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
