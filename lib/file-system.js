const fs = require("fs");

module.exports = {
    saveFile: async (path, fileName, data) => {
        return new Promise((resolve, reject) => {
            if (!fs.existsSync(path)){
                fs.mkdirSync(path);
            }

            fs.writeFile(path + fileName, data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
};