import "./welcome.css";
import "../../../../App.css";

import Logo from "../../../../assets/jordan/welcome/x-logo.png";

import Icon from "../../../props/icon";

import { useNavigate } from "react-router-dom";

import { animation } from "../../../../services/jordan/welcome/service";

function Welcome() {
  let duration: number = 3000;

  const changeDirectory = useNavigate();

  const navigate = () => changeDirectory("/dashboard");

  animation(duration, navigate);

  return (
    <div className="welcome">
      <div className="title">
        <Icon className="logo" alt="logo" src={Logo} />
      </div>
    </div>
  );
}

export default Welcome;
