import Head from 'next/head'

export const Test = () => {
    return (
        <div>
            <Head>
                <title key="title">Test Page</title>
                
                <meta name="title" content="Test Page" key="meta-title" />
                <meta name="theme-color" content="#00FF00" key="meta-theme-color" />
            </Head>

            <p>TEST PAGE !!!</p>
        </div>
    )
}

export default Test;