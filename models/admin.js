const express = require('express');

const Admin = express.model('Admin', 
{
    user: {type: 'String'},
    pass: {type: 'String'}
});

module.exports = Admin;