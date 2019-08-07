const rp = require("request-promise");
const $ = require("cheerio");

const { addHostnameToLink, splitURL } = require("./url");

const isURLAttribute = (attribute) => {
    return attribute === "src" || attribute === "href";
};

function parseAttributeInSelector(html, selector, attribute, hostURL) {
    const elements = $(selector, html);
    const parsedInfo = [];

    for (let i = 0; i < elements.length; i++) {
        let attributeValue = elements[i].attribs[attribute];
        if (!!attributeValue) {
            if (isURLAttribute(attribute)) {
                attributeValue = addHostnameToLink(hostURL, attributeValue);
            }

            parsedInfo.push(attributeValue);
        }
    }

    return parsedInfo;
}

module.exports = {
    parse: async (resourceURL) => {
        const html = await rp(resourceURL);

        const splitedURL = splitURL(resourceURL);

        const PARSED_INFO = {
            url: resourceURL,
            hrefs: undefined,
            imgs: undefined,
            scripts: undefined,
            links: undefined,
        };

        const hostURL = splitedURL.scheme + "://" + splitedURL.authority;

        PARSED_INFO.hrefs = parseAttributeInSelector(html, "a", "href", hostURL);
        PARSED_INFO.imgs = parseAttributeInSelector(html, "img", "src", hostURL);
        PARSED_INFO.scripts = parseAttributeInSelector(html, "script", "src", hostURL);
        PARSED_INFO.links = parseAttributeInSelector(html, "link", "href", hostURL);

        return PARSED_INFO;
    }
};