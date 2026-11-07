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

    let WEEKDAYS_SHORTS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
})((window.TutorOS = window.TutorOS || {}));
