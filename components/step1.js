import {useState} from 'react';
import { useRecoilState } from 'recoil';
import { scriptAtom } from '../stores/Store';
import {motion} from 'framer-motion'

function Step1() {
    const [name, setName] = useState();

    const [upi, setUPI] = useState();

    const [data, setData] = useRecoilState(scriptAtom);
    const handleSave = ()=> {

        setData({upi_id: upi, name: name})
    }

    return ( 
<motion.div animate={{opacity: 1,x: "-10vw"}} initial={{opacity: 0, x: '0'}}>

        <div className="flex column">
            <div className="flex column">
                <label> Name</label>
                <input onChange={(e) => setName(e.target.value)} placeholder="your name"/>
            </div>
            <div className="flex column">
                <label>UPI ID</label>
                <input onChange={(e) => setUPI(e.target.value)} placeholder="yourname@bank"/>
            </div>
        </div>
        </motion.div>
     );
}

export default Step1;