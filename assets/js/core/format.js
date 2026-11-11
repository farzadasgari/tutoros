(function (TutorOS) {
    'use strict';

    let CURRENCIES = {
        USD: {
            code: 'USD',
            symbol: '$',
            symbolEn: '$',
            decimals: 2,
            position: 'before',
        },
        EUR: {
            code: 'EUR',
            symbol: '€',
            symbolEn: '€',
            decimals: 2,
            position: 'before',
        },
        IRT: {
            code: 'IRT',
            symbol: 'تومان',
            symbolEn: 'Toman',
            decimals: 0,
            position: 'after',
        },
        IRR: {
            code: 'IRR',
            symbol: '﷼',
            symbolEn: 'Rial',
            decimals: 0,
            position: 'after',
        },
    };

    let WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let WEEKDAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let MONTHS = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    let MONTHS_SHORT = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    let fmt = {
        number: function (n, decimals) {
            if (n === null || n === undefined || isNaN(n)) return '–';

            let d = decimals === undefined ? 0 : decimals;
            return Number(n).toLocaleString('en-US', {
                minimumFractionDigits: d,
                maximumFractionDigits: d,
            });
        },

        money: function (amount, currency, opts) {
            opts = opts || {};
            let cur = CURRENCIES[currency || fmt.defaultCurrency] || CURRENCIES.IRT;
            if (amount === null || amount === undefined || isNaN(amount)) {
                return '<span class="money">–</span>';
            }
            let cls = 'money';
            if (opts.signed && amount > 0) cls += ' is-pos';
            if (amount < 0) cls += ' is-neg';

            let body = fmt.number(Math.abs(amount), cur.decimals);
            let sign = amount < 0 ? '–' : opts.signed && amount > 0 ? '+' : '';
            let unit = `<span class="cur">${cur.symbol}</span>`;
            let inner = cur.position === 'before' ? unit + sign + body : sign + body + ' ' + unit;
            return '<span class="' + cls + '">' + inner + '</span>';
        },

        moneyText: function (amount, currency) {
            let cur = CURRENCIES[currency || fmt.defaultCurrency] || CURRENCIES.IRT;
            if (amount === null || amount === undefined || isNaN(amount)) return '–';

            let body = fmt.number(amount, cur.decimals);

            return cur.position === 'before' ? cur.symbol + body : body + ' ' + cur.symbol;
        },

        moneyCompact: function (amount, currency) {
            let cur = CURRENCIES[currency || fmt.defaultCurrency] || CURRENCIES.IRT;
            if (!amount && amount !== 0) return '–';

            let abs = Math.abs(amount), out;

            if (abs >= 1e9) out = (amount / 1e9).toFixed(abs >= 1e10 ? 0 : 1) + "B";
            else if (abs >= 1e6) out = (amount / 1e6).toFixed(abs >= 1e7 ? 0 : 1) + "M";
            else if (abs >= 1e3) out = (amount / 1e3).toFixed(0) + "K";
            else out = String(amount)

            return out.replace(".0", "") + " " + cur.symbol
        },

        duration: function (minutes, opts) {},
    };
})((window.TutorOS = window.TutorOS || {}));
