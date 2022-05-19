import Head from "next/head";

import Step1 from "../components/step1";
import Step2 from "../components/step2";
import Step3 from "../components/step3";
import { useState, useCallback, useEffect } from "react";
import { amountsAtom, emailAtom, errorAtom, scriptAtom } from "../lib/Store";
import { useRecoilState, useRecoilValue } from "recoil";
import { DownIcon, InfoIcon, LinkIcon } from "../components/Icons";
import isLength from "validator/lib/isLength";
import matches from "validator/lib/matches";
import { motion } from "framer-motion";
import Script from "next/script";
import { GpayIcon, PhonepeIcon, PaytmIcon } from "../components/Icons";
import { styled } from "@stitches/react";
import BlogContainer from "../components/Blogs";
import BlueHeader from "../components/ColorHeader";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import PayComponent from "../components/PayComponent";
import CreateButton from "../components/CreateButton";

const Content = styled("div", {
  minWidth: "0%",
  minHeight: "40%",
  background: "white",

  borderRight: "10px",
  display: "flex",
  flexDirection: "column",
  alignContent: "flex-end",
  textAlign: "center",
  fontFamily: "sans-serif",

  borderRadius: "10px",
});

// add a loading bar
// debug the selection bug

const RenderComponet = ({ state }) => {
  const components = useCallback(() => {
    switch (state) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
    }
  }, [state]);

  return components();
};

