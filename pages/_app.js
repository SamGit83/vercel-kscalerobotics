import '../styles/globals.css';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    var ahrefs_analytics_script = document.createElement('script');
    ahrefs_analytics_script.async = true;
    ahrefs_analytics_script.src = 'https://analytics.ahrefs.com/analytics.js';
    ahrefs_analytics_script.setAttribute('data-key', 'qOXq0oEREO/Mq0i5gpxH2g');
    document.getElementsByTagName('head')[0].appendChild(ahrefs_analytics_script);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#000011" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}