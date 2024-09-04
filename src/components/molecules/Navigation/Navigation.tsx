import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";
import Logo from "../../../assets/logo.png";

function Navigation({ imgStyle }: { imgStyle: { [key: string]: string } }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src={Logo} alt="Logo" className={styles.logo} style={imgStyle} />
      </Link>
      <div
        className={`${styles.menuIcon} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <ul className={`${isOpen ? styles.open : ""} ${styles.nav_cont}`}>
        <li>HOME</li>
        <li
          className={isDropdownOpen ? "open casaDropdown" : "casaDropdown"}
          onClick={toggleDropdown}
        >
          RETREATS
          <ul className={styles.dropdown}>
            <li>
              <Link to="/retreats/watersport" onClick={toggleMenu}>
                WATERSPORTS RETREATS
              </Link>
            </li>
            <li>
              <Link to="/retreats/mountain" onClick={toggleMenu}>
                MOUNTAIN TRAILS RETREAT
              </Link>
            </li>
            <li>
              <Link to="" onClick={toggleMenu}>
                OCEANLOVERS RETREATS
              </Link>
            </li>
            <li>
              <Link to="" onClick={toggleMenu}>
                JUNGLE ANCESTRAL RETREAT
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
