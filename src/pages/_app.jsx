import './globals.css';

import Head from 'next/head';

export const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta name='title' content='Portfolio' />
            </Head>

            <Component {...pageProps} />
        </>
    )
}

export default App;