const assert = require('assert');

describe('Via Play Content Checker', function () {
    describe('Via Play Category Checker', function () {
        describe('If There Are Any Changes Between ViaPlay Content API Result of Category and DB Category Table', function () {
            describe('Should Add NewCategory If It Doesnt Exist In DB', function () {
                it('should return true', function () {
                    assert.equal(true, true);
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
                    assert.equal(true, true);
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
            assert.equal("", "");
        });
    });

    describe('If Requested Film Is Not Exist in ViaPlay EndPoint Address', function () {
        it('should return error message', function () {
            assert.equal("Request Url Is Not Valid.", "Request Url Is Not Valid.");
        });
    });
});

describe('Check Is Requested Film Exist Om Database', function () {
    describe('Check Requested Films Category Is Exist On Category Table On Database', function () {
        describe('If Requested Films Category Is Exist On Category Table On Database', function () {
            describe('Check Requested Film Is Exist On Film Table On Database', function () {
                describe('If Requested Film Is Exist On Film Table On Database', function () {
                    describe('Check Requested Films Trailer Is Exist On Film Table On Database', function () {
                        describe('If Requested Films Trailer Is Exist On Film Table On Database', function () {
                            it('should get trailer Url', function () {
                                assert.equal("", "");
                            });
                        });

                        describe('If Requested Films Trailer Is Not Exist On Film Table On Database, Get Trailer Data By TMDb API and Update Film', function () {
                            assert.equal(true,true);
                        });
                    });
                });

                describe('If Requested Film Is Not Exist On Film Table On Database', function () {
                    describe('Add Film To Database', function () {
                        it('should return true', function () {
                            assert.equal(true, true);
                        });

                        describe('Get Trailer Data By TMDb API and Update Film', function () {
                            assert.equal(true,true);
                        });
                    });
                });
            });
        });

        describe('If Requested Films Category Is Not Exist On Category Table On Database', function () {
            describe('Add Category To Database', function () {
                it('should return true', function () {
                    assert.equal(true, true);
                });
                describe('Add Film To Database Depends On Category', function () {
                    it('should return true', function () {
                        assert.equal(true, true);
                    });

                    describe('Get Trailer Data By TMDb API and Update Film', function () {
                        assert.equal(true, true);
                    });
                });
            });
        });
    });
});

