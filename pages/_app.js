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

      <footer className="footer responsive">
        <div className="flex column responsive" style={{ gap: "20px" }}>
          <a
            href="https://twitter.com/biomathcode"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created by
            {"\u2002Pratik Sharma "}
          </a>
          <a
            href="https://github.com/pratiksharm/pay-via-upi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Github Repo
          </a>
        </div>
        <div className="flex center">
          <Image
            src="/logo.svg"
            alt="Logo of pay via upi"
            width="50px"
            height="50px"
          />
          © Copyright 2022
        </div>
      </footer>
    </>
  );
}

export default MyApp;
