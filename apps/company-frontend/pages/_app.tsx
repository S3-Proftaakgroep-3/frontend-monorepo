import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {GoogleOAuthProvider} from "@react-oauth/google";

function MyApp({ Component, pageProps }: AppProps) {
  return <GoogleOAuthProvider clientId="832811407956-q7upo58p482g9slrum1ghjkgukbk32ah.apps.googleusercontent.com"><Component {...pageProps} /></GoogleOAuthProvider>;
}

export default MyApp
