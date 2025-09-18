const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Welcome to sequelize app!');
});

app.listen(3026, () => {
    console.log('Server is running on http://localhost:3026');
});