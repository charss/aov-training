import Navbar from '@/components/navbar/navbar'
import '@/styles/globals.css'
Navbar

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
