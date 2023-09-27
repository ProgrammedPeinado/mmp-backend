const express = require('express');

const Movie = express.model('Movie', 
{
    name: {type: 'String'},
    price: {type: 'String'},
    language: {type: 'String'},
    description: {type: 'String'},
    shows: {type: 'String[]'}
});

module.exports = Movie;