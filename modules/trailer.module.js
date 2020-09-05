'use strict';

const categoryModel = require('../models/category.model');
const filmModel = require('../models/film.model');
const responseModel = require('../models/response.model');
const requestModel = require('../models/request.model');

class TrailerModule{
    static CheckViaPlayContentChanges() {
        return true;
    }

    static AddCategory(category) {
        return true;
    }

    static AddFilm(film) {
        return true;
    }

    static GetFilmTrailerUrlByNameAndCategory(filmName, categoryId) {
        return "";
    }

    static UpdateFilm(filmId, trailerUrl) {
        return true;
    }

    static CheckUrlIsValid(url) {
        if (url=="1")
            return false;
        return true;
    }

    static GetFilmTrailerByTMDbAPI(filmName, token) {
        return "";
    }

    static PrepareResponse(requestUrl) {
        return "";
    }

    static CreateRequestLog(requestModel) {
        return true;
    }

    static CreateResponseLog(responseModel) {
        return true;
    }
}

module.exports = TrailerModule;