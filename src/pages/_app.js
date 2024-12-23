import { TranslationProvider } from '@/contexts/locale';
import './globals.css';

export default function App({ Component, pageProps }) {
    return (
        <TranslationProvider>
            <Component {...pageProps} />
        </TranslationProvider>
    )
}