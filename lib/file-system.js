const fs = require("fs");
const path = require("path");

module.exports = {
    saveFile: async (dir, fileName, data) => {
        return new Promise((resolve, reject) => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }

            const savePath = path.format({
                dir,
                base: fileName
            });

            fs.writeFile(savePath, data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    },
    isFileAlreadyExist: (dir, fileName) => {
        if (!fs.existsSync(dir)) {
            return false;
        }

        const isFileAlreadyExist = fs
            .readdirSync(dir)
            .indexOf((fileName)) >= 0;

        return isFileAlreadyExist;
    }
};