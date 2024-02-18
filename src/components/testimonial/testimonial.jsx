import { Fade } from "react-awesome-reveal";
import "./testimonial.css";
import one from "../../assets/testimonial/one.jpeg";
import two from "../../assets/testimonial/two.jpeg";
import rating from "../../assets/testimonial/rating.png";
import qoute from "../../assets/testimonial/qoute.png";
import { useEffect, useRef, useState } from "react";

export default function Testimonial(){
    const data = [
        {
            one: {
                img: one, name: "Daniel. H", designation: "CEO GetNextDesign", desc: "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among six are leave law built now."
            },
            two: {
                img: two, name: "John H", designation: "Design", desc: "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among six are leave law built now."
            }
        },
        {
            one: {
                img: one, name: "Daniel. H", designation: "CEO GetNextDesign", desc: "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among six are leave law built now."
            },
            two: {
                img: two, name: "John H", designation: "Design", desc: "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among six are leave law built now."
            }
        },
        {
            one: {
                img: one, name: "Daniel. H", designation: "CEO GetNextDesign", desc: "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among six are leave law built now."
            },
            two: {
                img: two, name: "John H", designation: "Design", desc: "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among six are leave law built now."
            }
        },
    ]

    const testimonialRef = useRef();
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(()=>{
        const width = testimonialRef.current.clientWidth;
        testimonialRef.current.scrollLeft = width * selectedIndex;
        
    }, [selectedIndex])


    return <div className="testimonial-section flex-d-col flex-j-cen">
        <Fade triggerOnce delay={200} direction="up">
            <div className="font-40 bold text-upper text-center font-roboto dark-gradient">testimonials</div>
        </Fade>

        <Fade triggerOnce delay={350} direction="up">
            <div className="slider font-roboto">
                <div ref={testimonialRef} style={{width: "100%", overflowX: "scroll", scrollBehavior: "smooth"}}>
                    <div  className="card-holder flex">
                        {
                            data.map((item, index)=>{
                                return <div key={index} className="small-card-holder flex">
                                    <div className="card one">
                                        <img className="profile" src={item.one.img} alt="" />
                                        <div className="content flex-d-col">
                                            <img src={qoute} alt="" />
                                            <img src={rating} alt="" />
                                            <div className="light-bold font-20">{item.one.desc}</div>
                                            <div className="name">
                                                <div className="bold font-20">{item.one.name}</div>
                                                <div className="medium-bold">{item.one.designation}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card two">
                                        <img className="profile" src={item.two.img} alt="" />
                                        <div className="content flex-d-col">
                                            <img src={qoute} alt="" />
                                            <img src={rating} alt="" />
                                            <div className="light-bold font-20">{item.two.desc}</div>
                                            <div className="name">
                                                <div className="bold font-20">{item.two.name}</div>
                                                <div className="medium-bold">{item.two.designation}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>

                <div className="buttons flex-a-cen-j-cen">
                    <button onClick={()=>setSelectedIndex(0)} className={selectedIndex===0? "selected":""}></button>
                    <button onClick={()=>setSelectedIndex(1)} className={selectedIndex===1? "selected":""}></button>
                    <button onClick={()=>setSelectedIndex(2)} className={selectedIndex===2? "selected":""}></button>
                </div>
            </div>
        </Fade>
    </div>
}