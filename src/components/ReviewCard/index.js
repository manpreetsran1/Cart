import React from "react";
import reactStars from "react-rating-stars-component";
import profilePng from "../../images/Profile.png";
function index({ review }) {
  const options = {
    edit: false,
    color: "red",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: review.rating,
    isHalf: true,
  };
  return (
    <div className="reviewCard">
      <img src={profilePng} alt="User" />
      <p>{review?.name}</p>
      <reactStars {...options} />
      <span>{review?.comment}</span>
    </div>
  );
}

export default index;
