/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import '../styles/globals.css';
import PropTypes from 'prop-types';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';

export default function App({ Component, pageProps }) {
  return (
    <>
      <HeaderComponent />
      <Component {...pageProps} />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};
