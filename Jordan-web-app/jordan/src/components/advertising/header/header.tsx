import './header.css';
import { Link, NavLink } from 'react-router-dom'
import Banner from '../../../assets/advertising/header/marketing.png'
import Logo from '../../../assets/advertising/header/x-logo.png'
import Github from '../../../assets/advertising/header/github.png'
import Instagram from '../../../assets/advertising/header/instagram.png'
import Facebook from '../../../assets/advertising/header/facebook.png'
import Linkedin from '../../../assets/advertising/header/linkedin.png'
import Youtube from '../../../assets/advertising/header/youtube.png'
import Acesse_aqui from '../../../assets/advertising/header/acesse_aqui.png'

function Header() {
    return (
      <div className="header">
       
       <div className='social-banner'>
          
          <div className='social'>
            <div className='social-container'>
              <img className='github'    
                   src={Github}     
                   alt="social"  
                   onClick={()=> window.open('https://github.com/LeonardoSousa89/demo-workers/tree/redesign')}/>
              <img className='linkedin'  
                   src={Linkedin}   
                   alt="social" 
                   onClick={()=>window.open('https://www.linkedin.com/company/jordan-app/about/?viewAsMember=true')}/>
              <img className='instagram' 
                   src={Instagram}  
                   alt="social"
                   onClick={()=>window.open('https://www.instagram.com/jordanapplication')} />
              <img className='facebook'  
                   src={Facebook}   
                   alt="social" 
                   onClick={()=>window.open('https://www.facebook.com/profile.php?id=100093243430633')} />
              <img className='youtube'   
                   src={Youtube}    
                   alt="social" 
                   onClick={()=>window.open('https://www.youtube.com/channel/UCrJUpc391D5z9KKl9FcOy4A')}/>
            </div>
          </div>

          <div className='banner'>
            <img src={Banner} alt="banner" />
          </div>

       </div>

       <div className='app-access'>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="acesse-aqui">
          <img src={Acesse_aqui} 
               alt="logo"
               onClick={()=>alert('acesse aqui')}/>
        </div>
       </div>
     
      </div>
    );
  }
  
  export default Header;