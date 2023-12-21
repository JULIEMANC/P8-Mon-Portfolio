import React, {useState} from "react";


const Contact = ({onSubmit})=>{
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const[message, setMessage]=useState('');
const handleSubmit=(e)=>{
    e.preventDefault();
    onSubmit({name, email, message});
};

return(
    <section>
    <h2 className="contact">CONTACT</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email :
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Message :
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <br />
      <button type="submit">Envoyer</button>
    </form>
   
    </section>
 
 );
}

export default Contact;