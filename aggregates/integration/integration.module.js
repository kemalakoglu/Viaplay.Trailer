'use strict';

class IntegrationModule{
    static CheckViaPlayContentChanges() {
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
}

module.exports = IntegrationModule;