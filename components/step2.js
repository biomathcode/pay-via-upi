import { RightIcon } from "./Icons";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { amountsAtom, scriptAtom } from "../lib/Store";

function Step2() {
  const [amountList, setAmountList] = useRecoilState(amountsAtom);

  const [data, setData] = useRecoilState(scriptAtom);

  const handleList = (el) => {
    if (amountList.includes(el.target.innerText)) {
      const newlist = amountList.filter((e) => e !== el.target.innerText);
      setAmountList([...newlist]);
    }
    if ((amountList.length < 4) & !amountList.includes(el.target.innerText)) {
      const amoutList = amountList.length === null ? true : false;
      if (amoutList) {
        setAmountList([el.target.value]);
      } else {
        setAmountList([...amountList, el.target.innerText]);
      }
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: "-10vw" }}
      animate={{ opacity: 1, x: "0" }}
    >
      <div className="flex column max">
        <div className="flex column">
          <label>Button label</label>
          <input
            value={data.button_label}
            onChange={(e) => setData({ ...data, button_label: e.target.value })}
            placeholder="Support Me "
          />
        </div>
        <div className="flex column ">
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
                  onClick={handleList}
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
                    border: amountList.includes(el)
                      ? "1px solid green"
                      : "1px solid #eee",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  key={el}
                >
                  <span>{el}</span>
                  {amountList.includes(el) && <RightIcon />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Step2;
