import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
    return (
        <Html lang={navigator.language.slice(0, 2)} className='h-full bg-black'>
            <Head />
            <body className='relative bg-black h-full'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}