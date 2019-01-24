const URL_REGEX = new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");

module.exports = {
    isUrlValid: function (url) {
        return url.match(URL_REGEX);
    },
    splitURL: function (url) {
        const matches = url.match(URL_REGEX);
        return {
            scheme: matches[2],
            authority: matches[4],
            path: matches[5],
            query: matches[7],
            fragment: matches[9]
        };
    },
    formatToStandard: function (url) {
        let formatedURL = url;
        const splitedURL = this.splitURL(url);

        if (!splitedURL.scheme) {
            formatedURL = "https://" + formatedURL;
        }

        return formatedURL;
    },
    addHostnameToLink: function (hostName, link) {
        if (link[0] === "/" || link[0] === "#") {
            return hostName + link;
        }

        return link;
    }
};