import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isVisible, setIsVisible] = useState(false);
  // const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (recaptchaValue) {
    //         onSubmit({ name, email, message });
    //       } else {
    //         alert('Veuillez valider reCAPTCHA avant de soumettre le formulaire.');
    //       }
    //     };

    const templateParams = {
      to_name: e.target[0].value,
      from_email: e.target[1].value,
      message: e.target[2].value,
    };

    emailjs
      .send(
        "service_djs0b04",
        "template_3dr2sen",
        templateParams,
        "FY6S8l9Kjkv3YMmBk"
      )

      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
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

  // const handleRecaptchaChange = (value) => {
  //   setRecaptchaValue(value);
  // };

  return (
    <section className={`contactSection ${isVisible ? "visible" : ""}`}>
      <h2 className="contactFooter">CONTACT</h2>
      <form onSubmit={handleSubmit} ref={form}>
        <label>
          Votre nom :
          <input type="yourName" name="to_name" />
        </label>
        <br />
        <label>
          Votre e-mail :
          <input type="yourEmail" name="from_email" />
        </label>
        <br />
        <label>
          Message :
          <textarea type="yourMessage" name="message" />
        </label>
        <br />
        {/* <ReCAPTCHA
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={handleRecaptchaChange}
        /> */}
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;
