import style from "./index.module.css";

const AboutSection = () => {
  return (
    <section className={style.about}>
      <div className={`container ${style["about-content"]}`}>
        <div>
          <p className={style["about-title"]}>about us</p>
          <h2 className={style["about-h2"]}>
            Working with a reputable travel agent takes the stress out of travel
          </h2>
          <p className={style["about-p"]}>
            Working with a reputable travel agent takes the stress out of travel
          </p>
        </div>
        <div>
          <p className={style["about-title"]}>
            Everything that can be necessary to create and manage new projects
            (startups) in modern conditions. From development of concept,
            business plan and project management plan, to marketing strategy and
            tactics, as well as the system of customer attraction via the
            Internet and sales system.
          </p>
          <div className={style["about-stats"]}>
            <div>
              <h3 className={style["about-number"]}>50%</h3>
              <p className={style["stats-title"]}>
                Sample text. Click to select the text box. Click again or double
                click to start editing the text.
              </p>
            </div>
            <div>
              <h3 className={style["about-number"]}>99%</h3>
              <p className={style["stats-title"]}>
                Sample text. Click to select the text box. Click again or double
                click to start editing the text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
