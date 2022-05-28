import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
function BlogReactSite() {
  return (
    <div className="flex column center">
      <div className="" style={{ marginTop: "100px" }}>
        <Head>
          <title>How to add pay via upi Button on React site?</title>
        </Head>
        <Script
          strategy="beforeInteractive"
          id="how-to-add-pay-via-upi-widget-on-react-app"
        >
          {`
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.payviaupi.com/blogs/how-to-add-pay-via-upi-widget-on-react-site"
  },
  "headline": "How to add pay via upi Widget on react site?",
  "image": "https://payviaupi.com/How-to-add-pay-via-upi-widget-on-react-site.jpeg",  
  "author": {
    "@type": "Person",
    "name": "Pratik Sharma",
    "url": "https://twitter.com/biomathcode"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "Pay Via UPI",
    "logo": {
      "@type": "ImageObject",
      "url": "https://payviaupi.com"
    }
  },
  "datePublished": "2022-05-28"
`}
        </Script>
        <style jsx>
          {`
            @media screen and (max-width: 480px) {
              article {
                max-width: 350px;
                padding: 10px;
              }
              p {
                margin-bottom: 40px;
              }
            }
            @media screen and (min-width: 780px) {
              article {
                max-width: 690px;
              }
            }
          `}
        </style>
        <article>
          <h1>How to add pay via upi Button on Create React App site?</h1>

          <div className="flex js">
            <p>Date: 21 May 2022</p>

            <p>
              <a href="https://twitter.com/biomathcode">By Pratik Sharma</a>{" "}
            </p>
          </div>

          <main>
            <p>
              1. Get the script tag from
              <a src="https://payviaupi.com"> PayViaUPI.com </a>
              add your details UPI ID, name.
            </p>

            <p>
              2. Copy and Paste the Script that you got from the Previous step
              into the
            </p>
          </main>
          <p>here is a CodeSandBox Example that you can fork...</p>
          <iframe
            src="https://codesandbox.io/embed/sweet-shadow-hryroz?fontsize=14&hidenavigation=1&theme=dark"
            style={{
              width: "100%",
              height: "500px",
              border: 0,
              borderRadius: "4px",
              overflow: "hidden",
              marginBottom: "50px",
              marginTop: "50px",
            }}
            title="pay-via-upi-demo"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
        </article>
      </div>
    </div>
  );
}

export default BlogReactSite;
