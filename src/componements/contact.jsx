import React, { useState } from 'react';
import FormConfirmation from './contactConf';
import ContactForm from './contactForm';


const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({});
  
    const handleFormSubmit = (data) => {

      setFormData(data);
      setFormSubmitted(true);
    };
  
    return (
      <div id="contact">
        {!formSubmitted ? (
        <ContactForm onSubmit={handleFormSubmit} />
        ) : (
          <FormConfirmation formData={formData} />
        )}
      </div>
    );
  };
  
  export default Contact;