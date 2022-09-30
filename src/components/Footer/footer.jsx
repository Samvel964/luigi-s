import "./footer.scss";
import logo from "../../images/logo-white.png";
import { BsPinterest } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { BsTwitter, BsDribbble, BsVimeo } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pb-50 pt-70 pos-relative">
      <div className="pos-top triangle-bottom"></div>
      <div className="container-fluid">
        <a href="index.html">
          <img src={logo} alt="Logo" />
        </a>
        <div className="pt-30">
          <p className="underline-secondary">
            <b>Address:</b>
          </p>
          <p>481 Creekside Lane Avila Beach, CA 93424 </p>
        </div>
        <div className="pt-30">
          <p className="underline-secondary mb-10">
            <b>Phone:</b>
          </p>
          <a href="tel:+53 345 7953 32453 ">+53 345 7953 32453 </a>
        </div>

        <div className="pt-30">
          <p className="underline-secondary mb-10">
            <b>Email:</b>
          </p>
          <a href="mailto:yourmail@gmail.com"> yourmail@gmail.com</a>
        </div>

        <ul className="icon mt-30">
          <li>
            <a href="#">
              <BsPinterest />
            </a>
          </li>
          <li>
            <a href="#">
              <ImFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <BsDribbble />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="#">
              <BsVimeo />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
