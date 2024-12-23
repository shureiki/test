import { useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';

export default function RootPage() {
    const { t, lang } = useTranslation('common');

    useEffect(() => {
        console.log(lang);
    }, []);

    return (
        <div>
            <h1>{t('welcome')}</h1>
            <p>{t('hello', { name: 'John' })}</p>
            <p>{t('test')}</p>
            <p>124</p>
        </div>
    )
}