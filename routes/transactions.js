const express = require('express');

function createRouter(db)
{
    const router = express.Router();
    //* Routes */
    router.get('/transactions', function(req, res, next)
    {
        mysql.getAll(function (error, show)
        {
            if(error)
            {
                return next(error);
            }
            res.json(transaction);
        });
    });

    router.post('/transactions', (req, res, next) =>
    {
        db.query
        (
            'INSERT INTO transactions (customer_id, movie_id, movie_showing) VALUES (?,?,?)',
            [req.body.customer_id, req.body.movie_id, req.body.movie_showing ],
            (error) => 
            {
                if(error)
                {
                    console.error(error);
                    res.status(500).json({status: 'error'});
                }
                else
                {
                    res.status(200).json({status: 'ok'});
                }
            }
        );
    });

    //* End of Routes */

  return router;
}

module.exports = createRouter; 