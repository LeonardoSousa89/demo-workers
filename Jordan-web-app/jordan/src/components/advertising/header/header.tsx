import "./header.css";

import { useNavigate } from "react-router-dom";

import Banner from "../../../assets/advertising/header/marketing.png";
import Logo from "../../../assets/advertising/header/x-logo.png";
import Github from "../../../assets/advertising/header/github.png";
import Instagram from "../../../assets/advertising/header/instagram.png";
import Facebook from "../../../assets/advertising/header/facebook.png";
import Linkedin from "../../../assets/advertising/header/linkedin.png";
import Youtube from "../../../assets/advertising/header/youtube.png";
import Acesse_aqui from "../../../assets/advertising/header/acesse_aqui.png";

import Icon from "../props/icon";

import {
  github,
  facebook,
  instagram,
  linkedin,
  youtube,
} from "../../../services/advertising/service";

function Header() {
  const navigate = useNavigate();

  const welcome = (): void => navigate("/welcome");

  return (
    <div className="header">
      {/* desktop */}
      <div className="social-banner-desktop">
        <div className="social">
          <div className="social-container">
            <Icon
              className="github"
              src={Github}
              alt={"social"}
              onClick={github}
            />
            <Icon
              className="linkedin"
              src={Linkedin}
              alt={"social"}
              onClick={linkedin}
            />
            <Icon
              className="instagram"
              src={Instagram}
              alt={"social"}
              onClick={instagram}
            />
            <Icon
              className="facebook"
              src={Facebook}
              alt={"social"}
              onClick={facebook}
            />
            <Icon
              className="youtube"
              src={Youtube}
              alt={"social"}
              onClick={youtube}
            />
          </div>
        </div>

        <div className="banner">
          <img src={Banner} alt="banner" />
        </div>
      </div>

      <div className="app-access-desktop">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="acesse-aqui">
          <img src={Acesse_aqui} alt="logo" onClick={() => welcome()} />
        </div>
      </div>
      {/* desktop */}

      {/* mobile-tablet */}

      {/* mobile-tablet */}

      {/* mobile-smartphone */}

      {/* mobile-smartphone */}
    </div>
  );
}

export default Header;
