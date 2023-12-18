import React from 'react';

const ContactConf = ({formData})=>{
    return(
        <div>
            <h2>Message envoyé !</h2>
            <p> Nom : {formData.name}</p>
            <p>Email : {formData.email}</p>
            <p>Message: {formData.message}</p>
        </div>
    );
};
export default ContactConf ; 
