import '@/styles/globals.css';
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent';

export default function App({ Component, pageProps }) {
  return (
    <>
      <HeaderComponent />
      <Component {...pageProps} />
    </>
  );
}
