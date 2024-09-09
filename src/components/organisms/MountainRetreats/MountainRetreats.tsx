import styles from "./MountainRetreats.module.scss";
import { mountRetreats } from "../../../utils/retreats";
import RetreatsCard from "../../molecules/RetreatsCard/RetreatsCard";
import Navigation from "../../molecules/Navigation/Navigation";
import Footer from "../../molecules/Footer/Footer";

function MountainRetreats() {
  return (
    <main className={styles.main}>
      <Navigation imgStyle={{ display: "block" }} />
      {mountRetreats.map((retreat, index) => (
        <RetreatsCard
          key={index}
          imgs={retreat.photos}
          title={retreat.title}
          summary={retreat.summary}
          includes={retreat.includes}
          prices={retreat.prices}
          index={index}
          discounts={retreat.discounts}
          headerImg={retreat.headerImg}
        />
      ))}
      <Footer />
    </main>
  );
}

export default MountainRetreats;
