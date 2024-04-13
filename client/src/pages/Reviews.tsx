import { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import Pagination from "../Components/Pagination";
import Form from "../Components/Form";
import { Review } from "../types/types";

const Reviews = () => {
  const [isSortActive, setIsSortActive] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [limit, setLimit] = useState(10);
  const [startIndex, setStartIndex] = useState(0);
  const [countPages, setCountPages] = useState(1);

  const getReviews = async () => {
    const res = await fetch("/api/review/get");
    const data = await res.json();
    setReviews(data.review);
    setCountPages(data.totalPages);
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div className="reviews">
      <div className="container">
        <div className="delivery-inner">
          <div className="delivery-content">
            <h2 className="delivery-title">Отзывы</h2>
            <div className="reviews-sort">
              <button
                onClick={() => setIsSortActive(true)}
                className={`reviews-sort__btn  ${
                  isSortActive && "reviews-sort__btn--active"
                }`}
              >
                Сначала новые
              </button>
              <button
                onClick={() => setIsSortActive(false)}
                className={`reviews-sort__btn  ${
                  !isSortActive && "reviews-sort__btn--active"
                }`}
              >
                Сначала новые
              </button>
            </div>
            <div className="reviews-cards">
              {reviews.length > 0 &&
                reviews.map((item) => (
                  <div key={item._id} className="review-card">
                    <p className="review-card__name">{item.name}</p>
                    <p className="review-card__date">
                      {item.createdAt
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join(".")}
                    </p>
                    <p className="review-card__comment">{item.text}</p>
                    <div className="review-card__images">
                      {item.imageUrls?.map((img) => (
                        <img
                          className="review-card__image"
                          key={img}
                          src={img}
                          alt=""
                        />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
            {reviews.length > 10 && (
              <Pagination
                setStartIndex={setStartIndex}
                limit={limit}
                countPages={countPages}
                setCountPages={setCountPages}
              />
            )}
            {!reviews.length && <p>Пока никто не оставил свой отзыв</p>}
            <Form setReviews={setReviews} />
          </div>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
