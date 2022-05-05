import { motion } from "framer-motion";
import { useRecoilState, useRecoilValue } from "recoil";
import { emailAtom } from "../stores/Store";

function SubscriptionEmail({gotEmail, setGotEmail}) {

    const [email, setEmail ] = useRecoilState(emailAtom);

    const handleName = (e) => {
      setEmail({name: e.target.value})
    }

    const handleEmail = (e) => {
      setEmail({email: e.target.value})
    }

    const validate = () => {
      setEmail({is_valide: true});
    }

    return ( 
<motion.div animate={{opacity: 1,x: "-10vw"}} initial={{opacity: 0,x: '0'}}>
<div className='flex column max'>
            <p>We are still in Beta! We would like to update you if there are any changes. Please tell us your email though which we are able to contact you. Thanks! </p>

        <div className="flex column">
          <label>Full name</label>
          <input value={email.name} onChange={handleName} placeholder='John Doe'/>
        </div>
          <div className="flex column">
            <label>Email</label>
            <input value={email.email} onChange={handleEmail}  placeholder='example@gmail.com'/>
          </div>
          <button onClick={validate}>Sure!</button>
      </div>

</motion.div>      
       
     );
}

export default SubscriptionEmail;