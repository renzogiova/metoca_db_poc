// 
const express = require('express');
const app = express();
// 
const db = require('./db');
// 
const config = require('./config');


app.get('/', (req, res) => {
    res.send('Welcome to server!');
});

app.get('/ping', (req, res) => {
    try {
        db.connection.query('SELECT 1 + 1', async (error, results, fields) => {
            res.send(`This is the result: ${results[0]}`);
        });
    } catch (error) {
        res.send('There was an ERROR!');
    }
});

app.get('/users', (req, res) => {
    try {
        db.connection.query('SELECT * FROM users', async (error, result, fields) => {
            // res.send(`This is the result: ${results[0]}`);
            res.json(result);
        });

    } catch (error) {
        res.send('There was an ERROR!');
    }
});


app.get('/create', (req, res) => {
    try {
        db.connection.query('INSERT INTO users(name) VALUES ("John")', async (error, result, fields) => {
            // res.send(`This is the result: ${results[0]}`);
            res.json(result);
        });

    } catch (error) {
        res.send('There was an ERROR!');
    }
});




app.listen(config.PORT);
console.log(`app running on port ${config.PORT}`);