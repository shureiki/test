import Head from 'next/head';
import './globals.css';

export const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                
                <meta name='title' content='Portfolio' key='title' />
                <meta name='description' content='A portfolio' key='description' />
                <meta name='theme-color' content='#4285f4' key='theme-color' />
            </Head>

            <Component {...pageProps} />
        </>
    )
}

export default App;