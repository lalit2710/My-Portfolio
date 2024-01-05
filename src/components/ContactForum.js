import React,{useRef} from 'react'
import emailjs from "@emailjs/browser"
import "./formstyles.css"



const ContactForum = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y3d1m6p', 'template_jpkthpq', form.current, 'MV6RWtqUD0MMxHbkf')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type='text'placeholder='Your Name' name="user_name"/>
            <label>Email</label>
            <input type='email'placeholder='Your Email' name="user_email"/>
            <label>Subject</label>
            <input type='text' placeholder='Regarding to what' name='user_subject'></input>
            <label>Message</label>
            <textarea rows={"6"} placeholder='Type your message here' name="message" />
            <input className= "btn" type="submit" value="Send" />
        </form>
    </div>
  )
}

export default ContactForum;