import Head from 'next/head'

export const Test = () => {
    return (
        <div>
            <Head>
                <title>Test page</title>
                
                <meta name='title' content='test page' />
                <meta name='description' content='test page' />
                <meta name='theme-color' content='#00FF00' />
            </Head>

            <p>TEST PAGE !!!</p>
        </div>
    )
}

export default Test;