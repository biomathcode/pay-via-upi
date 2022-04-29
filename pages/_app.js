import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Script src='/static/libs/main.js'
    data-name="pay-via-upi"
    data-cfasync="false"
    data-pa="pratiksharma@boi"
    data-tn="thanks for this i am really helpful for the help"
    data-cu="INR"
    data-pn="Pratik Sharma"
    data-amount_list = "100, 500, 1000, 2000"
    data-label = "Pay via UPI"
    data-description="Scan and Pay using UPI!"
    data-color="#000"
    data-position="Right"
  
  strategy="beforeInteractive" ></Script>
    <Component {...pageProps} />

  </>
  ) 
  
}

export default MyApp
