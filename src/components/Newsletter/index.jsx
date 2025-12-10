import { useState } from "react";
import style from "./index.module.css";

const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [messageError, setMessageError] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const nameRegEx = /^[A-Za-z][A-Za-z\s]*$/;
  const emailRegEx = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const checkName = (e) => {
    if (!nameRegEx.test(name) || name.length < 8) {
      setNameError("name must be a charctars and more than 8 chars ");
    } else {
      setNameError(null);
    }

    setName(e.target.value);
  };

  const checkEmail = (e) => {
    setEmail(e.target.value);
    if (!emailRegEx.test(email)) {
      setEmailError("invalid email address");
    } else {
      setEmailError(null);
    }
  };

  const checkMessage = (e) => {
    setMessage(e.target.value);
    if (message.length < 8) {
      setMessageError("your message is too short");
    } else {
      setMessageError(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = {};

    if (nameError || emailError || messageError) {
      error.name = nameError;
      error.email = emailError;
      error.message = messageError;
    }

    if (Object.values(error || {}).length > 0 || !name || !email || !message) {
      setDisabled(true);
    }
  };

  return (
    <section className={style.contact}>
      <div className="container">
        <form action="" className={style.form} onSubmit={handleSubmit}>
          <h2 className={style.title}>Join Our Newsletter</h2>
          <div className={style["form-group"]}>
            <label htmlFor="name" className={style.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              className={style.input}
              placeholder="Enter your Name"
              value={name}
              onChange={checkName}
            />
            {nameError && <p>{nameError}</p>}
          </div>
          <div className={style["form-group"]}>
            <label htmlFor="email" className={style.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              className={style.input}
              placeholder="Enter a valid email address"
              value={email}
              onChange={checkEmail}
            />
            {emailError && <p>{emailError}</p>}
          </div>
          <div className={style["form-group"]}>
            <label htmlFor="message" className={style.label}>
              Message
            </label>
            <textarea
              id="message"
              className={style.input}
              placeholder="Enter your Message"
              value={message}
              onChange={checkMessage}
            ></textarea>
            {messageError && <p>{messageError}</p>}
          </div>
          <button
            type="submit"
            className={style["form-btn"]}
            disabled={disabled}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
