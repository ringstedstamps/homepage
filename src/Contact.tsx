
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";


// google site key for ReCAPTCHA:   6Lc0h9wqAAAAAOud9SypytUXldGyB4jiByjLDf0c
// google secret  key for ReCAPTCHA:   6Lc0h9wqAAAAABLeOCBvRsgEdvQEekvkTkNI28GG

// EmailJS Public key:          3pKGZO5lBNF5r5q9f
// EmailJS private key:         r91QopLBjNq3MUDDXM0tp
// EmailJS Mail Template id:    template_dpqv7dr
// EmailJS Service id :         service_3zap7mq
function Contact ()
{
  
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });

  // State for reCAPTCHA
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle reCAPTCHA change
  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please complete the CAPTCHA!");
      return;
    }

    // EmailJS parameters
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_subject: formData.subject,
    };

    // Send email
    emailjs
      .send(
        "service_3zap7mq", // Replace with your EmailJS Service ID
        "template_dpqv7dr", // Replace with your EmailJS Template ID
        templateParams,
        "3pKGZO5lBNF5r5q9f" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        {/* reCAPTCHA */}
        <div style={{ marginBottom: "10px" }}>
          <ReCAPTCHA sitekey="6Lc0h9wqAAAAAOud9SypytUXldGyB4jiByjLDf0c" onChange={handleCaptchaChange} />
        </div>

        <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "4px" }}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;