import Head from "next/head";
import styles from "../styles/Home.module.css";
import Script from "next/script";
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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
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
          <div style={{ marginTop: "100px" }}>
            <DownIcon />
            Scroll Down
          </div>
        </main>

        <div className="container">
          <div className="main">
            <SubscriptionEmail />
          </div>
        </div>

        {emailData.is_valide && (
          <div className={styles.container}>
            <div className={styles.main}>
              <h3>Let&apos;s do this!!</h3>

              {error.state === state && error.message && (
                <motion.div
                  initial={{ y: "-10vh", opacity: "0" }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <article className="error">
                    <span aria-label="info-icon">
                      {" "}
                      <InfoIcon />{" "}
                    </span>{" "}
                    {error.message}
                  </article>
                </motion.div>
              )}
              <RenderComponet
                state={state}
                scriptData={scriptData}
                setScriptData={setScriptData}
              />

              <div className="flex js" style={{ width: "350px" }}>
                {state === 0 ? null : (
                  <button onClick={() => setState(state - 1)}>Back</button>
                )}
                {state === 2 ? null : (
                  <button onClick={handleNext}> Next</button>
                )}
              </div>
            </div>
          </div>
        )}

        <footer className={styles.footer}>
          <a
            href="https://twitter.com/biomathcode"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created by
            <span className={styles.logo}>{"  Pratik Sharma "}</span>
          </a>
        </footer>
      </div>
    </>
  );
}
