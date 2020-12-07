const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mockUserData = [
    {name: 'Prikshit'},
    {name: 'Gautam'}
];

app.get('/users/:id', (req, res) => {
    console.log(req.params.id);
    res.json({
        success: true,
        message: "Got one user",
        users: req.params.id
    });
});

app.post('/login', (req, res) => {
    const username = body.req.username;
    const password = body.req.password;

    const mockUsername = "billyTheKid";
    const mockPassword = "password";
    if (username === mockUsername && password === mockPassword) {
        res.json({
            success: true,
            message: 'Login successful',
            token: 'Encryption token goes here'
        });
    } else {
        res.json({
            success: false,
            message: "Please enter coorect username and password"
        });
    }
});

app.listen(8000, () => {console.log("Hello World")});
