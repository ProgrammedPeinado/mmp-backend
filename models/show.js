const express = require('express');

const Show = express.model('Show', 
{
    movie: {type: 'String'},
    time: {type: 'String'},
    occupancy: {type: 'Integer'},
    max_occupancy: {type: 'Integer'}
});

module.exports = Show;