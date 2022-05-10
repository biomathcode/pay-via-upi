import { RecoilRoot } from "recoil";
import Image from "next/image";
import "../styles/globals.css";
import Link from "next/link";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> Pay Via UPI </title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content=" Add UPI Donation Option to your website under 60 seconds. Create upi qrcode. Get free upi qrcode for your website. "
        />
        <meta
          name="image"
          property="og:image"
          content="https://www.payviaupi.com/header.png"
        />
        <meta name="author" content="Pratik Sharma" />
        <meta name="theme-color" content="#fff" />
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:creator" content="@biomathcode" key="twhandle" />
        <meta name="twitter:title" content="Pay Via UPI" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://payviaupi.com" key="ogurl" />

        <meta property="og:site_name" content="PayViaUPI" key="ogsitename" />
        <meta
          name="url"
          property="og:url"
          content="https://payviaupi.com"
          key="ogsitename"
        />
        <meta
          property="og:title"
          content="Add UPI Donation Option to your website under 60 seconds."
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={
            "Add UPI Donation Option to your website under 60 seconds. Free| Open-sourced | Responsive "
          }
          key="ogdesc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Link href="/" passHref>
          <li style={{ display: "flex" }}>
            <Image
              src="/logo.svg"
              alt="Logo of pay via upi"
              width="40px"
              height="40px"
            />
            <div className="logo"> Pay Via UPI</div>
          </li>
        </Link>
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
