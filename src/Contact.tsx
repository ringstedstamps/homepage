
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import millImage from './Mill.jpg'; // Adjust the path as needed


// Link til Google ReCAPCHA key generation: https://www.google.com/recaptcha/admin/create
// google site key for ReCAPTCHA for localhost/127.0.0.1:   6Lc0h9wqAAAAAOud9SypytUXldGyB4jiByjLDf0c
// google secret  key for ReCAPTCHA:   6Lc0h9wqAAAAABLeOCBvRsgEdvQEekvkTkNI28GG

// google site key for ReCAPTCHA  for domain ringstedstamps.github.io :  6LeM49wqAAAAAL3azi9PJn8mCwbmmctcRO-v3s_L


// Link til EmailJS dashboard: https://dashboard.emailjs.com/admin/templates/s9uur3c
// EmailJS Public key:          3pKGZO5lBNF5r5q9f
// EmailJS private key:         r91QopLBjNq3MUDDXM0tp
// EmailJS Mail Template id:    template_dpqv7dr
// EmailJS Service id :         service_3zap7mq
function Contact() {


  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });

  // State for errors
  const [errors, setErrors] = useState({
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

  // Validate form fields
  const validateForm = () => {
    let isValid = true;
    let newErrors = { name: "", email: "", subject: "" };

    if (formData.name.trim() === "") {
      newErrors.name = "Navn skal udfyldes";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email skal udfyldes";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Ugyldig email format";
      isValid = false;
    }

    if (formData.subject.trim() === "") {
      newErrors.subject = "Besked skal udfyldes";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields before sending
    if (!validateForm()) {
      return;
    }

    // Check reCAPTCHA
    if (!captchaValue) {
      alert("Klik Jeg er ikke en robot");
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
          alert("Beskeden er sendt");
          setFormData({ name: "", email: "", subject: "" });
          setErrors({ name: "", email: "", subject: "" });
        },
        (error) => {
          console.error("Fejl ved afsendelse af beskeden", error);
          alert("Kunne ikke sende besked. Prøv lidt senere");
        }
      );
  };

  return (

    <div style={styles.container}>
      {/* <div style={{ maxWidth: "600px", margin: "auto", paddingLeft: "20px", paddingRight: "40px", border: "1px solid #ccc", borderRadius: "8px" }}> */}
      <div style={styles.formContainer}>
        <h2>Kontakt</h2>
        <label style={{ display: "block", marginBottom: "30px" }}>Du kan kontakte os ved at udfylde denne kontaktformular hvorefter vi vil vende tilbage snarest muligt</label>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Navn</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              // required
              style={{ width: "100%", height: "30px", padding: "8px", marginTop: "5px", border: "3px solid #000000" }}
            />
            {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              //required
              style={{ width: "100%", height: "30px", padding: "8px", marginTop: "5px", border: "3px solid #000000" }}
            />
            {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Besked</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              //required
              style={{ width: "100%", height: "30px", padding: "8px", marginTop: "5px", border: "3px solid #000000" }}
            />
            {errors.subject && <span style={{ color: "red" }}>{errors.subject}</span>}
          </div>

          {/* reCAPTCHA */}
          <div style={{ marginBottom: "50px" }}>
            <ReCAPTCHA sitekey="6Lc0h9wqAAAAAOud9SypytUXldGyB4jiByjLDf0c" onChange={handleCaptchaChange} />
          </div>

          <button type="submit" style={{ width: "50%", padding: "20px", backgroundColor: "black", color: "white", border: "none", borderRadius: "4px" }}>
            Send beskeden
          </button>
        </form>
      </div>
      <div style={styles.imageContainer}>
      <img src={millImage} alt="Logo" style={styles.image} />
      </div>
    </div>
  );
};



const styles = {
  container: {
    display: "flex",
    alignItems: "flex-start", // Aligns form & image to the top
    justifyContent: "space-between",
    maxWidth: "2000px",
    margin: "auto",
    padding: "20px",
    gap: "800px", // Increase space between form & image
   
  },
  formContainer: {
    flex: 1,
    paddingRight: "20px",
  },
  imageContainer: {
    flex: 1,
 //   textAlign: "right",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "right",
  },
  image: {
    width: "100%",
    maxWidth: "800px",
    borderRadius: "8px",
  },
};
export default Contact;
