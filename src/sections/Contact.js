import { useState } from "react";
import ContactForm from "../components/contactForm";
import SectionSeperator from "../components/sectionSeperator";

export default function Contact() {
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  return (
    <div id="contact" className="div-ex contact-div">
      <SectionSeperator sectionName="Let's get together" />
      <div className="form-div">
        {isFormSubmitted ? (
          <div className="w-3/4">Form Sent! we'll be in touch!</div>
        ) : (
          <ContactForm setSubmitted={setFormSubmitted} />
        )}
      </div>
    </div>
  );
}
