import Navigation from "../../molecules/Navigation/Navigation";
import { cardInfo } from "../../../utils/cardInfo";
import Card from "../../atoms/Card/Card";
import video from "../../../assets/hero.mp4";
import Reviews from "../../molecules/Reviews/Reviews";
import reviewImg from "../../../assets/watersport/her.jpeg";
import Footer from "../../molecules/Footer/Footer";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <section>
        {" "}
        <Navigation imgStyle={{ display: "none" }} />
        <div className={styles.backgroundVideoContainer}>
          {" "}
          <video autoPlay muted loop className={styles.backgroundVideo}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section className={styles.aboutUsContainer}>
        <div>
          <h2>LEARN A LITTLE</h2>
          <p className={styles.extra}>about us</p>
        </div>

        <div>
          <p>
            Our mission is to reintegrate individuals into a harmonious state
            with nature and the community through exclusive retreats. We promote
            practices of outdoor sports, yoga, meditation, and holistic
            therapies in an idyllic setting. We create transformative
            experiences that allow participants to reconnect with their inner
            selves, revitalize, and rediscover the lost connection with the
            serenity of nature.
          </p>
        </div>
      </section>
      <section className={styles.retreatsContainer}>
        <h2>RETREATS</h2>

        <div className={styles.cardContainer}>
          {cardInfo.map((info) => (
            <Card
              key={info.title} // Make sure to add a unique key for each item
              title={info.title}
              desc={info.desc}
              img={info.img}
              link={info.link}
              isComingSoon={info.comingSoon}
            />
          ))}
        </div>
      </section>

      <section className={styles.reviewsSec}>
        <div>
          <h2>HEAR WHAT OTHERS EXPERIENCE</h2>
          <p className={styles.extra}>with us</p>
        </div>

        <Reviews></Reviews>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
