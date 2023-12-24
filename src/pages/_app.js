import '@/styles/globals.css';
import Layout from '@/components/Layout';
import Providers from '@/redux/Provider';

export default function App({ Component, pageProps }) {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  )
}
