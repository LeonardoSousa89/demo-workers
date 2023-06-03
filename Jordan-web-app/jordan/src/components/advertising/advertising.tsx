import "./advertising.css";
import "../../App.css";

import Notificacao from '../../assets/advertising/main/notificacao-de-lembrete.png'
import Lista from '../../assets/advertising/main/lista-de-beneficios.png'
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
          <div className="lista">
            <img src={Lista} alt="lista de beneficios" />
          </div>
          <div className="notificacao">
            <img src={Notificacao} alt="notificacao" />
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
