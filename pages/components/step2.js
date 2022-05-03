import { useState } from "react";
import { RightIcon } from "./Icons";

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
        <div className="flex column">
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
     );
}

export default Step2;