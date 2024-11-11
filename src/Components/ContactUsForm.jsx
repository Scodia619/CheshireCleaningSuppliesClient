import React from 'react'
import "../Styles/ContactUsForm.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUsForm() {

  const emailkey = import.meta.env.VITE_EMAIL_KEY

  const notify = (message) => {
    toast(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

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
      notify("Form Submitted Successfully");
      event.target.reset();
    } else {
      notify(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="contact-form">
        <input type="text" name="name" placeholder='name' className='contact-input' required />
        <input type="email" name="email" placeholder='email' className='contact-input' required />
        <textarea name="message" placeholder='message' className='contact-input' required></textarea>

        <button type="submit" className="btn btn-primary">Submit Enquiry</button>

      </form>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default ContactUsForm