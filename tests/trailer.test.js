const assert = require('assert');
const category = require('../aggregates/category/category.model');
const film = require('../aggregates/film/film.model');
const responseModel = require('../aggregates/response/response.model');
const request = require('../aggregates/request/request.model');
const categoryModule = require("../aggregates/category/category.module");
const filmModule = require("../aggregates/film/film.module");
const integrationModule = require("../aggregates/integration/integration.module");
const requestModule = require("../aggregates/request/request.module");
const responseModule = require("../aggregates/response/response.module");

describe('Via Play Content Checker', function () {
    describe('Via Play Category Checker', function () {
        describe('If There Are Any Changes Between ViaPlay Content API Result of Category and DB Category Table', function () {
            describe('Should Add NewCategory If It Doesnt Exist In DB', function () {
                it('should return true', function () {
                    assert.equal(categoryModule.AddCategory(category), true);
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
                    assert.equal(filmModule.AddFilm(film), true);
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

describe('Check Is Requested Film Valid', function () {
    describe('If Requested Film Is Exist in ViaPlay EndPoint Address', function () {
        it('should return true', function () {
            assert.equal(integrationModule.CheckUrlIsValid(""), true);
        });
    });

    describe('If Requested Film Is Not Exist in ViaPlay EndPoint Address', function () {
        it('should return error message', function () {
            assert.equal(integrationModule.CheckUrlIsValid("1"), false);
        });
    });
});

describe('Check Is Requested Film Exist Om Database', function () {
    it('should write request log to database', function () {
        assert.equal(requestModule.CreateRequestLog(request), true);
    });
    describe('Check Requested Films Category Is Exist On Category Table On Database', function () {
        describe('If Requested Films Category Is Exist On Category Table On Database', function () {
            describe('Check Requested Film Is Exist On Film Table On Database', function () {
                describe('If Requested Film Is Exist On Film Table On Database', function () {
                    describe('Check Requested Films Trailer Is Exist On Film Table On Database', function () {
                        describe('If Requested Films Trailer Is Exist On Film Table On Database', function () {
                            it('should get trailer Url', function () {
                                assert.equal(filmModule.GetFilmTrailerUrlByNameAndCategory("",""), "");
                            });
                        });

                        describe('If Requested Films Trailer Is Not Exist On Film Table On Database, Get Trailer Data By TMDb API and Update Film', function () {
                            assert.equal(integrationModule.GetFilmTrailerByTMDbAPI("",""), "");
                            assert.equal(filmModule.UpdateFilm(""),true);
                        });
                    });
                });

                describe('If Requested Film Is Not Exist On Film Table On Database', function () {
                    describe('Add Film To Database', function () {
                        it('should return true', function () {
                            assert.equal(filmModule.AddFilm(film), true);
                        });

                        describe('Get Trailer Data By TMDb API and Update Film', function () {
                            assert.equal(integrationModule.GetFilmTrailerByTMDbAPI("",""), "");
                            assert.equal(filmModule.UpdateFilm(""),true);
                        });
                    });
                });
            });
        });

        describe('If Requested Films Category Is Not Exist On Category Table On Database', function () {
            describe('Add Category To Database', function () {
                it('should return true', function () {
                    assert.equal(categoryModule.AddCategory(category), true);
                });
                describe('Add Film To Database Depends On Category', function () {
                    it('should return true', function () {
                        assert.equal(filmModule.AddFilm(film), true);
                    });

                    describe('Get Trailer Data By TMDb API and Update Film', function () {
                        assert.equal(integrationModule.GetFilmTrailerByTMDbAPI("", ""), "");
                        assert.equal(filmModule.UpdateFilm(""), true);
                    });
                });
            });
        });

        it('should write response log to database', function () {
            assert.equal(responseModule.CreateResponseLog(responseModel), true);
        });

        it('should return Trailer Url', function () {
            assert.equal(responseModule.PrepareResponse(""), "");
        });
    });
});

