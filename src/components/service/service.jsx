import { Fade } from "react-awesome-reveal";
import "./service.css";

export default function Service(){
    return <Fade triggerOnce delay={100}>
        <div className="service-section text-center flex-d-col flex-a-cen-j-cen">
            <Fade triggerOnce direction="up" delay={200}>
                <div className="font-50">
                    <span className="light-gradient">We are Dedicated</span> to the Expansion
                    of <span className="light-gradient">your Business</span>
                </div>
            </Fade>

            <div className="service-buttons text-upper flex font-30 medium-bold">
                <Fade triggerOnce cascade damping={.3} delay={350} direction="up" >
                <div className="individual"><span>for</span> &nbsp; individual</div>
                <div className="corporate"><span>for</span> &nbsp; corporate</div>
                </Fade>
            </div>
            <Fade triggerOnce delay={700}>
                <div className="connect outlined-button">
                    <div className="mas">Let's Connect</div>
                    <div className="button">Let's Connect</div>
                </div>
            </Fade>
        </div>
    </Fade>
}