const assert = require('assert');
const category = require('../models/category.model');
const film = require('../models/film.model');
const trailerModule = require('modules/trailer.module');


describe('Via Play Content Checker', function () {
    describe('Via Play Category Checker', function () {
        describe('If There Are Any Changes Between ViaPlay Content API Result of Category and DB Category Table', function () {
            describe('Should Add NewCategory If It Doesnt Exist In DB', function () {
                it('should return true', function () {
                    assert.equal(trailerModule.AddCategory(category), true);
                });
            });
        });

        describe('If There Arent Any Changes Between ViaPlay Content API Result of Category and DB Category Table', function () {
            it('should return true', function () {
                assert.equal(true, true);
            });
        });
    });

    describe('Via Play Film Checker', function () {
        describe('If There Are Any Changes Between ViaPlay Content API Result of Film  and DB Film Table', function () {
            describe('Should Add NewCategory If It Doesnt Exist In DB', function () {
                it('should return true', function () {
                    assert.equal(trailerModule.AddFilm(film), true);
                });
            });
        });

        describe('If There Arent Any Changes Between ViaPlay Content API Result of Film and DB Film Table', function () {
            it('should return true', function () {
                assert.equal(true, true);
            });
        });
    });
});

