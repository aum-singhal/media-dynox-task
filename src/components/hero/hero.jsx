import { useEffect, useRef, useState } from "react";
import "./hero.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import one from "../../assets/one.jpeg";
import two from "../../assets/two.png";
import three from "../../assets/three.jpeg";
import { Fade } from "react-awesome-reveal";

export default function HeroSection() {
    const images = [one, two, three];
    const [prevIndex, setPrevIndex] = useState(images.length - 1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const containerRef = useRef();
    const [scrollPos, setScrollPos] = useState(0);

    const handleOnClick = (num) => {
        if(num > 0){
            currentIndex === (images.length-1)? setCurrentIndex(0): setCurrentIndex(currentIndex+num);
            prevIndex === (images.length-1)? setPrevIndex(0): setPrevIndex(prevIndex+num);
            nextIndex === (images.length-1)? setNextIndex(0): setNextIndex(nextIndex+num);
        }
        else{
            currentIndex === 0? setCurrentIndex(images.length-1): setCurrentIndex(currentIndex-1);
            prevIndex === 0? setPrevIndex(images.length-1): setPrevIndex(prevIndex-1);
            nextIndex === 0? setNextIndex(images.length-1): setNextIndex(nextIndex-1);
        }
    }

    useEffect(()=>{
        const conWidth = containerRef.current.clientWidth;
        containerRef.current.scrollLeft = conWidth * currentIndex;
    }, [currentIndex])

    return <div className="hero-section flex-a-cen">
        <div className="left flex-d-col flex-j-cen">
            <Fade direction={"down"} triggerOnce cascade damping={.25} delay={200}>
                <div className="font-60 ">
                    Empower Your Business <span className="dark-gradient">Finances</span> 
                </div>
            </Fade>
            <Fade triggerOnce delay={350}>
                <div className="font-22 light-bold font-inter">
                Your Expert Partner in Swift Business Financing, Bridging Gaps, and Ensuring Success. Thrive with Us!
                </div>
            </Fade>
            <Fade triggerOnce direction="up" delay={500}>
                <div className="font-20 flex-a-cen font-roboto gold-color">
                    Discover More &nbsp; <FaArrowRightLong />
                </div>
            </Fade>
        </div>

        <div className="right">
            <Fade delay={300} triggerOnce>

            <div className="image-slider">
                <div ref={containerRef} className="image-holder flex">
                    {
                        images.map((item, index)=><img 
                        key={index} 
                        src={item} 
                        />)
                    }
                </div>
                
                <div className="buttons flex">
                    <div className="" onClick={()=>handleOnClick(-1)}><FaArrowLeftLong /></div>
                    <div className="" onClick={()=>handleOnClick(1)}><FaArrowRightLong /></div>
                </div>
            </div>
            
            <div className="social flex">
                <div className="item">Facebook</div>
                <div className="item">Instagram</div>
                <div className="item">Twitter</div>
            </div>
                    </Fade>
        </div>
    </div>
}