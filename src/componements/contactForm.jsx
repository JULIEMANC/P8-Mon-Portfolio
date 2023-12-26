import React, { useState, useEffect } from 'react';

const Contact = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

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
