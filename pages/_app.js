import '../styles/globals.css';
import { AuthProvider } from '../lib/auth';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp