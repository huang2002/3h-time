const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
], days = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

function padStart(str: string, length: number, pad: string) {
    for (let i = 0; i < length - str.length; i++) {
        str = pad + str;
    }
    return str;
}

function getPostfix(date: number) {
    if ([11, 12, 13].includes(date)) {
        return 'th';
    } else {
        const x = +padStart(date.toString(), 2, '0')[1];
        switch (x) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';;
        }
    }
}

const replacers: {
    [id: string]: (date: Date) => string;
} = {

    YYYY(date) {
        return date.getFullYear().toString();
    },

    YY(date) {
        return date.getFullYear().toString().slice(-2);
    },

    MMMM(date) {
        return months[date.getMonth()];
    },

    MMM(date) {
        return months[date.getMonth()].slice(0, 3);
    },

    MM(date) {
        return padStart((date.getMonth() + 1).toString(), 2, '0');
    },

    M(date) {
        return (date.getMonth() + 1).toString();
    },

    DD(date) {
        return padStart(date.getDate().toString(), 2, '0');
    },

    D(date) {
        return date.getDate().toString();
    },

    dd(date) {
        const d = date.getDate();
        return padStart(d.toString(), 2, '0') + getPostfix(d);
    },

    d(date) {
        const d = date.getDate();
        return d + getPostfix(d);
    },

    HH(date) {
        return padStart(date.getHours().toString(), 2, '0');
    },

    H(date) {
        return date.getHours().toString();
    },

    hh(date) {
        return padStart((date.getHours() % 12).toString(), 2, '0');
    },

    h(date) {
        return (date.getHours() % 12).toString();
    },

    mm(date) {
        return padStart(date.getMinutes().toString(), 2, '0');
    },

    m(date) {
        return date.getMinutes().toString();
    },

    SS(date) {
        return padStart(date.getSeconds().toString(), 2, '0');
    },

    S(date) {
        return date.getSeconds().toString();
    },

    sss(date) {
        return padStart(date.getMilliseconds().toString(), 3, '0');
    },

    ss(date) {
        return padStart(date.getMilliseconds().toString(), 2, '0').slice(0, 2);
    },

    s(date) {
        return date.getMilliseconds().toString().slice(0, 1);
    },

    WW(date) {
        return days[date.getDay() - 1];
    },

    W(date) {
        return days[date.getDay() - 1].slice(0, 3);
    },

    ww(date) {
        return padStart(date.getDay().toString(), 2, '0');
    },

    w(date) {
        return date.getDay().toString();
    },

    A(date) {
        return date.getHours() < 12 ? 'AM' : 'PM';
    },

    a(date) {
        return date.getHours() < 12 ? 'am' : 'pm';
    }

};

export default replacers;
