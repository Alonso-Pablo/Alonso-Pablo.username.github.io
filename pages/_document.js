import Document, { Html, Head, Main, NextScript } from 'next/document'
import IndexPage from '../components/IndexPage/IndexPage';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <IndexPage />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;900&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}



export default MyDocument
