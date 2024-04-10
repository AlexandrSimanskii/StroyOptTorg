import { useState } from "react";
import SideBar from "../Components/SideBar";

const Reviews = () => {
  const [isSortActive, setIsSortActive] = useState(false);

  return (
    <div className="reviews">
      <div className="container">
        <div className="delivery-inner">
          <div className="delivery-content">
            <h2 className="delivery-title">Отзывы</h2>
            <div className="reviews-sort">
              <button
                className={`reviews-sort__btn  ${
                  isSortActive && "reviews-sort__btn--active"
                }`}
              >
                Сначала новые
              </button>
              <button
                className={`reviews-sort__btn  ${
                  isSortActive && "reviews-sort__btn--active"
                }`}
              >
                Сначала новые
              </button>
            </div>
            <div className="reviews-cards">
              <div className="reviews-card"></div>
            </div>
          </div>
        </div>
        <SideBar />
      </div>
    </div>
  );
};

export default Reviews;
