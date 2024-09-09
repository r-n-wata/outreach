import styles from "./Card.module.scss";
import { Link } from "react-router-dom";
import comingSoon from "../../../assets/icons/comingSoon.png";

interface CardProps {
  title: string;
  desc: string;
  link: string;
  img: string;
  isComingSoon?: boolean;
}

function Card({ title, desc, link, img, isComingSoon }: CardProps) {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${img})` }}>
      <Link to={link} className={styles.link}>
        <div className={styles.content}>
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </Link>
      {isComingSoon && (
        <div className={styles.comingSoon}>
          <img
            src={comingSoon}
            alt="Retreats that are coming Soon"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}

export default Card;
