import "./footer.css";
import logo from "../../assets/logo.png";
import insta from "../../assets/footer/insta.png";
import facebook from "../../assets/footer/facebook.png";
import linkedin from "../../assets/footer/linkedin.png";

export default function Footer(){
  return <div className="footer font-roboto flex">
    <div className="item one flex-d-col">
      <img src={logo} alt="" height={70} />
      <div className="font-roboto">Interior Design Center Inc. A USA Based Photo Editing Company in Tokyo, Japan. Corporation NO. 524172-2,  Check Here.</div>
      <div className="font-roboto">
      <div className="flex-a-cen">
        +88(019)04-000012
      </div>
      <div className="flex-a-cen">
        Info.01241588@gmail
      </div>
      </div>
    </div>
    <div className="item flex-d-col two">
      <div className="font-20 medium-bold">Menu</div>
      <div className="flex-d-col">
        <div>Company</div>
        <div>Investors</div>
        <div>Products</div>
        <div>Jopunral</div>
        <div>Reach Us</div>
      </div>
    </div>
    <div className="item flex-d-col three">
      <div className="font-20 medium-bold">Useful link</div>
      <div className="flex-d-col">
        <div>Home</div>
        <div>Company</div>
        <div>Privacy Policy</div>
        <div>Terms and Conditions</div>
        <div>Return & Refund</div>
      </div>
    </div>
    <div className="item flex-d-col four">
      <div className="font-20 medium-bold">Follow Us</div>

      <div className="flex-a-cen">
        <img src={insta} alt="" /><img src={facebook} alt="" /><img src={linkedin} alt="" />
      </div>
    </div>
  </div>
}