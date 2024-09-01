import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReviewCard from "../../atoms/ReviewsCard/ReviewsCard";
import styles from "./Reviews.module.scss";
import { reviews } from "../../../utils/reviews";

const Reviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.reviewsContainer}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={2}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 1, // 1 slide for screens smaller than 480px
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1, // 1 slide for screens between 480px and 768px
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2, // 2 slides for screens between 768px and 1024px
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // 3 slides for screens larger than 1024px
            spaceBetween: 30,
          },
        }}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className={`${styles.swiperSlide} ${
              index === activeIndex ? styles.activeSlide : ""
            }`}
          >
            <ReviewCard
              reviewerName={review.name}
              reviewText={review.review}
              rating={review.stars}
              date={review.date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
