import style from "./index.module.css";
import image from "../../assets/d-min.png";

const HeroSection = () => {
  return (
    <section className={style.hero}>
      <div>
        <h3 className={style["first-text"]}>In nature, nothing is perfect</h3>
        <h1 className={style["second-text"]}>and everything is perfect</h1>
        <button className={style["hero-btn"]}>read more</button>
      </div>
      <img src={image} alt="hand-holding-phone" className={style.image} />
    </section>
  );
};

export default HeroSection;
