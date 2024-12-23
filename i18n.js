const isDev = process.env.NODE_ENV === 'development';

const i18nConfig = {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    pages: {
        '*': ['common'],
    },
    loadLocaleFrom: (lang, ns) => import(`./src/lang/${lang}/${ns}.json`).then((m) => m.default),
    reloadOnPrerender: isDev,
};

module.exports = i18nConfig;