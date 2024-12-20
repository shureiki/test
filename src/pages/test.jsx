import Head from 'next/head'

export const Test = () => {
    return (
        <div>
            <Head>
                <title>Test page</title>
                
                <meta name='title' content='Test page' />
                <meta name='description' content='Test page tamaman' />
                <meta name='theme-color' content='#00FFFF' />
            </Head>

            <p>TEST PAGE !!!</p>
        </div>
    )
}

export default Test;