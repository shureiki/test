import Head from 'next/head'

export const Test = () => {
    return (
        <div>
            <Head>
                <title>Test page</title>
                
                <meta name='title' content='Test page' key='title' />
                <meta name='description' content='Test page tamaman' key='description' />
                <meta name='theme-color' content='#00FFFF' key='theme-color' />
            </Head>

            <p>TEST PAGE !!!</p>
        </div>
    )
}

export default Test;