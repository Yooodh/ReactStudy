import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {
        return (
            <Html lang='ko'>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

/**
 * 서버에서만 랜더링 되고 onclick같은 이벤트 핸들러는 작동하지 않는다.
 */

