import { RecoilRoot } from 'recoil'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <RecoilRoot>
  <nav>

        <li className='logo'>Pay Via UPI</li>
      </nav>
  <Component {...pageProps} />

  </RecoilRoot>

  </>
  ) 
  
}

export default MyApp
