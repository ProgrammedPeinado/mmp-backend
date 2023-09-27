const express = require('express');

const Transaction = express.model('Transaction', 
{
    user_id: {type: 'String'},
    movie_id: {type: 'String'},
    showing: {type: 'Show'},
    price: {type: 'String'}
});

module.exports = Transaction;