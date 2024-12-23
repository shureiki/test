import React, { createContext, useContext, useState, useEffect } from 'react';

import en from '@/lang/en.json';
import fr from '@/lang/fr.json';

const TranslationContext = createContext();

const translations = {
    en,
    fr,
};

const translate = (lang, key, variables = {}) => {
    const keys = key.split('.');
    let text = translations[lang];

    for (const k of keys) {
        text = text?.[k];

        if (!text) {
            console.warn(`Missing translation for key "${key}" in language "${lang}"`);
            return key;
        }
    }

    return text.replace(/\{\{(.*?)\}\}/g, (_, variable) => variables[variable] || '');
};

export const TranslationProvider = ({ children }) => {
    const [lang, setLang] = useState('en');

    useEffect(() => {
        const userLang = navigator.language.slice(0, 2);

        const supportedLangs = Object.keys(translations);
        const defaultLang = supportedLangs.includes(userLang) ? userLang : 'en';

        setLang(localStorage.getItem('lang') || defaultLang);
    }, []);

    const changeLanguage = (newLang) => {
        setLang(newLang);
        localStorage.setItem('lang', newLang);
    };

    return (
        <TranslationContext.Provider value={{ lang, translate, changeLanguage }}>
            {children}
        </TranslationContext.Provider>
    );
};

export const useTranslation = () => {
    return useContext(TranslationContext);
};
