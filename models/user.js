const express = require('express');

const User = express.model('User', 
{
    user: {type: 'String'},
    pass: {type: 'String'},
    email: {type: 'String'}
});

module.exports = User;