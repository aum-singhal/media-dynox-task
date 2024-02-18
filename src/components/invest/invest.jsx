import { Fade } from "react-awesome-reveal";
import "./invest.css";

export default function Invest(){
    const data=[
        {title: "High Fixed Returns", desc: "Build your wealth with a personalised, diversified portfolio with expert advice."},
        {title: "Outperforming Market", desc: "Earn returns that are greater than the market average with minimal risk and a broader risk profile, we've proudly been beating the market since 2016 for our clients."},
        {title: "Get Funded", desc: "Operating under a model of profit sharing, we make money when our investors make money and our success depends on your success."}
    ]

    return <div className="invest-section flex-d-col">
        <Fade direction="up" triggerOnce>
            <div  className="font-40 text-upper font-roboto">
                <span className="bold">invest in</span>
                <span className="extra-bold light-gradient">dubai</span>
            </div>
        </Fade>

        <div className="content flex-d-col">
            <Fade direction="up" triggerOnce>
                <div  className="font-22 text-justify font-roboto">
                We provide our investors with fully-managed, high-yield investment products catering to all levels of risk appetite. Our team has the expertise to provide all of our investors with the education, guidance and support required to maximize profits both from a short and long-term perspective through their entire investment journey.
                </div>
            </Fade>

            <div className="card-holder flex">
                {
                    data.map((item, index)=>{
                        return <Fade direction="up" cascade={false} delay={index*180} triggerOnce className="card flex-d-col" key={index} >
                         <div className="card-card flex-d-col">
                            <div className="medium-bold font-22 font-noto-serif">{item.title}</div>
                            <div className="light-bold font-18 font-roboto">{item.desc}</div>
                            <div className="line"></div>
                        </div>
                        </Fade>
                    })
                }
            </div>
        </div>
    </div>
}