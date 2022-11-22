// Used Form Bold API Service:

import React, { useState } from "react";
import axios from "axios";

export default function Forms() {
     // Input Change Handling
  const [inputs, setInputs] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  //clear Inputs after submit:
  const clearState = () => {
    setInputs({email: '', subject: '', message: 'Your message has been submitted!'});
  }

  // Server State Handling

  const handleOnSubmit = (event) => {
    event.preventDefault();

    console.log(inputs)

    axios({
      method: "POST",
      url: "https://formbold.com/s/6l8q6",
      data: inputs,
    })
      .then((r) => {
        console.log("Your message has been submitted!");
        clearState();
      })
      .catch((r) => {
        console.log("error");
      });

     
  };

  return (
    <form onSubmit={handleOnSubmit} >
      <div className="form-inputs">
      <label htmlFor="email">Email Address</label>
      <input
        onChange={handleOnChange}
        value={inputs.email}
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      </div>

      <div className="form-inputs">
      <label htmlFor="subject">Subject</label>
      <input
        onChange={handleOnChange}
        value={inputs.subject}
        id="subject"
        type="text"
        name="subject"
        placeholder="Subject"
        required
      />
      </div>

      <div className="form-inputs">
      <label htmlFor="message">Your message</label>
      <textarea
        onChange={handleOnChange}
        value={inputs.message}
        id="message"
        name="message"
        placeholder="Type your message"
        rows= '8'
        required
      />
      </div>
      <button id="contactSubmitBtn" type="submit"> Send Message </button>
    </form>
  )
}
