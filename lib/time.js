module.exports = {
    getCurrentDate: () => {
        const currentDate = new Date();
        const date = `${currentDate.getHours()}-${currentDate.getMinutes()}-${currentDate.getSeconds()}_${currentDate.getDate()}-${currentDate.getMonth()+1}_${currentDate.getFullYear()}`;

        return date;
    }
};