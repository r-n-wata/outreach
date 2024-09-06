// src/Contact.js
import { useState, useEffect } from "react";
import styles from "./Contact.module.scss";
import Navigation from "../../molecules/Navigation/Navigation";
import background1 from "./../../../assets/watersport/21-renewals/3.png";
import background2 from "./../../../assets/mountain/7-day-peru/7.jpg";
import Footer from "../../molecules/Footer/Footer";

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check the screen width
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 868); // Change the number based on your mobile breakpoint
    };

    // Check on mount
    checkMobile();

    // Add resize event listener
    window.addEventListener("resize", checkMobile);

    // Clean up the event listener
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <>
      <Navigation imgStyle={{}} />

      <div className={styles.contactPage}>
        <div className={styles.contactContainer}>
          <div className={styles.photoSection}>
            <img
              src={isMobile ? background2 : background1}
              alt="Contact"
              className={styles.contactPhoto}
            />
          </div>
          <div className={styles.infoSection}>
            <h2 className={styles.contactTitle}>Contact Us</h2>
            <div className={styles.contactLinks}>
              <a
                href="https://wa.me/+529832122949?text=Hi, I would like to find out more about your services."
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contactLink} ${styles.whatsapp}`}
              >
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/outretreats"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contactLink} ${styles.instagram}`}
              >
                Instagram
              </a>
            </div>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className={styles.formControl} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className={styles.formControl} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className={styles.formControl}
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
