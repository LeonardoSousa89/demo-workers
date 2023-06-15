import "./header.css";

import { useNavigate } from "react-router-dom";

import Logo from "../../../assets/advertising/header/x-logo.png";
import Github from "../../../assets/global/github.png";
import Instagram from "../../../assets/global/instagram.png";
import Facebook from "../../../assets/global/facebook.png";
import Linkedin from "../../../assets/global/linkedin.png";
import Youtube from "../../../assets/global/youtube.png";
import Acesse_aqui from "../../../assets/advertising/header/acesse_aqui.png";

import Icon from "../../props/icon";

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
      <div className="social-banner">
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
          
          <div>
            <h1 className="banner-text1">SUA AGENDA DIGITAL!</h1>
            <h1 className="banner-text2"> IDEAL PARA SEU NEGÓCIO!</h1>
          </div>

        </div>
      </div>

      <div className="app-access">
        <div className="logo">
          <Icon className="banner-logo" src={Logo} alt="logo" />
        </div>

        <div className="acesse-aqui">
          <Icon className="banner-acesse-aqui" src={Acesse_aqui} alt="logo" onClick={welcome} />
        </div>

      </div>
    </div>
  );
}

export default Header;
