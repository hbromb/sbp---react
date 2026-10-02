import { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  // Frontend mockup only: no data is sent or stored until a backend is connected.
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="page-section contact-page">
      <div>
        <p className="eyebrow">Get in contact</p>
        <h1>Let&apos;s talk about your project.</h1>
        <p className="page-lead">
          Contact Shepherd Brombley Partnership about your next building services project.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Company
              <input type="text" name="company" />
            </label>
          </div>
          <div className="contact-form-row">
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" />
            </label>
          </div>
          <label>
            How can we help?
            <textarea name="message" rows="5" required />
          </label>
          <button className="button button-dark" type="submit">
            Send enquiry <span>→</span>
          </button>
          {submitted && (
            <p className="form-notice" role="status">
              Thanks — this form is currently a preview and is not connected to email yet.
            </p>
          )}
        </form>
      </div>
      <div className="contact-details">
        <a href="mailto:enquiry@shepherdbrombley.co.uk">enquiry@shepherdbrombley.co.uk</a>
        <a href="tel:+441962832656">01962 832 656</a>
        <span>Unit 22, Basepoint Business Centre<br />1 Winnall Valley Road<br />Winchester, Hampshire SO23 0LD</span>
        <span>Company registration no. 8251351</span>
      </div>
    </section>
  );
}

export default Contact;
