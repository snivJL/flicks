import React from "react";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ShowReviews = ({ reviews }) => {
  console.log("REVIEWS", reviews);
  const handleShowMore = () => {};

  return (
    <>
      <h2 className="comments-title">Reviews ({reviews.length})</h2>
      {reviews.map((review) => (
        <li key={review.id}>
          <div className="comment-card">
            <div className="left-col">
              <div className="user-info">{review.author}</div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${review.author_details.avatar_path}`}
                alt="avatar"
              />
              <div className="rating-review">
                <FontAwesomeIcon
                  style={{ fontSize: "2rem", color: "yellow" }}
                  icon={faStar}
                />
                <div className="ratings-stat-review">
                  <div>
                    <span className="average-rating">
                      {review.author_details.rating}
                    </span>
                    /10
                  </div>
                </div>
              </div>
            </div>

            <div className="right-col">
              <div className="time">
                {`created `}
                <Moment fromNow>{review.created_at}</Moment>
              </div>
              <div className="comment-body">{review.content}</div>
            </div>
          </div>
          <ul className="show-more-button">
            <li onClick={handleShowMore}>
              <span className="arrow arrow-bottom"></span>
            </li>
          </ul>
        </li>
      ))}
    </>
  );
};

export default ShowReviews;
