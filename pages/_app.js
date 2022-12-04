import Layout from '../componnent/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return < Layout > <Component {...pageProps} /></Layout >;


}

export default MyApp
