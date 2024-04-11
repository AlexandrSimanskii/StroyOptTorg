import { useEffect, useRef, useState } from "react";
import SideBar from "../Components/SideBar";
import Pagination from "../Components/Pagination";
import Form from "../Components/Form";

type Review = {
  _id: string;
  createdAt: string;
  name: string;
  email: string;
  text: string;
  images?: string;
};

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
                  </div>
                ))}
            </div>
            <Pagination
              setStartIndex={setStartIndex}
              limit={limit}
              countPages={countPages}
              setCountPages={setCountPages}
            />
            <Form />
          </div>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
