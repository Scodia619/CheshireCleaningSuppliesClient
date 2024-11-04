import React from 'react'
import "../Styles/ContactUsForm.css"

function ContactUsForm() {

  const emailkey = import.meta.env.VITE_EMAIL_KEY

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", emailkey);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div>
        <form onSubmit={onSubmit} className="contact-form">
          <input type="text" name="name" placeholder='name' className='contact-input' required/>
          <input type="email" name="email" placeholder='email' className='contact-input' required/>
          <textarea name="message" placeholder='message' className='contact-input' required></textarea>
  
          <button type="submit" className="btn btn-primary">Submit Enquiry</button>
  
        </form>
        <span>{result}</span>
  
      </div>
    );
  }

export default ContactUsForm