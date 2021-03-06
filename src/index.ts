import replacers from "./replacers";

const Time = {

    replacers,

    get(format: string) {
        return Time.format(new Date(), format);
    },

    format(date: Date, format: string) {
        let ans = format;
        const ids = format.match(/(\w)\1*/g);
        if (ids) {
            ids.forEach(id => {
                const replacer = replacers[id];
                if (replacer) {
                    ans = ans.replace(id, replacer(date));
                }
            });
        }
        return ans;
    }

};

export default Time;
