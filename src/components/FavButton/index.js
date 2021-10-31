import React from "react";
import { Button } from "./styles";
import likeActive from "../../assets/likeActive.png";
import like from "../../assets/like.png";

export const FavButton = ({ liked, likes, onClick }) => {
  return (
    <Button onClick={onClick}>
      <img width="30px" src={liked ? likeActive : like} alt="like-button" />
      <span>
        {" "}
        {likes} {likes === 1 ? "like" : "likes"}
      </span>
    </Button>
  );
};
