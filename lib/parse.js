const rp = require("request-promise");
const $ = require("cheerio");

function baseParse(html, selector, attribute) {
    const elements = $(selector,html);
    const parsedInfo = [];
    
    for (let i = 0; i < elements.length; i++) {
        const isAttributeFound = !!elements[i].attribs[attribute];
        isAttributeFound && parsedInfo.push(elements[i].attribs[attribute]);
    }

    return parsedInfo;
}

module.exports = {
    parse: async (resourceURL) => {
        const html = await rp(resourceURL);
        
        const PARSED_INFO = {
            hrefs: undefined,
            imgs: undefined,
            scripts: undefined,
            links: undefined
        };
        
        PARSED_INFO.hrefs = baseParse(html, "a", "href");
        PARSED_INFO.imgs = baseParse(html, "img", "src");
        PARSED_INFO.scripts = baseParse(html, "script", "src");
        PARSED_INFO.links = baseParse(html, "link", "href");
        
        return PARSED_INFO;
    }
};