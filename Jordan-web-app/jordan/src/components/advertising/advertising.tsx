import "./advertising.css";
import "../../App.css";

import Lista from '../../assets/advertising/main/desktop-banner-agenda.png'
import Lista_tablet from '../../assets/advertising/main/3d-illustration-of-agenda-book-tablet.png'
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

              <Icon 
                className="lista-mobile" 
                src={Lista_tablet} 
                alt="banner agenda" />

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
              
              {/* desktop */}
              <Icon className="desktop-titulo" src={Titulo} alt="titulo" />
              {/* desktop */}

              {/* mobile */}
              <div className="mobile-titulo">
                <h2>GERE RELATÓRIOS E ANOTAÇÕES EM PDF OU XLSX!</h2>
              </div>
              {/* mobile */}

          </div>
          
          <div className="icons"> 
            <Icon className="pdf" src={Pdf} alt="icone pdf" />
            <Icon className="xlsx" src={Xslx} alt="icone excel" />
          </div>

        </div>

        <div className="smartv">
            <h1>Opa! Desculpe-nos o incômodo, porém verificamos
                que você utiliza um dispositivo de tela maior que o 
                desenvolvido para o app, no momento o aplicativo 
                está disponível apenas para: </h1>
              
            <div className="lista-dispositivos">
                
                <li>Computadores</li>
                <li>Notebooks</li>
                <li>Tablets</li>
                <li>Smartphones</li>

            </div>

            <br />

            <span>
              <h2>Verifique se:</h2>
                <li>O percentual de tela de seu monitor no browser está abaixo de 100%</li>
                <li>A largura (width) de seu dispositivo no browser é maior que 1444 px</li>
            </span>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Advertising;
