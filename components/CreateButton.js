import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RightIcon, InfoIcon, ClipboardIcon } from "./Icons";
import Image from "next/image";
import { styled } from "@stitches/react";
import * as Dialog from "@radix-ui/react-dialog";
import isLength from "validator/lib/isLength";
import matches from "validator/lib/matches";
import useCopy from "@react-hook/copy";
import InputCopy from "./InputCopy";

const Overlay = styled(Dialog.Overlay, {
  background: "rgba(0 0 0 / 0.5)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "grid",
  placeItems: "center",
  overflowY: "auto",
});

const Content = styled(Dialog.Content, {
  minWidth: 300,
  maxWidth: 300,
  background: "white",
  padding: 30,
  borderRadius: 4,
  textOverflow: "ellipsis",
});

const data = [
  { color: "#A259FF", image: "https://payviaupi.com/default-purple.png" },
  {
    color: "#1ABCFE",
    image: "https://payviaupi.com/default-sky.png",
  },
  {
    color: "#F24E1E",
    image: "https://payviaupi.com/default-orange.png",
  },
  {
    color: "#DA3434",
    image: "https://payviaupi.com/default-red.png",
  },
  {
    color: "#558942",
    image: "https://payviaupi.com/default-green.png",
  },
];

function CreateButton() {
  const [name, setName] = useState("");
  const [upid, setUpiID] = useState("");

  const [error, setError] = useState("");

  const [option, setOption] = useState(0);

  const [amounts, setAmounts] = useState([]);

  const [code, setCode] = useState("");

  const [genState, setGenState] = useState(false);

  const [link, setLink] = useState("");
  const { copied, copy, reset } = useCopy(code);

  useEffect(() => {
    const linkdata = `https://donateviaupi.com/${upid}?pn=${encodeURI(
      name
    )}&amount_list=${amounts.join()}`;

    const anchorlink = `<a
        href="${linkdata}"
        target="_blank"
        rel="noreferrer"
      >
        <img style="width:200px !important; height: 60px !important" src="${data[option].image}" alt="donate via upi button" />
      </a> `.toString();

    setLink(linkdata);

    setCode(anchorlink);
  }, [option, amounts, upid, name]);

  function handleList(el) {
    if (amounts.includes(el)) {
      const newlist = amounts.filter((e) => e !== el);
      setAmounts([...newlist]);
    }
    if ((amounts.length < 4) & !amounts.includes(el)) {
      const amoutList = amounts.length === null ? true : false;
      if (amoutList) {
        setAmounts([el]);
      } else {
        setAmounts([...amounts, el]);
      }
    }
  }
  function validate() {
    const upi_pattern = /[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}/;
    const lenCheck = isLength(name, { min: 3, max: 25 });

    const upiCheck = matches(upid, upi_pattern);

    const amountListLength = amounts.length === 4 ? true : false;

    if (lenCheck & upiCheck & amountListLength) {
      setGenState(true);
      setError("");
    } else {
      return setError(
        `Your name length should be greater than 3 letter.Please check your UPI id again. Please select 4 amount values.`
      );
    }
  }

  return (
    <section
      className="main flex container "
      id="donatebutton"
      style={{ backgroundColor: "#fff" }}
    >
      <h2 className="container">Create a Donate Via UPI Button.</h2>
      <p>Copy and Paste the button on your blog. </p>
      {error && (
        <motion.div
          initial={{ y: "-10vh", opacity: "0" }}
          animate={{ y: 0, opacity: 1 }}
        >
          <p className="error max">
            <span aria-label="info-icon">
              {" "}
              <InfoIcon />{" "}
            </span>{" "}
            {error}
          </p>
        </motion.div>
      )}

      <article
        className="flex js responsive  "
        style={{
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container flex column">
          <div className="flex column">
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="your name"
            />
          </div>
          <div className="flex column">
            <label>UPI ID</label>
            <input
              value={upid}
              onChange={(e) => setUpiID(e.target.value)}
              placeholder="your upi id"
            />
          </div>

          <div className="flex column max" style={{ margin: "20px 0px" }}>
            <div className="flex ">
              <label style={{ marginRight: "20px" }}>Chose Ring Color</label>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: data[option].color,
                }}
              ></div>
              <select onChange={(e) => setOption(e.target.value)}>
                {data.map((arr, el) => {
                  return (
                    <option key={el} value={el}>
                      {arr.color}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="flex column max ">
            <label>
              Select four amounts that you would like to get receive .(₹){" "}
            </label>
            <div className="flex" style={{ flexWrap: "wrap", gap: "10px" }}>
              {[
                "10",
                "20",
                "50",
                "100",
                "150",
                "200",
                "500",
                "750",
                "1000",
                "1500",
                "2000",
              ].map((el) => {
                return (
                  <div
                    tabIndex="0"
                    value={el}
                    onClick={() => handleList(el)}
                    className="listItem"
                    style={{
                      padding: "10px 10px",
                      display: "flex",
                      flexWrap: "wrap",
                      maxHeight: "100px",
                      maxWidth: "120px",
                      width: "100px",
                      justifyContent: "space-between",
                      gap: "10px",
                      listStyle: "none",
                      border: amounts.includes(el)
                        ? "1px solid green"
                        : "1px solid #eee",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    key={el}
                  >
                    <span>{el}</span>
                    {amounts.includes(el) && <RightIcon />}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex center" style={{ marginTop: "40px" }}>
            <Dialog.Root>
              {genState ? (
                <Dialog.Trigger>Generate</Dialog.Trigger>
              ) : (
                <button onClick={() => validate()}> Validate</button>
              )}

              <Dialog.Portal>
                <Overlay>
                  <Content>
                    <div>
                      <div></div>

                      {code && (
                        <code style={{ wordWrap: "break-word" }}>{code}</code>
                      )}

                      <button style={{ padding: "5px 5px" }} onClick={copy}>
                        {copied === false ? (
                          <div
                            style={{
                              gap: "10px",
                              alignContent: "center",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            <ClipboardIcon />
                          </div>
                        ) : (
                          "Copied"
                        )}
                      </button>

                      <InputCopy text={link} />
                    </div>
                  </Content>
                </Overlay>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <img
            src={data[option].image}
            width="218px"
            height="60px"
            alt="purple button "
          />
        </div>
      </article>
    </section>
  );
}

export default CreateButton;
