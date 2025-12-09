import style from "./index.module.css";

const NewsCard = ({ card }) => {
  return (
    <div className={style.card}>
      <img className={style["card-image"]} src={card.image} alt={card.title} />
      <h3>{card.title}</h3>
      <div className={style["card-info"]}>
        <span className={style.date}>{card.date}</span>
        <span>Comments({card.comments})</span>
      </div>
    </div>
  );
};

export default NewsCard;
