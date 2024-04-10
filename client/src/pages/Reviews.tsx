import { useEffect, useState, useRef } from "react";
import SideBar from "../Components/SideBar";
import Pagination from "../Components/Pagination";
import { RxCross2 } from "react-icons/rx";

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
  const [files, setFiles] = useState<FileList | null>(null);
  const [previewImg, setPreviewImg] = useState<string[]>([]);
  const handleSubmit = async () => {};

  console.log(files);

  const getReviews = async () => {
    const res = await fetch("/api/review/get");
    const data = await res.json();

    setReviews(data.review);
    setCountPages(data.totalPages);
  };

  useEffect(() => {
    getReviews();
  }, []);
  useEffect(() => {
    if (files !== null) {
      setPreviewImg([...files].map((file) => URL.createObjectURL(file)));
    }
  }, [files]);

  console.log(previewImg);

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
            <form className="contact-form">
              <div className="contact-box">
                <label className="contact-label">
                  Ваше имя <span className="contact-label__required">*</span>:
                  <input
                    className="contact-input"
                    type="text"
                    placeholder="Введите ваше имя"
                  />
                </label>{" "}
                <label className="contact-label">
                  Email <span className="contact-label__required">*</span>:{" "}
                  <input
                    className="contact-input"
                    type="text"
                    placeholder="+7 (     )     -       -"
                  />
                </label>
              </div>
              <label className="contact-label">
                Текст отзыва <span className="contact-label__required">*</span>:{" "}
                <textarea
                  className="contact-textarea"
                  placeholder="Введите ваш вопрос"
                ></textarea>
              </label>{" "}
              <div className="reviews-files ">
                <p> Прикрепить фото:</p>
                <label
                  className={
                    previewImg.length == 0
                      ? "reviews-file"
                      : "reviews-file--active"
                  }
                >
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    hidden
                    onChange={(e) => {
                      setFiles(e.target.files);
                    }}
                  />
                  {previewImg.length !== 0 ? (
                    previewImg?.map((url, idx) => (
                      <div
                        className="reviews-file__img"
                        key={idx}
                        style={{ backgroundImage: `url(${url})` }}
                      >
                        <RxCross2 />
                      </div>
                    ))
                  ) : (
                    <>
                      {" "}
                      <img
                        width={20}
                        src="/images/icons/icon_Image.svg"
                        alt=""
                      />
                      Нажмите для загрузки или перетащите файл в это поле
                    </>
                  )}
                </label>
              </div>
              <div className="contact-box">
                <button className="contact-form__btn">отправить </button>

                <label className="contact-checkbox-group">
                  <input type="checkbox" /> Согласен с обработкой персональных
                  данных в соответствии с политикой конфиденциальности
                </label>
              </div>
            </form>
          </div>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
