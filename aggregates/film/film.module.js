'use strict';
const filmModel = require('./film.model');
const rest = require('rest');
const mime = require('rest/interceptor/mime');
const errorCode = require('rest/interceptor/errorCode');
const _ = require('lodash');

async function AddFilm(content, catId) {

    let filmData = new filmModel({
        title: content["title"],
        categoryId: catId,
        createDate: Date.now(),
        trailerUrl: null
    });

    filmData.save().then(() => {
        console.log("Film is Created. Details; title: " + film.title);
    });
}

async function GetFilmTrailerUrlByName(filmName) {
    let filmTitle = filmName.split(' - ')[0];

    let filmEntity = await filmModel.findOne({ title: filmName }).exec();
    return filmEntity.trailerUrl;
}

async function GetFilmTrailerUrlByNameAndCategory(content, catId) {
    if (content["title"] != null || content["title"] != "") {
        let filmEntity = await filmModel.findOne({ title: content["title"], categoryId: catId }).exec();

        if (filmEntity != null) {
            if (filmEntity.trailerUrl == null) {

                const client = rest.wrap(mime)
                    .wrap(errorCode, { code: 500 });

                client({ path: 'http://api.themoviedb.org/3/movie/' + content['imdb']['id'] + '/videos?api_key=d316364b6940ee327b33496b39a8f7e7' }).then(
                    function (response) {
                        console.log('response: ', response);
                        let trailerKey = "https://www.youtube.com/watch?v=" + _.compact(_.map(response, "[results]"))[0][0]['key'];

                        filmModel.findByIdAndUpdate({ _id: filmEntity._id }, { trailerUrl: trailerKey }).exec();
                    },

                    function (response) {
                        console.error('response error: ', response);
                    }
                );

            }
        }
    }
}

async function UpdateFilm(filmId, trailerUrl) {
    return true;
}

async function CheckFilmIsExist(content, catId) {
    if (content["title"] != null || content["title"] != "") {
        let response = await filmModel.findOne({ title: content["title"], categoryId: catId }).exec();

        if (response == null) {
            AddFilm(content, catId);
        }
    }
}

module.exports.AddFilm = AddFilm;
module.exports.GetFilmTrailerUrlByNameAndCategory = GetFilmTrailerUrlByNameAndCategory;
module.exports.UpdateFilm = UpdateFilm;
module.exports.CheckFilmIsExist = CheckFilmIsExist;
module.exports.GetFilmTrailerUrlByName = GetFilmTrailerUrlByName;