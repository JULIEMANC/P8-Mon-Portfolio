import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';


const Contact = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isVisible, setIsVisible] = useState(false);
  const templateParams = {
    name: 'James',
    notes: 'Check this out!'
};
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, email, message });
      };
    
      useEffect(() => {
          const handleScroll = () => {
              const contactSection = document.querySelector('.contactSection');
              const rect = contactSection.getBoundingClientRect();
              const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
              setIsVisible(isVisible);
            };
        
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
              };
            }, []);
          emailjs.send('<service_djs0b04>','<template_3dr2sen>', templateParams, '<NXSgNPtljKag19zPunpm >')
          .then((response) => {
             console.log('SUCCESS!', response.status, response.text);
          }, (err) => {
             console.log('FAILED...', err);
          });
          
            return (
    <section className={`contactSection ${isVisible ? 'visible' : ''}`}>
      <h2 className="contactFooter">CONTACT</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Votre nom :
          <input type="yourName" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Votre e-mail :
          <input type="yourEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Message :
          <textarea type="yourMessage" value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <br />
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;



// const Contact = ({ onSubmit }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [isVisible, setIsVisible] = useState(false);
//   const [recaptchaValue, setRecaptchaValue] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Vérifiez si reCAPTCHA a été validé
//     if (recaptchaValue) {
//       onSubmit({ name, email, message });
//     } else {
//       alert('Veuillez valider reCAPTCHA avant de soumettre le formulaire.');
//     }
//   };

//   useEffect(() => {
//     console.log(recaptchaValue)
//     const handleScroll = () => {
//       const contactSection = document.querySelector('.contactSection');
//       const rect = contactSection.getBoundingClientRect();
//       const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
//       setIsVisible(isVisible);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleRecaptchaChange = (value) => {
//     setRecaptchaValue(value);
//   };
//   emailjs.send('<service_djs0b04>','<template_3dr2sen>', templateParams, '<NXSgNPtljKag19zPu>')
// 	.then((response) => {
// 	   console.log('SUCCESS!', response.status, response.text);
// 	}, (err) => {
// 	   console.log('FAILED...', err);
// 	});
//   return (
//     <section className={`contactSection ${isVisible ? 'visible' : ''}`}>
//       <h2 className="contactFooter">CONTACT</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Votre nom :
//           <input type="yourName" value={name} onChange={(e) => setName(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Votre e-mail :
//           <input type="yourEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Message :
//           <textarea type="yourMessage" value={message} onChange={(e) => setMessage(e.target.value)} />
//         </label>
//         <br />
//         {/* Intégrez le composant ReCAPTCHA */}
//         <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={handleRecaptchaChange} />

//         <br />
//         <button type="submit">Envoyer</button>
//       </form>
//     </section>
//   );
// };

// export default Contact;