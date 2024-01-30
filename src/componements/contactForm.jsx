import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const form = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recaptchaValue = form.current["g-recaptcha-response"].value;
    if (!recaptchaValue) {
      alert("Veuillez cocher la case 'Je ne suis pas un robot'");
      return;
    }

    const templateParams = {
      to_name: e.target[0].value,
      from_email: e.target[1].value,
      message: e.target[2].value,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )

      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
    form.current.reset();
  };

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.querySelector(".contactSection");
      const rect = contactSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={`contactSection ${isVisible ? "visible" : ""}`}>
      <h2 className="contactFooter">CONTACT</h2>
      <form onSubmit={handleSubmit} ref={form}>
        <label>Votre nom :</label>
        <input type="yourName" name="to_name" />

        <br />
        <label>Votre e-mail :</label>
        <input type="yourEmail" name="from_email" />
        <br />
        <label>Message :</label>
        <textarea type="yourMessage" name="message" />
        <br />
        <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_KEY} />
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;
