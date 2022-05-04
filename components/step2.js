import { useState } from "react";
import { RightIcon } from "./Icons";
import {motion} from 'framer-motion';

function Step2() {
    const [amountList, setAmountList] = useState([])

    const handleList = (el) => {
        if(amountList.includes(el.target.innerText) ) {
            const newlist = amountList.filter((e) =>  e  !== el.target.innerText )   
            setAmountList(newlist)
            console.log(newlist)
            }
        if(amountList.length < 4 & !amountList.includes(el.target.innerText) ) {
            setAmountList([...amountList , el.target.innerText])
        } 
    }
    return ( 
        <motion.div initial={{opacity: 0, x: "-10vw"}} animate={{opacity: 1, x:'0'}}>
            <div className="flex column max">
            <div className="flex column">
                <label>Button label</label>
                <input placeholder="Support Me "/>
            </div>
            <div className="flex column">
                <label>Select four priority money price. </label>
                {
                ['10','20', '50', '100', '150', '200', "500", '750', '1000','1500', '2000' ].map((el) => {
                    return (
                        <div tabIndex="0" value={el} onClick={handleList} className="listItem" style={{padding:'10px 10px',display:'flex',justifyContent:'space-between', gap: '10px',  listStyle:'none', border:'1px solid #eee', borderRadius:'5px', cursor:'pointer' }} key={el}>
                     

                          <span>
                          
                            {el}
                              </span>  
                              {amountList.includes(el)  && 
                       <RightIcon/>

                        }
                            </div>
                    )
                })
                
                }
            </div>
        </div>

        </motion.div>
        
     );
}

export default Step2;