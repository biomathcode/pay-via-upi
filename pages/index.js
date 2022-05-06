import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
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

        console.log(lenCheck);
        console.log(upiCheck);
        console.log(scriptData);

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
          content=" Add UPI Payment Option to your website under 60 seconds."
        />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@biomathcode" key="twhandle" />

        <meta property="og:url" content="https://payviaupi.com" key="ogurl" />
        <meta property="og:image" content="" key="ogimage" />
        <meta property="og:site_name" content="PayViaUPI" key="ogsitename" />
        <meta
          property="og:title"
          content="Add UPI Payment Option to your website under 60 seconds."
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={
            "Add UPI Payment Option to your website under 60 seconds. Free| Open-sourced | Responsive "
          }
          key="ogdesc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        src="https://payviaupi.com/static/main.js"
        async
        data-name="pay-via-upi"
        data-cfasync="false"
        data-pa="pratiksharma@boi"
        data-tn=""
        data-cu="INR"
        data-pn="Pratik Sharma"
        data-amount_list="50,100,150,200"
        data-label="Support me"
        data-description="Scan and Pay using UPI!"
        data-color="#000"
        data-position="Right"
      ></Script>
      <div className="container">
        <main className="main" style={{ marginTop: "40px" }}>
          <motion.h1
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 1.5,
              type: "spring",
              stiffness: 200,
            }}
            initial={{ y: "-10vh", opacity: 0 }}
          >
            Add UPI Payment Option
            <br />
            to your Website
            <br />
            <span className="text-decoration">Under 60 Seconds.</span>
          </motion.h1>
          <motion.p
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 1,
              duration: 1.5,
              type: "spring",
              stiffness: 200,
            }}
            initial={{ x: "10vh", opacity: 0 }}
            style={{ marginTop: "50px" }}
          >
            *Spoiler: We are not a payment gateway!
          </motion.p>
          <div className="flex" style={{ gap: "30px" }}>
            {["Open Sourced", "Free", "Responsive"].map((el, i) => {
              return (
                <motion.p
                  key={el}
                  transition={{
                    delay: 1.5 + i * 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  style={{
                    padding: "10px",
                    border: "2px solid #eee",
                    borderRadius: "10px",
                    color: "#4b4b4b",
                  }}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {el}
                </motion.p>
              );
            })}
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

        <footer className={styles.footer}>
          <div className="flex column" style={{ gap: "20px" }}>
            <a
              href="https://twitter.com/biomathcode"
              target="_blank"
              rel="noopener noreferrer"
            >
              Created by
              {"\u2002Pratik Sharma "}
            </a>
            <a
              href="https://twitter.com/biomathcode"
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
              height="50x"
            />
            © Copyright 2022
          </div>
        </footer>
      </div>
    </>
  );
}
