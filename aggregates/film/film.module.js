'use strict';
const filmModel = require('./film.model');
const rest = require('rest');
const mime = require('rest/interceptor/mime');
const errorCode = require('rest/interceptor/errorCode');
const _ = require('lodash');

async function AddFilm(filmTitle, catId, trailerUrl) {

    let filmData = new filmModel({
        title: filmTitle,
        categoryId: catId,
        createDate: Date.now(),
        trailerUrl: trailerUrl
    });

    filmData.save().then(() => {
        console.log("Film is Created. Details; title: " + filmTitle);
    });
}

async function GetFilmTrailerUrlByName(filmName) {
    let filmEntity = await filmModel.findOne({ title: filmName }).exec();
    if (filmEntity.trailerUrl != null || filmEntity.trailerUrl != "")
        return filmEntity.trailerUrl;
    else
        return 'Film Content Does Not Have Trailer. public path is:' + filmName;
}

async function CheckFilmIsExist(filmTitle, catId, content) {

    let client = rest.wrap(mime)
        .wrap(errorCode, { code: 500 });

    if (filmTitle != null || filmTitle != "") {
        let filmEntity = await filmModel.findOne({ title: filmTitle, categoryId: catId }).exec();
        let imdbId = _.get(content, 'imdb[id]');

        if (filmEntity == null) {
            if (imdbId != null) {
                client({ path: 'http://api.themoviedb.org/3/movie/' + imdbId + '/videos?api_key=d316364b6940ee327b33496b39a8f7e7' }).then(
                    function (response) {
                        console.log('response: ', response);
                        if (_.get(response, "entity[results]").length > 0) {
                            let trailerUrl = "https://www.youtube.com/watch?v=" + _.compact(_.map(response, "[results]"))[0][0]['key'];
                            AddFilm(filmTitle, catId, trailerUrl);
                        }
                        else {
                            console.error('Film Content Does Not Have Trailer. public path is:' + filmTitle);
                        }
                    },

                    function (ex) {
                        console.error('response error: ', ex);
                    }
                ).catch(function (error) {
                    console.error('response error: ', error);
                });
            }
            else {
                console.error('Film Content Does Not Have Imdb Id. public path is:' + filmTitle);
            }

        }
        else {
            //Update Trailer Url
            if (imdbId != null) {
                client({ path: 'http://api.themoviedb.org/3/movie/' + imdbId + '/videos?api_key=d316364b6940ee327b33496b39a8f7e7' }).then(
                    function (response) {
                        console.log('response: ', response);
                        if (_.get(response, "entity[results]").length > 0) {
                            let trailerUrl = "https://www.youtube.com/watch?v=" + _.compact(_.map(response, "[results]"))[0][0]['key'];
                            filmModel.findByIdAndUpdate({ _id: filmEntity._id }, { trailerUrl: trailerUrl }).exec();
                        }
                        else {
                            console.error('Film Content Does Not Have Trailer. public path is:' + filmTitle);
                        }
                    },

                    function (ex) {
                        console.error('response error: ', ex);
                    }
                ).catch(function (error) {
                    console.error('response error: ', error);
                });
            }
            else {
                console.error('Film Content Does Not Have Imdb Id. public path is:' + filmTitle);
            }
        }
    }
}

module.exports.AddFilm = AddFilm;
module.exports.CheckFilmIsExist = CheckFilmIsExist;
module.exports.GetFilmTrailerUrlByName = GetFilmTrailerUrlByName;