import './welcome.css';
import '../../../../App.css';

import Logo from '../../../../assets/jordan/welcome/x-logo.png'

import Icon from '../../../props/icon';

function Welcome() {
    return (
      <div className="welcome">
       <div className='title'>
         <Icon 
            className='logo'
            alt='logo'
            src={Logo}
         />
       </div>
      </div>
    );
  }
  
  export default Welcome;