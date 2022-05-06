import { motion } from "framer-motion";
import { useState } from "react";
import { emailAtom } from "../lib/Store";

import { useRecoilState } from "recoil";
import { supabase } from "../utils/supabaseClient";
import isLength from "validator/lib/isLength";
import isEmail from "validator/lib/isEmail";

function SubscriptionEmail() {
  const [_, setEmailAtom] = useRecoilState(emailAtom);

  const [error, setError] = useState("");

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const validate = async () => {
    const emailCheck = isEmail(email);

    const nameCheck = isLength(name, { min: 3 });

    console.log(emailCheck);

    console.log(nameCheck);

    if (emailCheck && nameCheck) {
      const updateData = {
        email: email,
        name: name,
      };
      let { data, error } = await supabase.from("mail").insert(updateData);
      if (error) {
        setError(error.details);
        if (error.code === "23505") {
          setError("yeah! Already a user. Scroll down...");
          setEmailAtom({ is_valide: true });
        }
      }
      if (data) {
        console.log(data);
        setEmailAtom({ is_valide: true });
        setError("You are in!!!! Scroll Down");
      }
    } else {
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
          <h3>Get the Access now !</h3>
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
          {error && <p>{error}</p>}
          <button onClick={validate}>Sure!</button>
        </motion.div>
      </div>
    </>
  );
}

export default SubscriptionEmail;
