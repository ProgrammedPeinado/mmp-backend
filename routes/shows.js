const express = require('express');

function createRouter(db)
{
    const router = express.Router();
    //* Routes */
    router.get('/shows', function(req, res, next)
    {
        mysql.getAll(function (error, show)
        {
            if(error)
            {
                return next(error);
            }
            res.json(show);
        });
    });

    router.post('/shows', (req, res, next) =>
    {
        db.query
        (
            'INSERT INTO shows (movie_id, time, occupancy) VALUES (?,?,?)',
            [movie_id, req.body.time, 0],
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