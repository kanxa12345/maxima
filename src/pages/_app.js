import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from '@/redux/Store';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon_io/favicon-16x16.png" type="image/png" size="16x16" />
        <link rel="shortcut icon" href="/images/favicon_io/favicon-32x32.png" type="image/png" size="32x32" />
        <title>Maxima international Pvt. Ltd</title>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  )
}
