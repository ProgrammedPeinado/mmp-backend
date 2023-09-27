const express = require('express');

function createRouter(db)
{
    const router = express.Router();
    //* Routes */
    router.get('/user', (req, res, next) =>
    {
        console.log("From User route-post");
        db.query
        (
            'SELECT users WHERE password = ? AND username = ?',
            [req.body.password, req.body.username],
            (error, result, fields) => 
            {
                if(error)
                {
                    res.status(500).json({status: 'error'});
                }
                else
                {
                    res.status(200).json({flag : (true)});
                }
            }
        );
    });

    router.route('/user').post((req, res, next) =>
    {
        db.query
        ('SELECT * FROM users WHERE password = ? AND username = ?',
          [req.body.password, req.body.username],
          (error, result, fields) => 
          {
            try
            {
              if(error)
                throw error;
              
              if(result == '')
              {
                res.send(false);
              }
              else
              {
                res.send(true);
              }
            }
            catch
            {
              res.send(false);
            }
          }
        );
    });

    router.post('/user/create', (req, res, next) =>
    {
        db.query
        (
            'INSERT INTO users (username, email, password) VALUE (?, ?, ?)',
            [req.body.username, req.body.email, req.body.password],
            (error, result, fields) => 
            {
              if(error)
              {
                res.status(500).json({status: 'error'});
              }
              else
              {
                res.send(true);
              }
            }
        );
    });
    //* End of Routes */

  return router;
}

module.exports = createRouter; 