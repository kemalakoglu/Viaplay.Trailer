const express = require('express');
const router = express.Router();
const rest = require('rest');
const mime = require('rest/interceptor/mime');
const errorCode = require('rest/interceptor/errorCode');
const _ = require('lodash');
const filmModules = require('../aggregates/film/film.module');

router.get('/', async function (req, res, next) {

    let client = rest.wrap(mime)
        .wrap(errorCode, { code: 500 });

    let trailerUrl = "";
    let filmTitle = _.last(req.body.link.split('/'));
    client({ path: req.body.link }).then(
        function (response) {
            if (response.status.code == 200) {
                (async () => {
                    trailerUrl = await filmModules.GetFilmTrailerUrlByName(filmTitle);
                    if (trailerUrl != null) {
                        console.log("Operation is Succeeded. Trailer Url is:"+trailerUrl+" Public Path:"+ filmTitle);
                        res.send(trailerUrl);
                    }
                    else {
                        console.log("Film Doesn't Have Trailer. Public Path:"+ filmTitle);
                        res.send("Film Doesn't Have Trailer");
                    }

                })();
            }
            else {
                console.log("Request Url Is Not Valid. Public Path:"+ filmTitle);
                res.send("Request Url Is Not Valid");
            }

        },

        function (response) {
            console.error('response error: ', response);
        }
    );
});

module.exports = router;