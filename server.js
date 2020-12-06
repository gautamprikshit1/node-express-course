const express = require('express');
const app = express();

const mockUserData = [
    {name: 'Prikshit'},
    {name: 'Gautam'}
];

app.get('/users', (req, res) => {
    res.json({
        success: true,
        message: "Successfully got users",
        users: mockUserData
    });
});

app.listen(8000, () => {console.log("Hello World")});
