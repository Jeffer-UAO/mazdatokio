import NextNprogress from "nextjs-progressbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/global.scss";
import React from 'react';

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <NextNprogress
        color="blue"
        startPosition={0.3}
        stopDelayMs={200}
        height={10}
      />
      <Component {...pageProps} />
    </>
  );
}
