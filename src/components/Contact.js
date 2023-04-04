import React, { useState } from "react";

import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      if (name == "" || email == "" || message == "") {
        window.alert("Please Fill All fields");
        return;
      }
      const data = await fetch("https://formspree.io/f/mrgvlaaj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      console.log(data);

      setName("");
      setEmail("");
      setMessage("");

      window.alert("Thank You For Your message");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section id="header" className=" container" style={{ height: "80vh" }}>
        <div className="container d-flex align-items-center my-5  ">
          <form class="row g-3  " onSubmit={handleSubmit} method="post">
            <div class="col-md-6">
              <label class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="col-md-6">
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div class="col-12">
              <label class="form-label">Your Message</label>
              <input
                type="text"
                class="form-control"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary mb-3">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
