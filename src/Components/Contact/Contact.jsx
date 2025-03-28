import React from 'react'
import'./Contact.css'
import msg_icon from'../../assets/msg-icon.png'
import mail_icon from'../../assets/mail-icon.png'
import phone_icon from'../../assets/phone-icon.png'
import location_icon from'../../assets/location-icon.png'
import white_arrow from'../../assets/white-arrow.png'
import { FaFacebook, FaInstagram } from "react-icons/fa";
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "325ec163-7255-479d-b7e4-b83488376972");
  
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
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon}alt="" /></h3>
            <p>"Feel free to reach out to us for any inquiries, feedback, or assistance.
                 We’re always happy to connect and help!" </p>
                 <ul>
                    <li><img src={mail_icon} alt="" />alocoffee20@gmail.com/ sales@alo-coffee.com</li>
                    <li><img src={phone_icon} alt="" />+251 930 177 620</li>
                    <li><img src={location_icon} alt="" />Addis Ababa, Ethiopia</li>
                    <li><a href="https://web.facebook.com/alocoffee20/" target="_blank" rel="noopener noreferrer"> <FaFacebook size={30} color="blue" /></a> Facebook</li>
                    <li><a href="https://www.instagram.com/alocoffee.et/" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} color="purple" /> </a> Instagram</li>
                  
                 </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number' required/>
                <label>Email address</label>
                <input type="email" name="email" placeholder="Enter your email" required />

                <label>Write your messages here</label>
                <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
                <button type="Submit" className='btn1'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact