import "./footer.css";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

import { toast } from "react-toastify";

import Play from "../../../assets/advertising/footer/pt-br_badge_web_generic (1).png";
import Phone from "../../../assets/advertising/footer/5-smartphone-png-image 1.png";
import Github from "../../../assets/advertising/header/github.png";
import Instagram from "../../../assets/advertising/header/instagram.png";
import Facebook from "../../../assets/advertising/header/facebook.png";
import Linkedin from "../../../assets/advertising/header/linkedin.png";
import Youtube from "../../../assets/advertising/header/youtube.png";

import { useEffect, useState } from "react";

import {
  send,
  github,
  facebook,
  instagram,
  linkedin,
  youtube,
  play,
} from "../../../services/advertising/service";

import Icon from "../props/icon";

function Footer() {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  useEffect(function () {}, [email, comment]);

  const verifyFields = (): string | undefined => {
    if (comment === "" || comment === null)
      return "por favor, insira um comentário!";
  };

  const clean = (): void => {
    setEmail("");
    setComment("");
  };

  const sendComment = () => send(email, comment, verifyFields, toast, clean);

  return (
    <div className="footer">
      <div className="play-store">
        <Icon className="play" src={Play} alt={"play"} onClick={play} />
        <Icon className="phone" src={Phone} alt={"phone"} />
      </div>
      <div className="contact">
        <div className="titulo">
          <h2 className="title">
            Acesse nossas redes sociais ou deixe um comentário!
          </h2>
        </div>
        <div className="form-social">
          <div className="form">
            <div className="formulary">
              {/* input email */}
              <InputGroup size="lg">
                <InputGroup.Text
                  id="inputGroup-sizing-lg"
                  style={{ color: "#192c54" }}
                >
                  Email
                </InputGroup.Text>
                <Form.Control
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
              {/* input email */}

              {/* input textarea */}
              <FloatingLabel
                controlId="floatingTextarea"
                label="deixe um comentário ou sugestão..."
                className="mb-3"
                style={{ color: "#192c54" }}
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px", marginTop: "20px" }}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </FloatingLabel>
              {/* input textarea */}

              <Button
                variant="primary"
                style={{ width: "100%", color: "#192c54" }}
                onClick={sendComment}
              >
                enviar
              </Button>
            </div>
          </div>
          <div className="social">
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
        <div className="copy">
          <strong>
            &copy;2023 Jordan possui todos os seus direitos reservados.
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Footer;
