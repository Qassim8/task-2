import imageOne from "../../assets/5t.jpg";
import imageTwo from "../../assets/Untitled-9.jpg";
import imageThree from "../../assets/min.jpg";
import NewsCard from "../NewsCard";
import style from "./index.module.css";

const NewsSection = () => {
  const newsContect = [
    {
      image: imageOne,
      title: "Post 1 Headline",
      date: "Fri Jun 19 2020",
      comments: 0,
    },
    {
      image: imageTwo,
      title: "Post 2 Headline",
      date: "Fri Jun 19 2020",
      comments: 0,
    },
    {
      image: imageThree,
      title: "Post 3 Headline",
      date: "Fri Jun 19 2020",
      comments: 0,
    },
  ];

  return (
    <section className={style.news}>
      <h2 className={style["news-head"]}>Latest News</h2>
      <div className={`container ${style.cards}`}>
        {newsContect.map((card, index) => (
          <NewsCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
