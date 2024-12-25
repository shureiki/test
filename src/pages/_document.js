import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
    return (
        <Html lang='fr' className='bg-black'>
            <Head />
            <body className='relative bg-black min-h-screen'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}