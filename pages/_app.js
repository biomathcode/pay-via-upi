import { RecoilRoot } from 'recoil'
import '../styles/globals.css'









function MyApp({ Component, pageProps }) {
  return (
  <>
  <nav>

        <li className='logo'>Pay Via UPI</li>
      </nav>
  <RecoilRoot >

  <Component {...pageProps} />

  </RecoilRoot>

  </>
  ) 
  
}

export default MyApp
