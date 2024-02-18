import "./blogs.css";
import two from "../../assets/two.png";
import three from "../../assets/three.jpeg";
import { Fade } from "react-awesome-reveal";

export default function Blogs(){
    const data = [
        {type: "development", 
        data: "11 march, 2023", 
        title: "Best Website to research for your  next project", 
        desc: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs "},
    ]

    return <div className="blog-section flex-d-col">
        <Fade triggerOnce direction="up">
        <div className="font-40 text-upper font-roboto">
            <span className="bold">our</span>
            <span className="extra-bold light-gradient">blogs</span>
        </div>
        </Fade>

        <div className="content flex-d-col">
            <Fade triggerOnce direction="up">
                <div className="font-22 text-justify font-roboto">
                We provide our investors with fully-managed, high-yield investment products catering to all levels of risk appetite. Our team has the expertise to provide all of our investors with the education, guidance and support required to maximize profits both from a short and long-term perspective through their entire investment journey.
                </div>
            </Fade>

                <Fade direction="up" triggerOnce>
            <div className="card-holder">
                    <div className="big flex-a-cen-j-cen card">
                        <div className="blog flex-d-col">
                            <div className="head flex-a-cen-j-spbet font-roboto">
                                <div className="font-12 medium-bold gold-color">DEVELOPMENT</div>
                                <div className="font-12 medium-bold">11 March, 2023</div>
                            </div>

                            <div className="font-22 medium-bold font-noto-serif">
                            Best Website to research for your  next project
                            </div>

                            <div className="font-16 light-bold font-roboto">
                            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs 
                            </div>

                            <a href="" className="semi-bold font-roboto gold-color">Read More...</a>
                        </div>
                    </div>

                    <div className="one card">
                        <img src={two} alt="" />
                    </div>

                    <div className="two card">
                        <div className="blog flex-d-col font-roboto">
                            <div className="head flex-a-cen-j-spbet">
                                <div className="font-10 medium-bold gold-color">DEVELOPMENT</div>
                                <div className="font-10 medium-bold">11 March, 2023</div>
                            </div>

                            <div className="font-16 medium-bold font-noto-serif">
                            Best Website to research for your  next project
                            </div>

                            <div className="font-12 light-bold">
                            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs 
                            </div>

                            <a href="" className="semi-bold font-12 gold-color">Read More...</a>
                        </div>
                    </div>

                    <div className="three card">
                        <div className="blog flex-d-col font-roboto">
                            <div className="head flex-a-cen-j-spbet">
                                <div className="font-10 medium-bold gold-color">DEVELOPMENT</div>
                                <div className="font-10 medium-bold">11 March, 2023</div>
                            </div>

                            <div className="font-16 medium-bold font-noto-serif">
                            Best Website to research for your  next project
                            </div>

                            <div className="font-12 light-bold">
                            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs 
                            </div>

                            <a href="" className="semi-bold font-12 gold-color">Read More...</a>
                        </div>
                    </div>

                    <div className="four card">
                        <img src={three} alt="" />
                    </div>
            </div>
            </Fade>

            <Fade triggerOnce delay={300}> 
                <div className="flex-a-cen-j-cen">
                    <div className="outlined-button">
                        <div className="mas">Explore More</div>
                        <div className="button">Explore More</div>
                    </div>
                </div>
            </Fade>

        </div>
    </div>
}