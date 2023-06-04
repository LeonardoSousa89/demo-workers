import "./advertising.css";
import "../../App.css";

import Lista from '../../assets/advertising/main/desktop-banner-agenda.png'
import Titulo from '../../assets/advertising/main/titulo.png'
import Pdf from '../../assets/advertising/main/pdf.png'
import Xslx from '../../assets/advertising/main/excel.png'

import Header from "./header/header";
import Footer from "./footer/footer";

function Advertising() {
  return (
    <div className="advertising">
      <Header />
      <div className="main">
        <div className="banner-agenda-info">
         <div className="lista-agenda">
            <img className="lista" src={Lista} alt="beneficios" />
         </div>
        </div>
        <div className="banner-relatorio-xslx-pdf">
          <div className="titulo">
              <img src={Titulo} alt="titulo" />
          </div>
          <div className="icons">
            <img src={Pdf} alt="icone pdf" />
            <img src={Xslx} alt="icone excel" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Advertising;
