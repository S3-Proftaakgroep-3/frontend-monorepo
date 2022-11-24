import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Toaster} from "react-hot-toast";
import classNames from "classnames/dedupe";
import styles from "../styles/item.module.css";
import fonts from "../styles/fonts.module.css";
import * as React from "react";

function CustomersFrontendApp({ Component, pageProps }: AppProps) {
  return (
      <div>
        <Toaster toastOptions={{
          className: classNames(styles.toast, fonts.m_primary)
        }} />
        <Component {...pageProps} />
      </div>
  )
}

export default CustomersFrontendApp
