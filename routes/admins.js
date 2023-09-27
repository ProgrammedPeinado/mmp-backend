const express = require('express');
function createRouter(db)
{
    const router = express.Router();
    //* Routes */
    
    /**
    router.route('/admin').post((req, res, next) =>
    {
        console.log("From Admin route-post");
        db.query
        (   
            'SELECT * FROM admin WHERE password = ? AND username = ?',
            [req.body.password, req.body.username],
            (error, result, fields) => 
            {
                if(error)
                {
                    console.error(error);
                    console.log(result);
                    res.status(500).json({status: 'Not an admin'});
                }
                else
                {
                    console.log(result);
                    res.status(200);
                    res.send(true);
                }
            }
        );
    });
    */
    router.get('/admin', (req, res, next) =>
    {
        db.query
        (   
            'SELECT * FROM admin WHERE password = ? AND username = ?',
            [req.body.password, req.body.username],
            (error, result, fields) => 
            {
                if(error)
                {
                    res.status(500).json({status: 'Not an admin'});
                }
                else
                {
                    if(result == '')
                    {
                        res.status(200).json({flag: "No records matched"});                  
                    }
                    else
                        res.status(200).json(true);
                }
            }
        );
    });

    /**
    router.post('/admin', (req, res, next) =>
    {
        console.log("In Admin - post");
        db.query
        (
            'SELECT * FROM admin WHERE (password = (?)) AND username = (?))',
            [req.body.password, req.body.username],
            (error) => 
            {
                if(error)
                {
                    console.error(error);
                    res.status(500).json(false);
                    res.status(404).send("What?!")
                    res.send(false);
                }
                else
                {
                    if(result == '')
                    {
                        res.status(200).json({flag: "No records matched"});
                        console.log(res.json.status);                        
                    }
                    else
                    {
                        res.status(200).json(true);
                    }
                }
            }
        );
    });
     */
    router.route('/admin').post((req, res, next) =>
    {
        db.query
        ('SELECT * FROM admin WHERE password = ? AND username = ?',
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


    //* End of Routes */

  return router;
}

module.exports = createRouter; 