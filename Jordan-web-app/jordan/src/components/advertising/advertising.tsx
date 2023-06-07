import "./advertising.css";
import "../../App.css";

import Lista from '../../assets/advertising/main/desktop-banner-agenda.png'
import Lista_tablet from '../../assets/advertising/main/3d-illustration-of-agenda-book-tablet.png'
import Lista_smartphone from '../../assets/advertising/main/3d-illustration-of-agenda-book-smartphone.png'
import Titulo from '../../assets/advertising/main/titulo.png'
import Pdf from '../../assets/advertising/main/pdf.png'
import Xslx from '../../assets/advertising/main/excel.png'

import Header from "./header/header";
import Footer from "./footer/footer";
import Icon from "../props/icon";

function Advertising() {
  return (
    <div className="advertising">
      <Header />
      <div className="main">
        <div className="banner-agenda-info">
         <div className="lista-agenda">
            
            {/* desktop */}
            <Icon 
              className="lista" 
              src={Lista} 
              alt="beneficios" />
            {/* desktop */}

            {/* mobile */}
            <div className="banner-lista-mobile">

            {/* tablet banner */}
              <Icon 
                className="lista-mobile" 
                src={Lista_tablet} 
                alt="beneficios" />
             {/* tablet banner */}

            </div>

            <div className="text-lista-mobile">
              <li>CONTROLE AS DESPESAS E CUSTOS</li>
              <li>SALÁRIOS</li>
              <li>RELATÓRIOS</li>
              <li>AGENDA DE ATENDIMENTO</li>
              <li>COMPRAS DE SUPRIMENTOS</li>
              <li>E OUTROS</li>
            </div>

            {/* mobile */}

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
