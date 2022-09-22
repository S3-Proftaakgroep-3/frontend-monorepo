import '../styles/globals.css'
import type { AppProps } from 'next/app'

function CustomersFrontendApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default CustomersFrontendApp
