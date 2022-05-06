import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { emailAtom } from "../lib/Store";

function SubscriptionEmail({ gotEmail, setGotEmail }) {
  const [email, setEmail] = useRecoilState(emailAtom);

  const handleName = (e) => {
    setEmail({ ...email, name: e.target.value });
  };

  const handleEmail = (e) => {
    setEmail({ ...email, email: e.target.value });
  };

  const validate = () => {
    setEmail({ is_valide: true });
  };

  return (
    <>
      <div className="flex column max">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: "10vw" }}
        >
          <h3>Get the Access now !</h3>
          <p className=" max ">
            We are still in Beta! We would like to update you if there are any
            changes. Please tell us your email though which we are able to
            contact you. Thanks!
          </p>

          <div className="flex column">
            <label>Full name</label>
            <input
              value={email.name}
              onChange={handleName}
              placeholder="John Doe"
            />
          </div>
          <div className="flex column">
            <label>Email</label>
            <input
              value={email.email}
              onChange={handleEmail}
              placeholder="example@gmail.com"
            />
          </div>
          <button onClick={validate}>Sure!</button>
        </motion.div>
      </div>
    </>
  );
}

export default SubscriptionEmail;
