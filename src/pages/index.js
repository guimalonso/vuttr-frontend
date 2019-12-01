import React from 'react';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import Modal from 'react-modal';

import Main from '../pages/Main';

import GlobalStyle from '../styles/global';

Modal.setAppElement('#__next');

function App() {
  return (
    <>
      <Head>
        <title>VUTTR</title>
      </Head>
      <GlobalStyle />
      <Main />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;