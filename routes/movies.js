const express = require('express');

function createRouter(db)
{
    const router = express.Router();
    //* Routes */
    router.get('/movies', function(req, res, next)
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
    //* End of Routes */

  return router;
}

module.exports = createRouter; 