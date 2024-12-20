import { Html, Head, Main, NextScript } from 'next/document'

export const Document = () => {
    return (
        <Html lang='en' className='h-full bg-black'>
            <Head>
                <meta name='title' content='Portfolio' />
                <meta name='description' content='A portfolio' />
                <meta name='keywords' content='portfolio, shurei, shureiki' />
                <meta name='author' content='shureiki' />

                <meta name='theme-color' content='#4285f4' />

                <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
                <meta name='robots' content='index, follow' />
            </Head>
            <body className='relative bg-black h-full'>
                <Main className='*:h-full' />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document;