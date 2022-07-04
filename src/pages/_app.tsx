import type { AppProps } from 'next/app'
import { getLoggedUserId } from '../utils/getLoggedUserId'
import '../styles/globals.css'

// Default way to get a logged user
export const loggedUserId = getLoggedUserId()
export const API_URL = "http://localhost:3005"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
