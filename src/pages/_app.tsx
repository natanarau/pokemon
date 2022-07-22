import Script from 'next/script';
import Head from 'next/head';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.css';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="cache-control" content="public" />
        <meta httpEquiv="Cache-Control" content="max-age=31536000" />
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex" />
        <title>Pokemon</title>
      </Head>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
          `,
        }}
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
