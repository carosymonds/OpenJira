import Document, { DocumentContext, DocumentInitialProps,Html, Head, Main, NextScript } from 'next/document'
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps, 
      styles: React.Children.toArray([initialProps.styles])

    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="shortcut icon" href='/favicon.ico'></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument
