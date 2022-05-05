import Script from "next/script";
import { useRecoilValue } from "recoil";
import { scriptAtom } from "../stores/Store";

function Preview() {
  const data = useRecoilValue(scriptAtom);

    return ( 
        <div>
          {data &&
          <Script src='static/libs/main.js'
          async
        data-name="pay-via-upi"
        data-cfasync="false"
        data-pa={data.upi_id}
        data-tn=""
        data-cu="INR"
        data-pn={data.name}
        data-amount_list = "100, 500, 1000, 2000"
        data-label = "Donate via UPI"
        data-description="Scan and Pay using UPI!"
        data-color="#000"
        data-position="Right"
      
      strategy="afterInteractive" ></Script>
          
          }
               
        </div>
     );
        

}

export default Preview;