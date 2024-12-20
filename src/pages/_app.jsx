import Head from 'next/head';
import './globals.css';

export const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                
                <meta name='title' content='Portfolio' />
                <meta name='description' content='A portfolio' />
                <meta name='theme-color' content='#4285f4' />
            </Head>

            <Component {...pageProps} />
        </>
    )
}

export default App;