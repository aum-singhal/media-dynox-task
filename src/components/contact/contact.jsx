import "./contact.css";
import one from "../../assets/contact/one.png";
import two from "../../assets/contact/two.png";
import three from "../../assets/contact/three.png";
import forbes from "../../assets/contact/forbes.png";
import fortune from "../../assets/contact/fortune.png";
import outlook from "../../assets/contact/outlook.png";
import { useState } from "react";
import { MdOutlineLocalPhone, MdOutlineEmail, MdLocationPin } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

export default function Contact(){
    const [onep, setOne] = useState(1);
    const [twop, setTwo] = useState(2);
    const [threep, setThree] = useState(3);

    const handleContactClick = (num) => {
        if(num === 1){
            setOne(1); setTwo(2); setThree(3);
        }
        else if(num === 2){
            setOne(3); setTwo(1); setThree(2);
        }
        else{
            setOne(2); setTwo(3); setThree(1);
        }
    }

    return <div className="contact-section flex-d-col">

        <div className="contact flex-a-cen-j-spbet">

            <div className="left flex-d-col font-roboto">
                <Fade direction="up" triggerOnce>
                    <div className="font-40 bold">
                        Let's Get In <span className="dark-gradient">Touch With Us</span>
                    </div>
                </Fade>

                <div className="contact-details font-20 flex-d-col">
                    <Fade direction="up" cascade damping={.25} triggerOnce>
                        <div className="item">
                            <MdOutlineLocalPhone /> +971-05 44 33 88 66
                        </div>
                        <div className="item">
                            <MdOutlineEmail /> info@unifiedinvestments.ae
                        </div>
                        <div className="item">
                            <MdLocationPin className="font-36" /> 
                            <div>
                            Unified Investments, 2nd floor, Al Amal St - 
                                Business Bay-Dubai, United Arab Emirates
                            </div> 
                        </div>
                    </Fade>
                </div>
            </div>

            <div className="right">
               
                    <div className={`image ${onep===1?"one":onep===2?"two":"three"}`} onClick={()=>handleContactClick(1)}><img src={one} alt="" /></div>
                    <div className={`image ${twop===1?"one":twop===2?"two":"three"}`} onClick={()=>handleContactClick(2)}><img src={two} alt="" /></div>
                    <div className={`image ${threep===1?"one":threep===2?"two":"three"}`} onClick={()=>handleContactClick(3)}><img src={three} alt="" /></div>
                
            </div>
        </div>

        <Fade triggerOnce direction="up" delay={100}>
        <div className="sponsor font-roboto flex-a-cen-j-spbet">
            <Fade triggerOnce delay={300} damping={.3} cascade>
            <div className="font-30 bold">Media & publications</div>
            <img src={forbes} alt="" /><img src={fortune} alt="" /><img src={outlook} alt="" />
            </Fade>
        </div>
        </Fade>
    </div>
}