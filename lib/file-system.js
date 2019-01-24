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
    }
};