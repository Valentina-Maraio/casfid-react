import React, { useState } from "react";
import "./style/Contact.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ImFacebook } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Contacts = () => {
  const [email, setEmail] = useState("");

  const [check, setCheck] = useState(false);

  const validate = () => {
    return email.length && check;
  };

  const handleCheck = () => {
    setCheck(!check);
  };

  const submit = () => {
    alert("Enviado");
  };
  return (
    <>
      <Container className="d-flex justify-content-center">
        <Row>
          <Col md="auto">
              <h5>
                <b>CONTACT</b>
              </h5>
              <label>Email</label>
              <br />
              <input
                className="input"
                type="email"
                placeholder="Introduce tu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br />
              <input type="checkbox" value={check} onChange={handleCheck} />
              <label className="label_privacidad">
                Al suscribirte, aceptas{" "}
                <b>
                  <font color="blue">política de privacidad</font>
                </b>
              </label>
              <br />
              <button
                onClick={submit}
                disabled={!validate()}
                className="submit"
              >
                <b>ENVIAR</b>
              </button>
          </Col>
          <Col md="auto">
            <div className="justify-content-center">
              <h5>
                <b>SOCIAL MEDIA</b>
              </h5>
              <div className="social_box">
                <ul className="social_box">
                  <li className="facebook">
                    <ImFacebook size="25px"/>
                  </li>
                  <li className="instagram">
                    <AiOutlineInstagram size="25px"/>
                  </li>
                  <li className="linkedin">
                    <FaLinkedinIn size="25px"/>
                  </li>
                  <li className="youtube">
                    <FaYoutube size="25px"/>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <br/>
    </>
  );
};

export default Contacts;
