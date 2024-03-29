'use strict';

const rest = require('rest');
const mime = require('rest/interceptor/mime');
const errorCode = require('rest/interceptor/errorCode');
const _ = require('lodash');
const categoryModule = require('../category/category.module');
const categoryModel = require('../category/category.model');
const filmModel = require('../film/film.model');
const categoryModules = require('../category/category.module');
const filmModules = require('../film/film.module');


async function CheckViaPlayContentChanges() {

    const client = rest.wrap(mime)
        .wrap(errorCode, { code: 500 });

    client({ path: 'http://content.viaplay.se/pc-se/film' }).then(
        function (response) {
            console.log('response: ', response);
            _.compact(_.map(response, "_embedded['viaplay:blocks']"))[0].forEach(categoryElem => {
                categoryModules.CheckCategoryIsExist(categoryElem);

                let filmList = _.compact(_.map(categoryElem, "['viaplay:products']"))[0];
                if (filmList!=null) {
                    filmList.forEach(filmElem => {
                        filmModules.CheckFilmIsExist(filmElem['publicPath'], categoryElem["id"],filmElem['content']);
                    });
                }

            });
        },

        function (response) {
            console.error('response error: ', response);
        }
    );


    return true;
}

module.exports.CheckViaPlayContentChanges = CheckViaPlayContentChanges;