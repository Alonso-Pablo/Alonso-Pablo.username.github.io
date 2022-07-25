import { Head } from "next/head"
import IndexPage from "../components/IndexPage/IndexPage"

function MyApp({ Component, pageProps }) {

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
