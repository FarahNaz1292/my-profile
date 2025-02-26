'use client'
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_oab9k5h", "template_ei62bvn", form.current, {
        publicKey: "1WhfUKAtZ1Nq4qI1f",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="flex justify-center items-center bg-white w-50%">
        <div>
          <label>Name</label>
          <input type="text" name="user_name" />
        </div>

        <div>
          <label>Email</label>
          <input type="email" name="user_email" />
        </div>

       <div>
       <label>Subject</label>
       <input type="text" name="to_subject" />
       </div>

       <div>
       <label>Message</label>
       <textarea name="message" />
       </div>

        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default ContactMe;
