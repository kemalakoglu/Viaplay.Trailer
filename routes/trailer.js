const express = require('express');
const router = express.Router();
const rest = require('rest');
const mime = require('rest/interceptor/mime');
const errorCode = require('rest/interceptor/errorCode');
const _ = require('lodash');
const filmModules= require('../aggregates/film/film.module');

router.get('/', async function (req, res, next) {

    let client = rest.wrap(mime)
        .wrap(errorCode, { code: 500 });

    let trailerUrl="";

    client({ path: req.body.link }).then(
        function (response) {
            if (response.status.code == 200) {
                if(filmModules.GetFilmTrailerUrlByName(_.get(response,"title"))!=null){
                    res.send(trailerUrl);
                }
            }
        },

        function (response) {
            console.error('response error: ', response);
        }
    );

    res.send('respond with a resource');
});

module.exports = router;