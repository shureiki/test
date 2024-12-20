import Head from 'next/head'

export const Test = () => {
    return (
        <div>
            <Head>
                <title>TEST !!!</title>

                <meta name='title' content='TEST !!!' key='title' />
                <meta name='theme-color' content='#00FF00' key='theme-color' />
            </Head>

            <p>TEST PAGE !!!</p>
        </div>
    )
}

export default Test;