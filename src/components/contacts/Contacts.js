import React, { useState } from "react";
import "./style/Contact.css";

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
      <div className="contact_box">
        <div className="grid-container">
          <div className="grid-child purple">
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
            <button onClick={submit} disabled={!validate()} className="submit">
              <b>ENVIAR</b>
            </button>
          </div>
          <div className="grid-child green">
            <h5>
              <b>SOCIAL</b>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
