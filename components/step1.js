import { useRecoilState } from "recoil";
import { scriptAtom } from "../lib/Store";
import { motion } from "framer-motion";
import Image from "next/image";
function Step1() {
  const [data, setData] = useRecoilState(scriptAtom);

  return (
    <div className="flex column max container">
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: "-10vw" }}
      >
        <p>
          <b>Step 1:</b> Add your name and upi id. Please don&apos;t add phone
          number.
        </p>

        <div className="flex column">
          <label> Name*</label>
          <input
            autoComplete="do-not-autofill"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder="your name"
          />
        </div>
        <div className="flex column">
          <label>UPI ID*</label>

          <input
            autoComplete="do-not-autofill"
            value={data.upi_id}
            onChange={(e) => setData({ ...data, upi_id: e.target.value })}
            placeholder="yourname@bank"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Step1;
