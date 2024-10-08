// ReviewCard.tsx
import React from "react";
import styles from "./ReviewCard.module.scss";
import speechMarks from "../../../assets/icons/speechMarks.webp";
import star from "../../../assets/icons/star.webp";
import user from "../../../assets/icons/user.webp";

interface ReviewCardProps {
  reviewerName: string;
  reviewText: string;
  rating: number;
  date: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  reviewerName,
  reviewText,
  rating,
  date,
}) => {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewBox}>
        <div className={styles.icon}>
          <img
            src={speechMarks}
            alt="reviews speech mark decoration"
            loading="lazy"
          />
        </div>
        <p className={styles.reviewText}>{reviewText}</p>
      </div>

      <div className={styles.reviewInfoCon}>
        <img src={user} alt="reviews user profile" loading="lazy" />{" "}
        <div className={styles.reviewInfo}>
          <h4 className={styles.reviewName}>{reviewerName}</h4>
          <span className={styles.rating}>
            {Array.from({ length: rating }, (_, index) => (
              <img
                src={star}
                alt="reviews star rating"
                key={index}
                loading="lazy"
              />
            ))}
          </span>
          <span className={styles.date}>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
