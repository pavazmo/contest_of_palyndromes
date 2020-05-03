const express = require('express');
const ScoreController = require('../controllers/score');
const app = express();

//I would like to improve this, because we should never use CRUD function names or lowercase letters in URIs --> https://restfulapi.net/resource-naming/
app.get('/getScores', ScoreController.getScore);
app.post('/submitEntry', ScoreController.postScore);

module.exports = app;