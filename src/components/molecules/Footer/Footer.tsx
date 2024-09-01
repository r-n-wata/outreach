import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footer}>
        <p>Copyright © 2022 OutRetreats - All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