export default function Home() {
  const [state, setState] = useState(0);

  const [error, setError] = useRecoilState(errorAtom);

  const [scriptData, setScriptData] = useRecoilState(scriptAtom);

  const [emailData, setEmailData] = useRecoilState(emailAtom);

  const amountList = useRecoilValue(amountsAtom);

  const handleNext = () => {
    const upi_pattern = /[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}/;
    switch (state) {
      case 0:
        const lenCheck = isLength(scriptData.name, { min: 3, max: 25 });

        const upiCheck = matches(scriptData.upi_id, upi_pattern);

        if (lenCheck & upiCheck) {
          setError({ state: 1, message: "" });
          return setState(state + 1);
        } else {
          return setError({
            state: 0,
            message: `Your name length should be greater than 3 letter.Please check your UPI id again.`,
          });
        }
      case 1:
        const buttonCheck = isLength(scriptData.button_label, {
          min: 5,
          max: 25,
        });
        const amountListLength = amountList.length === 4 ? true : false;

        if (buttonCheck && amountListLength) {
          console.log(scriptData);
          console.log(amountList);
          setError({ state: 2, message: "" });
          return setState(state + 1);
        } else {
          return setError({
            state: 1,
            message:
              "Button Label should be of length greater than 3 and less than 25. Please select four amount values in the list.",
          });
        }
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>
          Pay Via UPI || Create Widget, Button and link for your upi id.
        </title>
        <meta
          name="title"
          content="Pay Via UPI || Create Widget, Button and link for your upi id."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Add UPI Donation Option to your website under 60 seconds. Create pay via upi button, link and widget. Best way to add upi id on website. "
        />

        <meta property="og:url" content="https://payviaupi.com" key="ogurl" />
        <meta
          name="image"
          property="og:image"
          content="https://payviaupi.com/header.png"
          key="ogimage"
        />
        <meta property="og:site_name" content="PayViaUPI" key="ogsitename" />
        <meta
          property="og:title"
          content="Pay Via UPI || Add UPI Donation Option to your website under 60 seconds."
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
        <script id="schema" type="application/ld+json">
          {`
  "@context": "http://www.schema.org",
  "@type": "WebSite",
  "name": "Pay Via UPI",
  "alternateName": "Donate via upi",
  "url": "https://payviaupi.com"
`}
        </script>
      </Head>

      <Script
        src="https://unpkg.com/pay-via-upi-lib"
        async
        data-name="pay-via-upi"
        data-cfasync="false"
        data-pa="pratiksharma@boi"
        data-tn=""
        data-cu="INR"
        data-pn="Pratik Sharma"
        data-amount_list="50,100,150,200"
        data-label="Support us"
        data-description="Scan and Pay using UPI!"
        data-color="#000"
        data-position="Right"
        strategy="beforeInteractive"
      ></Script>

      <section className="main ">
        <article className="flex js responsive gap-res">
          <div className="flex column ">
            <div className="container">
              <h1 style={{ textAlign: "center" }}>
                Add UPI Donation Option
                <br />
                to your website under
                <br />
                <span className="text-decoration"> 60 seconds.</span>
              </h1>
            </div>

            <div className="flex center" style={{ margin: "40px 0px" }}>
              <div
                style={{
                  margin: "0px 10px",
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                Support For
              </div>
              <div
                style={{
                  margin: "0px 10px",
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  width: "40px",
                }}
              >
                <GpayIcon />
              </div>
              <div
                style={{
                  margin: "0px 10px",
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  width: "40px",
                }}
              >
                <PaytmIcon />
              </div>
              <div
                style={{
                  margin: "0px 10px",
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  width: "40px",
                }}
              >
                <PhonepeIcon />
              </div>
            </div>

            <a
              style={{ margin: "40px 0px" }}
              className="headerLink flex center"
              href="#create"
            >
              <button style={{ letterSpacing: "0.1rem" }}>
                Stitch a UPI Sticker{" "}
              </button>
            </a>

            <div className="flex center m-5">
              <label> It&apos;s free, and takes less than a minute.</label>
            </div>
          </div>
          <div className="flex center">
            <video
              src="/demo.mov"
              type="video/mov"
              controls
              autoPlay="autoplay"
              style={{ borderRadius: "10px" }}
              loop
              width="270px"
              height="500px"
              muted
            ></video>
          </div>
        </article>
      </section>

      <section
        className="container mobi-responsive"
        style={{
          backgroundColor: "#FFE0DD",
          width: "100vw",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <article className="flex column center">
          <h2 className="mt-10">
            Give Your Supporters <br /> a way to say thanks.
          </h2>
          <p
            style={{
              color: "var(--text-color)",
              fontSize: "25px",
              maxWidth: "700px",
              lineHeight: "40px",
            }}
          >
            Pay Via UPI makes it simple and easy for Supporters <br /> to scan
            and pay to you directly via UPI.
          </p>
        </article>

        <Marquee speed="100" gradient={false} style={{}}>
          <BlueHeader
            color="orange"
            text="Give your followers a way to say thanks!"
          />
          <BlueHeader color="blue" text="Ek Rupiya Tu Humko Udar Dayi De!" />
          <BlueHeader color="purple" text="Ek Rupee ki pepsi tera bhai Sexy!" />
          <BlueHeader
            color="green"
            text="Main aaj bhi pheke hue paise nahin uthata."
          />
          <BlueHeader color="blue" text="Paisa, paise ko kheechta hai." />
          <BlueHeader
            color="orange"
            text="
Arrey oh Sambha ... kitna inaam rakhe hai sarkar ham par?"
          />
          <BlueHeader
            color="green"
            text="
          Kalakar sirf taarif ka bhooka hota hai ... paise ka nahi"
          />
          <BlueHeader
            color="blue"
            text="Maal chahiye chokha, toh note karo ji mota."
          />
          <BlueHeader
            color="orange"
            text="एक चुटकी सिन्दूर की कीमत तुम क्या जानो रमेश बाबू"
          />
          <BlueHeader
            color="blue"
            text="Aap convince hogaye ya main aur bolun?"
          />

          <BlueHeader
            color="green"
            text="Na Biwi Na Bacha, Na Baap Bada Na Maiya, The Whole This Is That Ke Bhaiyya Sabse Bada Rupaiyya"
          />
          <BlueHeader
            color="orange"
            text="Cash meri saans mein Cash Meri Aankhon Mein"
          />
          <BlueHeader color="blue" text="Aamdani athani kharcha Rupaiya" />
          <BlueHeader
            color="green"
            text="Ohh Jaane Waale Babu Ek Paisa De De"
          />
          <BlueHeader
            color="blue"
            text="yeh Duniya hai Kaala Bazaar, yeh Paisa bolta hai "
          />
          <BlueHeader
            color="orange"
            text="Ek Rupaiya Doge to Do kaam Karugi "
          />
        </Marquee>
      </section>

      <section
        className="main flex"
        style={{
          backgroundColor: "#D6DFFF",
          textAlign: "center",
        }}
      >
        <article className="flex js responsive" style={{ gap: "100px" }}>
          <div className="flex column container">
            <h2>
              Create A Widget For <br /> Supporters to scan and pay{" "}
            </h2>
            <p
              style={{
                color: "var(--text-color)",
                fontSize: "25px",
                maxWidth: "700px",
                lineHeight: "40px",
              }}
            >
              No need for coding. <br /> Just Copy and Paste the script on your
              website.
            </p>
          </div>
          <div>
            <Image
              src="/widgetpreview.png"
              alt="Add a pay via upi widget to your website. "
              width="280px"
              height="550px"
              style={{ borderRadius: "20px", border: "2px solid #eee" }}
            />
          </div>
        </article>
      </section>

      <section
        className="main flex"
        style={{ backgroundColor: "#FFF8B7", textAlign: "center" }}
      >
        <article
          className="flex js responsive"
          style={{ alignContent: "center", alignItems: "center" }}
        >
          <div className="flex column container">
            <h2>
              Create Button, Link and Widget. <br /> We got you covered.{" "}
            </h2>
            <p
              style={{
                color: "var(--text-color)",
                fontSize: "25px",
                maxWidth: "700px",
                lineHeight: "40px",
              }}
            >
              Spread through multiple mediums <br /> Add a Button to Blog.{" "}
              <br /> Share a UPI link.
            </p>
            <div className="flex center">
              <input
                className="headerinput"
                disabled
                value={"https://donateviaupi.com/yourupi@id?pn=your name"}
              ></input>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://donateviaupi.com/pratiksharma@boi?pn=Pratik Sharma"
              >
                <LinkIcon />
              </a>
            </div>

            {/* donateviaupi.com/<b>yourupi@id</b>
            <br />
            ?pn=<b>your name</b> */}
          </div>
          <div className="max flex column">
            <Image
              src="/buttons.svg"
              alt="Button Image"
              width="700px"
              height="950px"
            />
          </div>
        </article>
      </section>

      <section
        className="main flex"
        style={{ backgroundColor: "#B7FFBA", textAlign: "center" }}
      >
        <article
          className="flex js responsive"
          style={{ alignContent: "center", alignItems: "center" }}
        >
          <div className="flex column container">
            <h2>
              Donations should be anonymouse. <br /> We Care About Privacy.{" "}
            </h2>
            <p
              style={{
                color: "var(--text-color)",
                fontSize: "25px",
                maxWidth: "700px",
                lineHeight: "40px",
              }}
            >
              ❌ No Sign in Required <br />❌ No data collection <br /> Spoiler:
              We are not a payment gateway.
            </p>
          </div>
          <div>
            <Image
              src="/anonymouse.svg"
              alt="donation should be anonymouse"
              width="500px"
              height="550px"
              style={{ borderRadius: "20px", border: "2px solid #eee" }}
            />
          </div>
        </article>
      </section>

      <section
        id="create"
        className="main flex"
        style={{ backgroundColor: "#fff" }}
      >
        <p>Create Widget for your website. </p>

        <div className="flex ">
          <h2 style={{ marginLeft: "25px" }}>Stitch a UPI Sticker.</h2>
        </div>

        <article
          className="flex js responsive "
          style={{
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex column  ">
            {error.state === state && error.message && (
              <motion.div
                initial={{ y: "-10vh", opacity: "0" }}
                animate={{ y: 0, opacity: 1 }}
              >
                <p className="error max">
                  <span aria-label="info-icon">
                    {" "}
                    <InfoIcon />{" "}
                  </span>{" "}
                  {error.message}
                </p>
              </motion.div>
            )}
            <RenderComponet
              state={state}
              scriptData={scriptData}
              setScriptData={setScriptData}
            />

            <div className="flex js max" style={{ marginTop: "10%" }}>
              {state === 0 ? null : (
                <button onClick={() => setState(state - 1)}>Back</button>
              )}
              {state === 2 ? null : <button onClick={handleNext}> Next</button>}
            </div>
          </div>
          <div className="flex column center">
            <p>
              Preview
              <span>
                <DownIcon />
              </span>
            </p>
            <PayComponent
              pn={scriptData.name}
              amount_list={amountList.join()}
              upiid={scriptData.upi_id}
            />
          </div>
        </article>
      </section>

      <div className="container">
        <div className="main">
          <BlogContainer />
        </div>
      </div>

      <section
        className="main flex"
        style={{ backgroundColor: "#E1CFFF", textAlign: "center" }}
      >
        <article
          className="flex js responsive"
          style={{ alignContent: "center", alignItems: "center" }}
        >
          <div className="flex column container">
            <h2>We are Free and Open sourced</h2>
            <p
              style={{
                color: "var(--text-color)",
                fontSize: "25px",
                maxWidth: "700px",
                lineHeight: "40px",
              }}
            >
              Star us on Github.
            </p>
            <a
              href="https://github.com/pratiksharm/pay-via-upi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Github Repo
            </a>
          </div>
          <Image
            src="/open-sourced.svg"
            alt="donation should be anonymouse"
            width="300px"
            height="550px"
            style={{ borderRadius: "20px", border: "2px solid #eee" }}
          />
        </article>
      </section>
    </>
  );
}

// TODO
// 1. Learn how to create svg on server if not add the svg  and learn how to add text to them.
// 2. Update the Create Widget page.
// 3. Solve the bug on donateviaupi.
