import { motion } from "framer-motion";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { amountsAtom, scriptAtom } from "../lib/Store";
import useCopy from "@react-hook/copy";
import { ClipboardIcon } from "./Icons";

const linkData = [
  {
    link: "/how-to-add-donate-via-upi-button-on-wix-site",
    label: " How to add donate via upi button on wix site?",
  },
  {
    link: "/how-to-add-donate-via-upi-button-on-nextjs-site",
    label: "How to add donate via upi button on nextjs site?",
  },
  {
    link: "/how-to-add-donate-via-upi-button-on-create-react-app",
    label: "How to add donate via upi button on Create React App",
  },
];

function Step3() {
  const script = useRecoilValue(scriptAtom);
  const amounts = useRecoilValue(amountsAtom);

  const num = amounts.map((e) => Number(e));
  const sortedAmount = num.sort(function (a, b) {
    return a - b;
  });

  const scriptTag = `<script src='https://payviaupi.com/static/main.js' async data-name="pay-via-upi" data-cfasync="false" data-pa="${script.upi_id.toLowerCase()}" data-tn="" data-cu="INR" data-pn="${
    script.name
  }" data-amount_list="${sortedAmount.join()}" data-label="${
    script.button_label
  }" data-description="Scan and Pay using UPI!" data-color="#000" data-position="Right"></script>`;

  const { copied, copy, reset } = useCopy(scriptTag);

  const urlData = `/preview?pa=${script.upi_id}&pn=${
    script.name
  }&amount_list=${sortedAmount.join()}&button_label=${script.button_label}`;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex column max">
        <code
          style={{
            padding: "10px",
            border: "2px solid #eee",
            borderRadius: "10px",
            overflow: "hidden",
            width: "370px",
            textOverflow: "ellipsis",
          }}
        >
          {scriptTag}
        </code>
        <div className="flex js" style={{ marginTop: "20px" }}>
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

          <div>
            <Link href={urlData} passHref>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="preview-link"
              >
                Preview
              </a>
            </Link>
          </div>
        </div>

        <div>
          <p> Click on the box to copy the code </p>
        </div>
        <div>
          <article>Read more about how to add it on your website. </article>
          {linkData.map((el) => {
            return (
              <li key={el.link}>
                <Link href={el.link}>{el.label}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Step3;
