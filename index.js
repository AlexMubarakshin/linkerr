const program = require("commander");
const ora = require("ora");

const parse = require("./lib/parse").parse;
const saveFile = require("./lib/file-system").saveFile;
const getCurrentDate = require("./lib/time").getCurrentDate;


const main = async () => {

    program
        .version("0.0.1")
        .option("-u, --url [Site URL]", "Site URL")
        .parse(process.argv);

    const PARSE_SITE_URL = program.url;

    if (PARSE_SITE_URL) {
        const spinner = ora();
        spinner.start(`Starting parse ${PARSE_SITE_URL}`);

        parse(PARSE_SITE_URL).then(async info => {
            const infoPath = __dirname + "/parsed-data/";
            const fileName = getCurrentDate() + ".json";

            await saveFile(infoPath, fileName, JSON.stringify(info));

            spinner.succeed(`Site ${PARSE_SITE_URL} have been parsed`);
            spinner.succeed(`Info saved at ${infoPath}/${fileName}`);
        });
    } else {
        program.help();
    }
};

main();