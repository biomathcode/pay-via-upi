import { motion } from "framer-motion";
import Link from "next/link";


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
    return ( 
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        >
            <div className="flex column">
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