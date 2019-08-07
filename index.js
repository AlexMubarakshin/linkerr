#!/usr/bin/env node

const program = require("commander");
const ora = require("ora");
const chalk = require("chalk");

const path = require("path");

const { parse } = require("./lib/parse");
const { saveFile, isFileAlreadyExist } = require("./lib/file-system");
const { getCurrentDate } = require("./lib/time");

const URL_UTILS = require("./lib/url");

const main = async () => {

    program
        .version("0.0.2")
        .option("-u, --url [Site URL*]", "Site URL")
        .option("-o, --output [Output path]", "Output path")
        .option("-f, --fileName [File name]", "File name")
        .parse(process.argv);

    const PARSE_SITE_URL = program.url;

    if (PARSE_SITE_URL) {

        if (URL_UTILS.isUrlValid(PARSE_SITE_URL)) {
            const formatedURL = URL_UTILS.formatToStandard(PARSE_SITE_URL);

            const spinner = ora();
            spinner.start(`Starting parse ${formatedURL}`);

            try {
                const siteName = URL_UTILS.splitURL(formatedURL).authority;
                const outputPath = program.output || path.join(__dirname, "/output");
                const fileName = program.fileName || siteName + "_" + getCurrentDate() + ".json";

                if (isFileAlreadyExist(outputPath, fileName)) {
                    throw new Error(
                        chalk.red("File with name ") +
                        chalk.cyan(fileName) +
                        chalk.red(" already exist at ") +
                        chalk.cyan(outputPath));
                }

                const parsedData = await parse(formatedURL);

                await saveFile(outputPath, fileName, JSON.stringify(parsedData));

                spinner.succeed(`Site ${chalk.green(formatedURL)} have been parsed`);
                spinner.succeed(`Info saved at ${chalk.cyan(outputPath)}/${chalk.cyan(fileName)}`);
            } catch (e) {
                spinner.fail(e.message);
            }

        } else {
            console.log("URL is not valid!");
        }
    } else {
        console.log("Please specify the URL for parsing\n");
        program.help();
    }
};

main();
