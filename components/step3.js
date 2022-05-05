import { motion } from "framer-motion";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { amountsAtom, scriptAtom } from "../lib/Store";
import { useRouter } from "next/router";

const linkData = [{
    link: '/how-to-add-donate-via-upi-button-on-wix-site', 
    label: ' How to add donate via upi button on wix site?', 
}, 
{
    link: '/how-to-add-donate-via-upi-button-on-nextjs-site', 
    label: 'How to add donate via upi button on nextjs site?'
}, 
{
    link: '/how-to-add-donate-via-upi-button-on-create-react-app', 
    label: 'How to add donate via upi button on Create React App', 
}

];

function Step3() {
    // clipboard with copy the script code and paste it on your website

    // links to how to add it on there website 
    const script = useRecoilValue(scriptAtom)
    const amounts = useRecoilValue(amountsAtom)


    const num =   amounts.map((e) => Number(e))
    const sortedAmount = num.sort(function(a,b){return a -b })
  
    console.log(sortedAmount)

    const scriptTag = `<script src='https://payviaupi.com/static/libs/main.js' async data-name="pay-via-upi" data-cfasync="false" data-pa="${script.upi_id.toLowerCase()}" data-tn="" data-cu="INR" data-pn="${script.name}" data-amount_list="${sortedAmount.join()}" data-label="${script.button_label}" data-description="Scan and Pay using UPI!" data-color="#000" data-position="Right"></script>`

    const router = useRouter();

    const urlData = `/preview?pa=${script.upi_id}&pn=${script.name}&amount_list=${sortedAmount.join()}&button_label=${script.button_label}`

    return ( 
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        >
            <div className="flex column max">
                <code>
                    
                    {scriptTag}

            
                </code>
                <div style={{marginTop: '25px'}}>
                    <Link href={urlData} passHref  >
                    <a target="_blank" rel="noopener noreferrer" className="preview-link" >
                        Preview
                        
                    </a>

                    </Link>
                </div>
                <div>
                    <p> Click on the box to copy the code </p>
                </div>
                <div>
                    <article>Read more about how to add it on your website. </article>
                    {linkData.map((el) =>{
                        return(
                            <li key={el.link}>
                                 <Link   href={el.link}>
                           {el.label}
                        </Link>

                            </li>
                           
                            
                        )
                    })}
                  
                </div>
            </div>

        </motion.div>
     );
}

export default Step3;