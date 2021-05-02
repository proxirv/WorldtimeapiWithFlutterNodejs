const express = require('express');
const router = express.Router();

const RouterUrl = require('./url/url.js');

const UrlInstance = new RouterUrl();

/////////////

router.route('/time')
    .post(
        function(req,res){
            UrlInstance.reqTime(req,res);
        }
);

/////////////

// Export API routes
module.exports = router;