import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import Play from '../../../assets/advertising/footer/pt-br_badge_web_generic (1).png'
import Phone from '../../../assets/advertising/footer/5-smartphone-png-image 1.png'
import Title from '../../../assets/advertising/footer/title.png'

import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="play-store">
       <img className="play" 
            src={Play} 
            alt="play"
            onClick={()=>window.open('https://pt.wix.com/website-template/view/html/1936?originUrl=https%3A%2F%2Fpt.wix.com%2Fwebsite%2Ftemplates&tpClick=view_button&esi=0a405a20-9139-4dea-9674-ffa0ef4a5b8b')} />
       <img className="phone" src={Phone} alt="phone" />
      </div>
      <div className="contact">
        <div className="titulo">
          <img className="title" src={Title} alt="titulo" />
        </div>
        <div className="form-social"></div>
        <div className="copy"></div>
      </div>
    </div>
  );
}

export default Footer;
