import { RecoilRoot } from "recoil";
import Image from "next/image";
import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        <Link href="/" passHref>
          <li style={{ display: "flex" }}>
            <Image
              src="/logo.svg"
              alt="Logo of pay via upi"
              width="40px"
              height="40x"
            />
            <div className="logo"> Pay Via UPI</div>
          </li>
        </Link>
        <li className="">Watch Demo</li>
      </nav>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
