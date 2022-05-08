import { motion } from "framer-motion";
import { useState } from "react";
import { emailAtom } from "../lib/Store";

import { useRecoilState } from "recoil";
import { supabase } from "../utils/supabaseClient";
import isLength from "validator/lib/isLength";
import isEmail from "validator/lib/isEmail";
import { Loader } from "./Icons";

function SubscriptionEmail() {
  const [_, setEmailAtom] = useRecoilState(emailAtom);

  const [error, setError] = useState("");

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const validate = async () => {
    setLoading(true);
    const emailCheck = isEmail(email);

    const nameCheck = isLength(name, { min: 3 });

    if (emailCheck && nameCheck) {
      const updateData = {
        email: email,
        name: name,
      };
      let { data, error } = await supabase.from("mail").insert(updateData);
      if (error) {
        setLoading(false);

        setError(error.details);
        if (error.code === "23505") {
          setError("yeah! Already a user. Scroll down...");
          setEmailAtom({ is_valide: true });
        }
      }
      if (data) {
        setEmailAtom({ is_valide: true });
        setError("You are in!!!! Scroll Down");
      }
      setLoading(false);
    } else {
      setLoading(false);
      setError(
        "Please check your email. Name length can not be less than 3 letters. "
      );
    }
  };

  return (
    <>
      <div className="flex column max">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: "10vw" }}
        >
          <h2>Get Access now !</h2>
          <p className=" max ">
            We are still in Beta! We would like to update you if there are any
            changes.
          </p>

          <div className="flex column">
            <label>Full name</label>
            <input
              type="text"
              value={name}
              onChange={handleName}
              placeholder="John Doe"
            />
          </div>
          <div className="flex column">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmail}
              placeholder="example@gmail.com"
            />
          </div>
          <div>{error && <p>{error}</p>}</div>
          <div></div>

          <button onClick={validate}>Sure!</button>
          {loading ? (
            <object
              type="image/svg+xml"
              data="/loader.svg"
              style={{ width: "30px" }}
            >
              svg-animation
            </object>
          ) : null}
        </motion.div>
      </div>
    </>
  );
}

export default SubscriptionEmail;
