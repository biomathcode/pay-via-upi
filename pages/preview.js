import Head from "next/head";
import { useEffect, useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "@stitches/react";
import {
  CloseIcon,
  GpayIcon,
  PaytmIcon,
  PhonepeIcon,
} from "../components/Icons";
import QRCode from "qrcode";
import { useRouter } from "next/router";

const generateQR = (text) => {
  try {
    return QRCode.toDataURL(text).then((res) => res.toString());
  } catch (err) {
    console.error(err);
  }
};

export const Heading = styled("div", {
  position: "absolute",
  top: "10px",
  left: "80px",
  color: "#6b6b6b",
  letterSpacing: 0,
  fontSize: "12px",
  fontWeight: 100,
  marginBottom: "40px",
});

const Name = styled("div", {
  textDecoration: "underline",
  textDecorationColor: "#8fce00",
  textUnderlineOffset: "5px",
  fontWeight: "500",
  color: "#000",
  fontSize: "16px",
  letterSpacing: ".1rem",
  marginTop: 10,
  padding: 0,
});

const ListContainer = styled("li", {
  listStyle: "none",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "10px",
});

const ListItem = styled("div", {
  fontFamily: "sans-serif",
  padding: "2px 10px 2px 10px",
  border: "2px solid #eee",
  color: "#3A3A3A",
  cursor: "pointer",
  fontSize: "14px",
  borderRadius: "9999px",
  transition: "all 0.3s ease-in",
  "&:hover": {
    border: "2px solid #8fce00",
  },
});

const QRcodeImage = styled("img", {
  margin: 0,
  padding: 0,
  width: "200px",
  height: "200px",
  marginLeft: "auto",
  marginRight: "auto",
});

export const Overlay = styled(Dialog.Overlay, {
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

export const Trigger = styled(Dialog.Trigger, {
  position: "fixed",
  bottom: "15px",
  right: "15px",
});

export const Content = styled(Dialog.Content, {
  minWidth: 300,
  maxWidth: 420,
  background: "white",
  border: "2px solid #eee",
  borderRight: "10px",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  fontFamily: "sans-serif",
  gap: "20px",
  position: "fixed",
  top: "10%",
  padding: 3,
  borderRadius: "10px",
});

export const Close = styled(Dialog.Close, {
  width: "30px",
  height: "30px",
  maxHeight: "50px",
  backgroundColor: "#fff",
  outline: "none",
  border: "none",
  position: "relative",
  left: "260px",
  top: "2px",
  color: "#4b4b4b",
  display: "flex",
  alignContent: "center",
  alignItems: "center",

  borderRadius: "10px",
  padding: "5px",
  "&:hover": {
    backgroundColor: "#eee",
  },
});

const Modal = ({ amounts, pa, pn, button_label }) => {
  const amountList = amounts.split(",");

  const [value, setValue] = useState(amountList[0]);
  const currency = "INR";

  const [img, setImg] = useState("");

  const [url, setUrl] = useState("");

  useEffect(() => {
    let qrcodelink = `upi://pay?cu=${String(currency)}&pa=${pa}&am=${String(
      value
    )}&pn=${encodeURIComponent(pn)}`;
    generateQR(qrcodelink).then((res) => setImg(res));
    setUrl(qrcodelink);
  }, [value, pa, pn]);

  return (
    amountList && (
      <>
        <Head>
          <title> Pay via UPI || Preview</title>
        </Head>

        <Dialog.Root>
          <Trigger>{button_label}</Trigger>
          <Dialog.Portal>
            <Overlay>
              <Content>
                <Close>
                  <CloseIcon />
                </Close>

                <Heading>
                  UPI payment to
                  <Name>{pn}</Name>
                </Heading>
                <div>
                  <div className="flex column">
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        textAlign: "left",
                        marginLeft: "50px",
                        color: "#6B6B6B",
                        marginTop: "20px",
                      }}
                    >
                      Enter the Amount
                    </div>
                    <div className="flex center " style={{ gap: "5px" }}>
                      <label
                        style={{
                          fontSize: "20px",
                          color: "#1F1F1F",
                          alignItems: "center",
                        }}
                      >
                        {" "}
                        {"\u20B9"}{" "}
                      </label>
                      <input
                        tabIndex="0"
                        type="number"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </div>
                  </div>

                  <ListContainer>
                    {amountList &&
                      amountList.map((el) => {
                        return (
                          <ListItem
                            onKeyDown={(e) =>
                              e.key === "Enter" ? setValue(el) : null
                            }
                            tabIndex="0"
                            onClick={() => setValue(el)}
                            key={el}
                          >
                            {"\u20B9" + " " + el}
                          </ListItem>
                        );
                      })}
                  </ListContainer>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0px",
                  }}
                >
                  <QRcodeImage src={img} alt={pa} />
                  <div style={{ fontSize: "14px", color: "#6B6B6B" }}>{pa}</div>
                </div>
              </Content>
            </Overlay>
          </Dialog.Portal>
        </Dialog.Root>
      </>
    )
  );
};

function Preview() {
  const router = useRouter();

  console.log(router.query);

  const { pa, pn, amount_list, button_label } = router.query;

  return (
    <div className="container">
      <div className="main">
        <h1 style={{ marginTop: "10vh" }}>Preview</h1>
        <p>Click the button on the right bottom corner</p>

        {amount_list && (
          <Modal
            amounts={amount_list}
            pa={pa}
            pn={pn}
            button_label={button_label}
          />
        )}
      </div>
    </div>
  );
}

export default Preview;
