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
        },

        duration: function (minutes, opts) {},
    };
})((window.TutorOS = window.TutorOS || {}));
