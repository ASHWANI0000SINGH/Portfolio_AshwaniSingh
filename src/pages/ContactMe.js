import React from "react";
import "../style/ContactMe.css";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const ContactMe = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_22pr5hq",
        "template_doyytks",
        e.target,
        "nf7URVax04z2-cAkM"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.message.value = "";
  };

  return (
    <div>
      <h2 className=" justify-content-center d-flex p-4">ContactMe </h2>
      <div className="container p-3">
        <div className="row p-4">
          <div className="col-md-12 d-flex justify-content-center p-1  ">
            <form className="m-2 form-outline" onSubmit={onSubmit}>
              {/* register your input into the hook by invoking the "register" function */}
              <input
                className="input-style"
                name="name"
                type="text"
                placeholder="Name"
              />
              <br />
              <input
                className="input-style"
                name="email"
                type="email"
                placeholder="Email"
              />
              <br />
              <br />
              <textarea
                className="input-style"
                name="message"
                id=""
                cols="19"
                rows="4"
                placeholder="message"
              ></textarea>
              <br />
              <input
                type="submit"
                value="Submit"
                className="input-style btn btn-success"
                p-2
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
