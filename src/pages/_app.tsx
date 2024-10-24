import Activity from '../components/Activity';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../globals.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import 'react-tippy/dist/tippy.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    void new Audio('/assets/pop.mp3').play().catch(() => null);
  }, [router.pathname]);

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>Elias Benbourenane</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='keywords'
          content='eliasbenb, Elias Benbourenane, Elias, Benbourenane, software, developer, engineer, github'
        />
        <meta name='description' content='Elias Benbourenane - Software Engineer' />
        <meta name='author' content='Elias Benbourenane' />
        <link rel='apple-touch-icon' href='/assets/apple-touch-icon.png' />
      </Head>

      <div className='text-black dark:text-white flex flex-row justify-center w-full h-full bg-gradient-to-bl from-white to-[#fff] dark:from-black dark:to-[#0d131f] min-h-screen'>
        <Nav />
        <div className='w-[80%] md:w-[48rem]'>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.pathname} />
          </AnimatePresence>
          <div className='flex justify-between'>
            <Footer />
            <Activity />
          </div>
        </div>
      </div>
    </>
  );
}
export default MyApp;
