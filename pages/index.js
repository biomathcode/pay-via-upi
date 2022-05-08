import Head from "next/head";

import SubscriptionEmail from "../components/subemail";
import Step1 from "../components/step1";
import Step2 from "../components/step2";
import Step3 from "../components/step3";
import { useState, useCallback } from "react";
import { amountsAtom, emailAtom, errorAtom, scriptAtom } from "../lib/Store";
import { useRecoilState, useRecoilValue } from "recoil";
import { DownIcon, InfoIcon } from "../components/Icons";
import isLength from "validator/lib/isLength";
import matches from "validator/lib/matches";
import { motion } from "framer-motion";
import Script from "next/script";
import Link from "next/link";

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

  return (
    <>
      <Head>
        <title> Pay Via UPI </title>
        <meta
          name="description"
          content=" Add UPI Donation Option to your website under 60 seconds."
        />

        <meta property="og:url" content="https://payviaupi.com" key="ogurl" />
        <meta property="og:image" content="/header.png" key="ogimage" />
        <meta property="og:site_name" content="PayViaUPI" key="ogsitename" />
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
      <div className="container">
        <main className="main">
          <h1 style={{ textAlign: "center" }}>
            Add UPI Donation option to
            <br />
            your website under
            <br />
            <span className="text-decoration"> 60 seconds.</span>
          </h1>
          <div className="flex" style={{ gap: "30px" }}>
            {["Open Source", "Free", "Responsive"].map((el, i) => {
              return (
                <p
                  key={el}
                  style={{
                    color: "#4b4b4b",
                    fontWeight: "600",
                  }}
                >
                  {el}
                </p>
              );
            })}
          </div>

          <div style={{ margin: "50px" }}>
            <Link href="https://youtu.be/W9fLFHTlOkQ" passHref>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="preview-link"
              >
                Watch this
              </a>
            </Link>
          </div>

          <div style={{ marginTop: "100px" }}>
            <DownIcon />
            Scroll Down
          </div>
        </main>

        <div className="container">
          <div className="main">
            <SubscriptionEmail />
            {emailData.is_valide && (
              <div style={{ marginTop: "100px" }}>
                <DownIcon />
                Scroll Down
              </div>
            )}
          </div>
        </div>

        {emailData.is_valide && (
          <div className="container">
            <div className="main">
              <div className="flex column max">
                <h3>Let&apos;s do this!!</h3>
                {error.state === state && error.message && (
                  <motion.div
                    initial={{ y: "-10vh", opacity: "0" }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    <div className="error">
                      <span aria-label="info-icon">
                        {" "}
                        <InfoIcon />{" "}
                      </span>{" "}
                      {error.message}
                    </div>
                  </motion.div>
                )}
                <RenderComponet
                  state={state}
                  scriptData={scriptData}
                  setScriptData={setScriptData}
                />

                <div className="flex js max">
                  {state === 0 ? null : (
                    <button onClick={() => setState(state - 1)}>Back</button>
                  )}
                  {state === 2 ? null : (
                    <button onClick={handleNext}> Next</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex center">
        <p>*Spoiler: We are not a payment gateway</p>
      </div>
    </>
  );
}
