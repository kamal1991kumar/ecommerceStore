import Head from 'next/head';
import '../scss/index.scss';

export default function App( { router, Component, pageProps } ) {

    return(
        <>
            <Head>
                <title>Ecommerce Store</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous" />
            </Head>
            { router.pathname === '/' || router.pathname === '/_error' ? null : <div>hi</div> }
            <Component { ...pageProps } />
        </>
    );

}