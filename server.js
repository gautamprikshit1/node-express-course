const express = require('express');
const app = express();

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

app.listen(8000, () => {console.log("Hello World")});
