import { useState, useEffect } from "react";
import { News } from "../../types/types.ts";
import NewsCard from "./NewsCard.tsx";

const NewsComp = () => {
  const [news, setNews] = useState<News[]>([]);
  const getNews = async () => {
    try {
      const res = await fetch("/api/news/get?limit=4");
      const data = await res.json();
      setNews(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <div className="home-news__cards">
        {news.length > 0 &&
          news.map((data) => <NewsCard key={data._id} data={data} />)}
      </div>
    </>
  );
};

export default NewsComp;
