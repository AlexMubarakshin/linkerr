const program = require("commander");
const ora = require("ora");

const path = require("path");

const { parse } = require("./lib/parse");
const { saveFile } = require("./lib/file-system");
const { getCurrentDate } = require("./lib/time");

const URL_UTILS = require("./lib/url");

const main = async () => {

    program
        .version("0.0.1")
        .option("-u, --url [Site URL]", "Site URL")
        .parse(process.argv);

    const PARSE_SITE_URL = program.url;

    if (PARSE_SITE_URL) {
        if (URL_UTILS.isUrlValid(PARSE_SITE_URL)) {
            const formatedURL = URL_UTILS.formatToStandard(PARSE_SITE_URL);

            const spinner = ora();
            spinner.start(`Starting parse ${formatedURL}`);

            try {
                const info = await parse(formatedURL);
                const siteName = URL_UTILS.splitURL(formatedURL).authority;
                const infoPath = path.join(__dirname , "/parsed-data");
                const fileName = siteName + "_" + getCurrentDate() + ".json";

                await saveFile(infoPath, fileName, JSON.stringify(info));

                spinner.succeed(`Site ${formatedURL} have been parsed`);
                spinner.succeed(`Info saved at ${infoPath}/${fileName}`);
            } catch (e) {
                spinner.fail(`Cannot get ${formatedURL}, check that url is correct!`);
            }

        } else {
            console.log("URL is not valid!");
        }
    } else {
        program.help();
    }
};

main();